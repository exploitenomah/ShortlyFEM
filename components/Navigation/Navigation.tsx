
import { MouseEventHandler } from 'react'
import { GiHamburgerMenu } from 'react-icons/Gi'
import { linkType } from '../../types/linkType'
import NavDesktop from './NavigationDesktop'
import NavMobile from './NavigationMobile'

export type navPropTypes = {
  navShown?: boolean
  toggleNavShown?: Function
  links: [linkType]
  CTAs: [linkType]
  showCTAs: boolean
}

const Navigation = ({
  links,
  CTAs,
  showCTAs,
  toggleNavShown,
  navShown }: navPropTypes): JSX.Element => {

  return (
    <nav
      className='basis-3/4 flex items-center justify-end capitalize '>
      {/* Overlay element for Mobile Navigation. transparent but visible when Mobile Navigation is rendered */}
      <div 
      onClick={() => {toggleNavShown &&toggleNavShown(true)}} 
      className={`${navShown ? 'visible' : 'invisible'} opacity-0 fixed w-full h-full bg-violet-900 transition-all  inset-0 z-10 sm:hidden`}></div>
      <button
        onClick={() => {toggleNavShown && toggleNavShown() }}
        className=' text-grayish-violet text-4xl hover:text-violet-800 transition-all sm:hidden '> 
        <GiHamburgerMenu />
      </button>
        <NavMobile
          navShown={navShown}
          links={links}
          CTAs={CTAs}
          showCTAs={showCTAs}
          toggleNavShown={toggleNavShown} />
      <NavDesktop
          links={links}
          CTAs={CTAs}
          showCTAs={showCTAs}
          toggleNavShown={toggleNavShown} />   
    </nav>
  )
}

export default Navigation