#!/usr/bin/env node
import { Command } from 'commander'
import { validateEmail, getBlogPost, getPinnedPost, meow } from './util.js'
import { register } from './autoReg.js'
import open from 'open'
const java21 = new Command()

java21.version('0.0.1')

java21
  .command('reg')
  .usage('-n "John Doe" -m "john.d@gmail.com')
  .description('register attendance for school')
  .requiredOption('-n, --name', 'your name to be registred, "John Doe"')
  .requiredOption('-m, --mail', 'your email, "john.d@gmail.com')
  .action((_, args) => {
    const [name, mail] = args.args

    if (validateEmail(mail)) {
      register({ name, mail })
    } else {
      console.log('Wrong email format')
    }
  })

java21
  .command('latest')
  .description('get title of 5 latest java21v article')
  .action(async () => {
    const data = await getBlogPost()
    data.map((art) => {
      console.log(
        `${new Date(art.publishedAt).toLocaleDateString()} ${art.title}`
      )
    })
  })

java21
  .command('pinned')
  .description('get pinned articles')
  .action(async () => {
    const data = await getPinnedPost()
    data.map((art) => {
      console.log(
        `${new Date(art.publishedAt).toLocaleDateString()} ${art.title}`
      )
    })
  })

java21
  .command('meow')
  .description('cat says mwoq')
  .action(async () => {
    const data = await meow()
    await open(data[0].url)
  })

java21.parse(process.argv)
