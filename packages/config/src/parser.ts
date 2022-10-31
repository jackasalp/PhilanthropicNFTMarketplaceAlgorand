import fs from 'fs/promises'
import _fs from 'fs'

export interface FilterParserConfigArgs<T> {
  read: (fileContents: string) => T
  write: (obj: T) => string
}

export function markFileParsers<T>(config: FilterParserConfigArgs<T>) {
  const ret = {
    read: async (file: string) => {
      const contents = await fs.readFile(file)
      return config.read(contents.toString())
    },
    readSync: (file: string) => {
      const contents = _fs.readFileSync(file)
      return config.read(contents.toString())
    },
    write: async (file: string, obj: T) => {
      const contents = config.write(obj)
      await fs.writeFile(file, contents)
    },
    edit: async (file: string, edit: (obj: T) => T) => {
      const obj = await ret.read(file)
      const newObj = edit(obj)
      await ret.write(file, newObj)
    },
  }
  return ret
}
