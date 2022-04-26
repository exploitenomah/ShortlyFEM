import Header from './Header'
import Footer from './Footer/Footer'
import Logo from './Logo'
import Navigation from './Navigation/Navigation'


const Layout = ({
  children,
  navLinks,
  CTAs,
  navShown,
  toggleNavShown,
  footerLinks }: any): JSX.Element => {
  return (
      <div>
      <Header
        Logo={Logo} 
        Navigation={
        <Navigation
          links={navLinks}
          CTAs={CTAs}
          navShown={navShown}
          toggleNavShown={toggleNavShown}
          showCTAs={true} />}
       />
      <div
        className='min-h-screen'>
        {children}
      </div>
      <Footer
        footerLinks={footerLinks}
        Logo={Logo} />
      </div>
  )
}

export default Layout