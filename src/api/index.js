import chalk from 'chalk'

import app from './app'

const port = process.env.PORT || 8080

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`${chalk.blue(`App is running at port ${port}`)}`)
)
