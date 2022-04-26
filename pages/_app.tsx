import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import Layout from '../components/Layout'
import data from '../public/data/data.json'


const MyApp = ({ Component, pageProps }: AppProps) => {
  const navLinks = data.nav_links.filter((_, idx) => (idx < 3))
  const footerLinks = {
    navLinks: data.nav_links.filter(link => link.sub_paths),
    socials: data.socials
  }
  const [navShown, setNavShown] = useState<boolean>(false)
  const toggleNavShown = (close: boolean): void => {
    if (close) {
      setNavShown(false)
    } else {
      setNavShown(prev => !prev)
    }
  }
  return (
    <Layout
      navShown={navShown}
      toggleNavShown={toggleNavShown}
      navLinks={navLinks}
      footerLinks={footerLinks}
      CTAs={data.ctas_new_user}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
