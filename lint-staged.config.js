module.exports = {
  'src/**/*.{ts,tsx}': [() => 'tsc --noEmit', 'eslint', 'prettier --write'],
}
