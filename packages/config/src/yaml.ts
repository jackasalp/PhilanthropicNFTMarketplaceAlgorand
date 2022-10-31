import yaml from 'yaml'
import { markFileParsers } from './parser'

export const {
  read: readYaml,
  write: writeYaml,
  edit: editYaml,
  readSync: readYamlSync,
} = markFileParsers({
  read: (fileContents: string) => yaml.parse(fileContents),
  write: (obj: any) => yaml.stringify(obj),
})
