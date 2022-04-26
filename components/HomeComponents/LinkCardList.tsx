
import { useState } from 'react'
import LinkCard from "./LinkCard"
import { linkType } from '../../types/linkType'
import { shortenedLinkType } from '../../types/linkType';

type linkCardListProps = {
  shortenedLinks: Array<shortenedLinkType>
  extraClasses: string
}

const LinkCardList = ({
  shortenedLinks,
  extraClasses }: linkCardListProps): JSX.Element => {
  const [copied, setCopied] = useState<string>('')

  return (
    <ul className={` ${extraClasses}`}>
      {
        shortenedLinks.map(link => {
          const { originalLink, shortenedLink } = link
          return (
            <LinkCard
              currentCopied={copied}
              setCopied={setCopied}
              key={link.originalLink.path}
              originalLink={originalLink}
              shortenedLink={shortenedLink} />
          )
        })
      }
    </ul>
  )
}

export default LinkCardList