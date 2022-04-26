import type { linkType } from '../../types/linkType'
import FooterLinkBlock from './FooterLinkBlock'
import {
  FooterSubLink,
  FooterMainLi,
  FooterList
} from './FooterLinksElements'

type FooterLinksProps = {
  links: {
    socials: [linkType],
    navLinks: [linkType]
  },
}

const FooterLinks = ({ links }: FooterLinksProps): JSX.Element => {
  const { socials, navLinks } = links
  return (
    <>
      <FooterList
        extraClasses='md:flex md:justify-between md:basis-4/6'>
        <>
            {navLinks.map(link => (
              <FooterLinkBlock
                key={link.name + link.path}
                link={link} />
            ))}
          <li
            className='sm:basis-1/4 md:w-full'>
            <FooterList
              extraClasses='flex justify-around items-center mx-auto my-0 w-4/6 sm:basis-1/4 md:w-full '>
              <>
                {socials.map(social => (
                  <FooterMainLi
                    extraClasses=''
                    key={social.name + social.path}>
                    <FooterSubLink
                      iconSize='1.5rem'
                      link={social} />
                  </FooterMainLi>
                ))} 
              </>
            </FooterList>
          </li>
        </>
      </FooterList>
    </>
  )
}

export default FooterLinks