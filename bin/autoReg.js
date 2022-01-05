import puppeteer from 'puppeteer'

const URL =
  'https://snake.nodehill.com/?Javautvecklare%2021v,%20Plushögskolan%20Lund'

const NAME_INPUT = '.name'
const EMAIL_INPUT = '.email'
const BUTTON = 'input:last-of-type'

export const register = async ({ name, mail }) => {
  try {
    const t0 = performance.now()
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(URL)
    await page.click(NAME_INPUT)
    await page.keyboard.type(name)
    await page.click(EMAIL_INPUT)
    await page.keyboard.type(mail)
    await page.click(BUTTON)
    await browser.close()
    const t1 = performance.now()
    console.log(`Närvaro registrerad på namn ${name}`)
    console.log(`Det tog ${(t1 - t0) / 1000} sekunder.`)
  } catch (error) {
    console.error(error)
  }
}
