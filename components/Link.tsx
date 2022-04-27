
import Link from 'next/link'
import { linkType } from '../types/linkType'

type linkProps = {
  link: linkType,
  extraClasses?: string,
  onClick?: Function
}


export const BasicLink = ({
  link,
  extraClasses }: linkProps): JSX.Element => {
  const { path, name } = link
  return (
    <Link  href={path}>
      <a
        target='_blank'
        className={` ${extraClasses}`}>
      {name ? name : path}
      </a>
    </Link>
  )
}
