
import Link from 'next/Link'
import { navPropTypes } from './Navigation'

const NavMobile = ({
  links,
  CTAs,
  showCTAs,
  navShown,
  toggleNavShown
}: navPropTypes): JSX.Element => {
  return (
    <div
      className={
      `${navShown ? ' opacity-100 visible transform-none ' : 'rotate-180 scale-0 opacity-0 invisible'} transition-all bg-violet-800 text-white fixed top-24 inset-x-auto	w-11/12 rounded-xl p-7 text-center font-bold z-10 sm:hidden`
    }>
      <ul>
        {links.map(link => (
          <li
            className='px-5 py-3  my-1.5 mx-0'
            key={link.path + link.name}
          >
            <Link
              href={link.path} >
              <a
                className='hover:text-cyan transition-all'
                onClick={() =>{toggleNavShown && toggleNavShown(true)}}>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <hr className='my-3 b-0 h-px bg-white opacity-20' />
      {showCTAs && (
        <ul>
          {CTAs.map((cta, idx) => (
            <li
              className={
                `${idx > 0 ?
                  'bg-cyan rounded-full hover:text-violet-800' : 'hover:text-cyan'} px-5 py-3 my-1 mx-0`}
              key={cta.path + cta.name}>
              <Link
                href={cta.path} >
                <a
                  className='transition-all'
                  onClick={() =>{toggleNavShown && toggleNavShown(true)}}>{cta.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavMobile