import fetch from 'node-fetch'

export const getBlogPost = async () => {
  const res = await fetch(
    'https://java21v.lms.nodehill.se/api/articles?klass=java21v&admin='
  )

  const data = await res.json()
  return data.sort((a, b) => b.publishedAt - a.publishedAt).slice(0, 5)
}

export const getPinnedPost = async () => {
  const a = await fetch(
    'https://java21v.lms.nodehill.se/api/articles?klass=java21v&admin='
  )

  const data = await a.json()
  return data
    .filter((a) => {
      return a.pinned === true
    })
    .sort((a, b) => b.publishedAt - a.publishedAt)
    .slice(0, 10)
}

export const validateEmail = (email) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if (email.match(validRegex)) return true
  return false
}

export const meow = async () => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search')

  return await res.json()
}
