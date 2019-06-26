import inquirer from 'inquirer'
import chalk from 'chalk'

import db from './'
import { dbConfig } from '../shared'

const prompt = inquirer.createPromptModule()

const setup = async () => {
  const answer = await prompt([
    {
      type: 'confirm',
      name: 'setup',
      message: 'This will destroy your database, are you sure?'
    }
  ])

  if (!answer.setup) {
    // eslint-disable-next-line no-console
    return console.log(`${chalk.blue('Nothing happened :)')}`)
  }

  try {
    await db(dbConfig(true))
    // eslint-disable-next-line no-console
    console.log(`${chalk.green('Success!')}`)
    process.exit(0)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`${chalk.red('[FATAL ERROR]')} ${chalk.blue(err.message)}`)
    // eslint-disable-next-line no-console
    console.error(err.stack)
    process.exit(1)
  }
}

setup()
