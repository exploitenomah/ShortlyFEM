
import { RoundCyanLinkBtn } from '../Buttons'
import { HeadingOne } from '../Headings'
import { PBasic } from '../Paragraphs'

const Hero = ():JSX.Element => {
  return (
    <div
      className='bg-hero-img bg-scroll bg-no-repeat bg-100% bg-hero-position-mobile bg-mobile-size min-h-[145vh] pb-52 flex flex-col justify-end items-center sm:bg-tab sm:bg-tab-position sm:min-h-[90vh] sm:pb-0 sm:mb-6  sm:pt-20 sm:justify-start md:min-h-[100vh] lg:mb-0 lg:bg-desktop-size lg:bg-hero-position-desktop  '>
      <div
        className='text-center w-10/12 max-w-screen-lg mx-auto sm:text-left md:w-11/12'>
        <div
          className='mx-auto max-w-[35ch] sm:mx-0 sm:max-w-[25ch] md:max-w-[30ch] lg:max-w-[50ch]'>
          <HeadingOne
            extraClasses='text-3xl text-violet-900 font-bold mb-4 md:text-6xl lg:text-7xl lg:leading-tight'>
          <> 
            More than just shorter links.
          </>
        </HeadingOne>
          <PBasic
            extraClasses='mb-9 lg:max-w-[70%]'>
          <> 
            Build your brand's recognition and get detailed insights on how your links are performing.
          </>
        </PBasic>
          <RoundCyanLinkBtn
            extraClasses='px-8 py-3  hover:bg-opacity-70 '
            text='Get Started'
            path='/' /> 
       </div>
      </div>
    </div>
  )
}
export default Hero