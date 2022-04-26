

import { useState, useMemo,  ChangeEvent, SyntheticEvent, useEffect } from 'react'
import Input from '../Input'
import { SquaredCyanBtn } from '../Buttons'

let inputErrorStyles = 'border-4 border-red border-solid placeholder:text-red  placeholder:opacity-60'

type formProps = {
  handleSubmit: Function,
  invalidReq: {message: string, invalid: boolean, originalLink: string}
}
const ShortenForm = ( { handleSubmit, invalidReq }: formProps): JSX.Element => {
  const submitError = useMemo(() => {return invalidReq.invalid}, [invalidReq.invalid])
  const [link, setLink] = useState<string>('')


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value)
  }
  const handlePreSubmit = (e: SyntheticEvent ) => {
    e.preventDefault()
    handleSubmit(link)
    setLink('')
  }
  useEffect(() => {
    if (submitError === true) {
      setLink(invalidReq.originalLink)
    }
  }, [submitError])
  
  return (
    <form
      onSubmit={(e) => handlePreSubmit(e)}
      className={`absolute inset-x-[3.2%] top-[-50%]  min-h-[30vh]  w-11/12 max-w-screen-lg mx-auto bg-bg-shorten-mobile bg-auto bg-violet-800 bg-right-top bg-no-repeat p-6 rounded-md md:flex md:items-center md:min-h-[25vh] md:justify-between md:px-14 md:py-8 md:bg-bg-shorten-desktop`}> 

      <label
        className={`${submitError ? '' : ''} flex flex-col md:basis-3/4 md:mr-5 `}> 
        <Input
          value={link}
          handleChange={handleInputChange}
          type='text' 
          placeholder='Shorten a link here...'
          extraClasses={` ${submitError ? inputErrorStyles : 'border-tp border-4 border-solid placeholder:text-grayish-violet'} `} /> 
        <span
          className=' text-md  text-red mt-2 italic text-md md:absolute md:bottom-5'>
          { invalidReq.invalid && invalidReq.message  }
        </span>
     </label>
      <div
        className=' mt-2 md:mt-0 md:basis-1/4'>
        <SquaredCyanBtn
         type='submit'
         extraClasses={`font-bold capitalize `}
         text='shorten it!' />
      </div> 
      
    </form>
  )
} 

export default ShortenForm