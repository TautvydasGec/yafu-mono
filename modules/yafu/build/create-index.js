import { readdirSync, writeFileSync } from 'fs'
import { mkdirpSync } from 'fs-extra'
import {
  basename,
  extname,
  join,
  normalize,
} from 'path'

function appendJS (f) {
  return `${f}.js`
}

function createImportExport (item) {
  return `export * from './${item}'`
}

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

  const jsImports = jsFiles.map((f) => createImportExport(appendJS(f))).join('\n')
  const typeDefImports = jsFiles.map((f) => createImportExport(f)).join('\n')

  mkdirpSync('dist')
  writeFileSync(getAbsolute('dist/index.js'), jsImports)
  writeFileSync(getAbsolute('dist/index.d.ts'), typeDefImports)
}

createIndex(process.cwd())
