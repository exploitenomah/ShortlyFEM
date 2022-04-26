

export type linkType = {
  path: string,
  name: string,
  sub_paths?: [{ path: string, name: string }],
  category?: string
}

export type shortenedLinkType = {
  originalLink: linkType
  shortenedLink: linkType
}