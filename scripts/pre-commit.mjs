import chalk from 'chalk'

console.log(chalk.cyan('🔍 Running pre-commit checks...\n'))

process.on('exit', (code) => {
  if (code === 0) {
    console.log(chalk.green('\n✅ Pre-commit checks passed\n'))
  } else {
    console.log(chalk.red('\n❌ Pre-commit checks failed\n'))
  }
})
