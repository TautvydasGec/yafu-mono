import { readdirSync, writeFileSync } from 'fs'
import { mkdirpSync } from 'fs-extra'
import {
  basename,
  extname,
  join,
  normalize,
} from 'path'

function createIndex (projectPath) {
  function getFileBaseName (fullName) {
    const ext = extname(fullName)
    return basename(fullName, ext)
  }

  function getAbsolute (relative) {
    return normalize(join(projectPath, relative))
  }

  const jsFiles = readdirSync(getAbsolute('lib'))
    .map(getFileBaseName)
    .filter((s) => s.indexOf('_') !== 0)

  const imports = jsFiles.map((item) => {
    const pathName = `./${item}.js`
    return `export * from '${pathName}'`
  }).join('\n')

  mkdirpSync('dist')
  writeFileSync(getAbsolute('dist/index.js'), imports)
}

createIndex(process.cwd())
