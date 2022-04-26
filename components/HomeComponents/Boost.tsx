import { HeadingFour } from "../Headings"
import { RoundCyanLinkBtn } from '../Buttons'

const BoostBox = (): JSX.Element => {
  return (
    <section
      className='bg-bg-boost-mobile bg-no-repeat bg-violet-800 min-h-[38vh] bg-right-center  flex flex-col justify-center items-center md:bg-bg-boost-desktop md:bg-cover md:bg-center' >
      <HeadingFour
        extraClasses='text-center text-2xl md:text-4xl font-bold text-white my-6 '>  
        <>Boost your links today</>
      </HeadingFour>
      <RoundCyanLinkBtn
        text='get started'
        path='/' 
        extraClasses='px-8 py-4 hover:brightness-120 ' /> 
    </section>
  )
} 

export default BoostBox