
import { shortenedLinkType } from '../types/linkType'


const ShrtCodeApi: string = 'https://api.shrtco.de/v2'


export const fetchFunc = async (url: string) => {
    try {
      const response = await fetch(`${url}`)
      const data = await response.json()
      return data
    } catch (err) {
      return err
    }
  }
export const fetchShrtCode = async (link: string) => {
    let finalLink: shortenedLinkType
    const data = await fetchFunc(`${ShrtCodeApi}/shorten?url=${link}`)
    if (data.ok) {
      const { result: {original_link, full_short_link } } = await data
      finalLink = {
        originalLink: {
          path: original_link,
          name: original_link
        },
        shortenedLink: {
          path: full_short_link,
          name: full_short_link
        }
      }
      return {ok: true, finalLink}
    } else {
      return {ok: false, data}
    }
}
export const fetchShrtCodeErrHandler =
  (error_code: number): string => {
  switch (error_code) {
    case 1:
      return 'Please add a URL'
    case 2:
      return 'URL is invalid'
    case 3:
      return 'Wait a second and try again'
    case 4:
      return 'Your IP Address has been blocked for violation'
    case 10:
      return 'This link is disallowed.'
    default:
      return 'An unknown error occured! Please try again'
  }
}