const shouldRunChecks = process.env.ENFORCE_PRECOMMIT === 'true'

if (!shouldRunChecks) {
  console.log(
    'Pre-commit checks are disabled. Set ENFORCE_PRECOMMIT=true to enable',
  )
  module.exports = {
    '*': () => [],
  }
} else {
  const {readdirSync} = require('fs')
  const {relative} = require('path')

  const cacheOptions = (strategy, cacheFile) =>
    `--cache --cache-strategy ${strategy} --cache-location .lint-cache/${cacheFile}`

  const eslint = `eslint --report-unused-disable-directives --fix`
  const prettier = `prettier --write ${cacheOptions('metadata', '.prettiercache')}`

  const getRootDeclarationFiles = () => {
    const files = readdirSync('./', {withFileTypes: true})
    return files
      .filter((file) => !file.isDirectory() && file.name.endsWith('.d.ts'))
      .map((file) => file.name)
  }

  const typeCheck = (files) => {
    const cwd = process.cwd()
    const relativePaths = files.map((file) => relative(cwd, file)).join(' ')
    const declarationFiles = getRootDeclarationFiles().join(' ')

    return `npx tscw --noEmit ${relativePaths} ${declarationFiles}`
  }

  module.exports = {
    'src/**/*.{ts,tsx}': [prettier, typeCheck, eslint],
    'src/**/*.{js,jsx,json}': [prettier, eslint],
  }
}
