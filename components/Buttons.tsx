import Link from 'next/link'
import { MouseEventHandler } from 'react'
type linkBtnProps = {
  path:  string
  text: string
  extraClasses?: string
  onClick?: MouseEventHandler
}
type btnProps = {
  text: string,
  extraClasses?: string,
  onClick?: MouseEventHandler,
  type: "button" | "submit" | "reset" | undefined
}

export const RoundCyanLinkBtn = ({
  text,
  path,
  extraClasses }: linkBtnProps): JSX.Element => {

  return (
    <Link href={path}>
      <a
        className={`pointer capitalize rounded-full px-5 py-2 transition-all text-white bg-cyan ${extraClasses}`}>
        {text}
      </a>
    </Link>
  )
}

export const SquaredCyanBtn = ({
  text,
  extraClasses,
  onClick,
  type}: btnProps): JSX.Element => { 

  return (
    <button
      onClick={onClick}
      type={type}
      className={`block w-full capitalize px-3 py-2 rounded-lg bg-cyan text-white border-tp border-4 border-solid hover:brightness-105 ${extraClasses}`} >
      {text}
    </button>
  )
}