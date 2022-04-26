
import Link from 'next/Link'
import { navPropTypes } from './Navigation'
import { RoundCyanLinkBtn } from '../Buttons'

const NavDesktop  = ({
  links,
  CTAs,
  showCTAs }: navPropTypes): JSX.Element => {
  return (
    <div
      className='hidden basis-full font-medium text-sm sm:flex items-center justify-between md:text-base '>
      <ul
        className='flex items-center md:-ml-12 mr-auto'>
        {links.map(link => (
          <li
            className='ml-4 md:ml-6 text-grayish-violet'
            key={link.path + link.name}>
            <Link
              href={link.path} >
              <a
                className='hover:text-violet-800'
              >{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      {showCTAs && (
        <ul
          className='flex items-center'>
          {CTAs.map((cta, idx) => (
            <li
              key={cta.path + cta.name}
              className='ml-2 md:ml-6  text-grayish-violet'>
              {idx === 0 ? (
                <Link href={cta.path} >
                  <a
                    className='rounded-full px-5 py-2 transition-all hover:text-white hover:bg-cyan'
                  >{cta.name}</a>
                </Link>) :
                (
                  <RoundCyanLinkBtn
                    extraClasses=' hover:bg-opacity-70'
                    path={cta.path}
                    text={cta.name} />
                )}

            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavDesktop
