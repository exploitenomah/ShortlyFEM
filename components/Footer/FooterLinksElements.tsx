
import Link from 'next/Link'
import type { linkType } from '../../types/linkType'
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram
} from 'react-icons/fa'


const Icons = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  pinterest: FaPinterest ,
  instagram: FaInstagram 
}

type linkProps = {
  link: linkType,
  extraClasses?: string
  iconSize?: string
}
type listProps = {
  extraClasses?: string,
  children: JSX.Element
}

const FooterMainLink = ({
  link,
  extraClasses }: linkProps): JSX.Element => {
  const { name, path } = link
  return (
    <Link
      href={path}>
      <a
        className={` hover:text-grayish-violet ${extraClasses}`}>
        {name}
      </a>
    </Link>
  )
}

const FooterSubLink = ({
  link,
  extraClasses,
  iconSize }: linkProps): JSX.Element => {
  const { name, path, category } = link
  const Icon = category === 'socials' && Icons[name as keyof typeof Icons]
  const icon = Icon && <Icon size={iconSize} />

  return (
    <Link
      href={path}>
      <a
        className={`hover:text-cyan ${extraClasses}`}>
        {icon || name}
      </a>
    </Link>
  )
}

const FooterMainLi = ({
  children,
  extraClasses }: listProps): JSX.Element => {

  return (
    <li
      className={`font-bold capitalize text-base my-9 md:my-0 ${extraClasses}`}>
      {children}
    </li>
  )
}
const FooterSubLi = ({
  children,
  extraClasses }: listProps): JSX.Element => {
  return (
    <li
      className={`font-medium  mb-2 text-grayish-violet ${extraClasses}`}>
      {children}
    </li>
  )
}
const FooterList = ({
  children,
  extraClasses }: listProps): JSX.Element => {
  return (
    <ul className={`subpixel-antialiased  ${extraClasses}`}>
      {children}
    </ul>
  )
}
export {
  FooterMainLink,
  FooterSubLink,
  FooterSubLi,
  FooterMainLi,
  FooterList
}