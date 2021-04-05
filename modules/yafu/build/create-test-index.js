const { readdirSync, writeFileSync } = require('fs')
const {
  basename,
  extname,
  join,
  normalize,
} = require('path')

function createIndex (projectPath) {
  function getFileBaseName (fullName) {
    const ext = extname(fullName)
    return basename(fullName, ext)
  }

  function getAbsolute (relative) {
    return normalize(join(projectPath, relative))
  }

  const jsFiles = readdirSync(getAbsolute('test'))
    .map(getFileBaseName)
    .filter((s) => s.indexOf('_') !== 0)

  const imports = jsFiles.map((item) => {
    const pathName = `./${item}`
    return `export * from '${pathName}'`
  }).join('\n')

  writeFileSync(getAbsolute('test/index.js'), imports)
}

createIndex(process.cwd())
