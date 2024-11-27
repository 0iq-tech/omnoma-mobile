const {readdirSync} = require('fs')
const {relative} = require('path')

const getRootDeclarationFiles = () => {
  const files = readdirSync('./', {withFileTypes: true})
  return files
    .filter((file) => !file.isDirectory() && file.name.endsWith('.d.ts'))
    .map((file) => file.name)
}

module.exports = {
  'src/**/*.{ts,tsx}': [
    (files) => {
      const cwd = process.cwd()
      const relativePaths = files.map((file) => relative(cwd, file)).join(' ')
      const declarationFiles = getRootDeclarationFiles()

      return `npx tscw --noEmit ${relativePaths} ${declarationFiles.join(' ')}`
    },
    'eslint',
    'prettier --write',
  ],
}
