
import { BasicLink } from '../Link'
import { SquaredCyanBtn } from '../Buttons'
import { linkType } from '../../types/linkType'
import { copyText } from '../../helpers/GeneralHelpers'


type linkCardProps = {
  originalLink: linkType,
  shortenedLink: linkType,
  setCopied: Function,
  currentCopied: string
}
const LinkCard = ({
  currentCopied,
  setCopied,
  originalLink,
  shortenedLink }: linkCardProps): JSX.Element => {

  const copyLink = () => {
    copyText(shortenedLink.path)
    setCopied(shortenedLink.path)
  }
  const isCopied = currentCopied === shortenedLink.path
  return (
    <li
      className={`bg-white flex flex-col rounded-lg mb-6 md:flex-row md:items-center md:mb-4 md:px-6 md:py-3`}>
      <BasicLink
        extraClasses={`text-blue-900 px-5 py-2.5 border-b border-gray border-solid md:basis-3/6 md:border-none md:p-0 `}
        link={originalLink} />
      <BasicLink
        extraClasses={`text-cyan px-5 py-2.5 md:basis-2/6 md:p-0 md:ml-auto md:mr-5 md:text-right `}
        link={shortenedLink} />
      <SquaredCyanBtn
        type='button'
        onClick={copyLink}
        text={isCopied ? 'copied!' : 'copy'}
        extraClasses={`px-2 py-1.5 mx-[auto] mb-3.5 mt-1 max-w-[92%] sm:max-w-[95%] md:basis-1/6 md:max-w-[7rem] md:m-0  md:p-1 md:rounded-md ${isCopied ? 'bg-violet-800' : ''}`} />
    </li>
  )
}

export default LinkCard