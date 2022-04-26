
import { linkType } from '../../types/linkType'
import FooterLinks from './FooterLinks'

type footerProps = {
  Logo: Function,
  footerLinks: {
    socials: [linkType],
    navLinks: [linkType]
  },
}

const Footer = ({
  Logo,
  footerLinks }: footerProps): JSX.Element => {

  return (
    <footer
      className="bg-violet-900">
      <div
        className="bg-violet-900 text-center text-white pb-14 w-11/12 max-w-screen-lg mx-auto pt-16 md:flex md:justify-between md:items-start md:text-left ">
        <Logo
          extraClasses='flex justify-center mb-12 md:mb-0'
          fill='#fff' />
        <FooterLinks
          links={footerLinks} />
      </div>
    </footer>
  )
}

export default Footer