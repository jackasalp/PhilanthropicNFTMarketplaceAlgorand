import fs from 'fs'
import path from 'path'
function findWorkspaceRoot(p?: string): string {
  if (!p) {
    p = process.cwd()
  }
  if (fs.existsSync(p + '/yarn.lock')) {
    return p
  }
  if (p === '/') {
    return '/'
  }
  return findWorkspaceRoot(p + '/..')
}

export function workspacePath(...rest: string[]) {
  return path.join(findWorkspaceRoot(process.cwd()), ...rest)
}
