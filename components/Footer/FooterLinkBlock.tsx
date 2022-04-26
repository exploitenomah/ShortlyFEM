import { linkType } from '../../types/linkType'
import {
  FooterMainLink,
  FooterSubLink,
  FooterMainLi,
  FooterSubLi,
  FooterList
} from './FooterLinksElements'
type FooterLinkBlockProps = {
  link: linkType,
  extraClasses?: string
}
const FooterLinkBlock = ({ link, extraClasses }: FooterLinkBlockProps): JSX.Element => {
  return (
      <FooterMainLi extraClasses={extraClasses}>
        <>
        <FooterMainLink
          link={link} />
        <FooterList
          extraClasses='mt-5'>
          <>
           {
            link.sub_paths?.map((sublink) => (
              <FooterSubLi
                key={sublink.name + sublink.path}>
                <FooterSubLink
                  link={sublink} />
              </FooterSubLi>
            ))
            }
          </>
        </FooterList>
      </>
      </FooterMainLi>
  )
}

export default FooterLinkBlock