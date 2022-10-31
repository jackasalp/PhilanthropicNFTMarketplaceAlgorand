import * as dotenv from 'dotenv-flow'
import fs from 'fs-extra'
import path from 'path'
import z from 'zod'
import { workspacePath } from './core'
import { readYamlSync } from './yaml'

export const numberOrNumberStr = z
  .union([z.string(), z.number()])
  .transform((val): number => {
    if (typeof val === 'string') {
      const parsedInt = parseInt(val, 10)
      if (isNaN(parsedInt)) {
        throw new Error('Invalid number')
      }
      return parsedInt
    }
    return val
  })

function loadModuleConfig(moduleName: string) {
  const yamlPath = workspacePath('config', `${moduleName}.yml`)
  if (fs.existsSync(yamlPath)) {
    return readYamlSync(yamlPath)
  }
  return {}
}

const envPath = workspacePath()
const envYamlPath = path.join(envPath, 'env.yml')
let envYaml: any = {}
if (fs.existsSync(envYamlPath)) {
  envYaml = readYamlSync(envYamlPath)
}

dotenv.config({
  path: envPath,
})

let alreadyLogged: { [key: string]: boolean } = {}
const logOnce = (msg: string, ...rest: any[]) => {
  if (!alreadyLogged[msg]) {
    alreadyLogged[msg] = true
  }
}

const profileVarName = 'ENV_PROFILE'

type Optional<T> = T | undefined

function getEffectiveVar(
  varName: string,
  profile?: string,
  module?: string
): Optional<any> {
  if (!profile && varName !== profileVarName) {
    // Check if we have a profile
    profile = getEffectiveVar(profileVarName)
    if (profile) {
      logOnce(`Using profile ${profile}`)
    }
  }

  const moduleVars = module ? loadModuleConfig(module) : {}

  let profileVars = {
    ...envYaml?.profiles?.[profile ?? ''],
  }

  if (typeof profileVars !== 'object') {
    profileVars = {}
  }

  const retu =
    // Module profile vars take precedence
    moduleVars?.profiles?.[profile ?? '']?.[varName] ??
    // Then module vars
    moduleVars?.[varName] ??
    // Then profile vars (global)
    profileVars[varName] ??
    // Then global vars
    envYaml?.[varName] ??
    // Then process.env
    process.env[varName]
  return retu
}

export function createConfig<
  T extends z.ZodRawShape,
  Out = z.infer<z.ZodObject<T>>
>(zodObj: z.ZodObject<T>) {
  return {
    get: () => {
      const out: Out = {} as any
      for (const key in zodObj.shape) {
        const val = getEffectiveVar(key)
        ;(out as any)[key] = val
      }

      const parsed = zodObj.safeParse(out as any)
      if (parsed.success) {
        return parsed.data
      } else {
        throw new Error(parsed.error.message)
      }
    },
  }
}
