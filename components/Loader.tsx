


const Loader = ():JSX.Element => {
  return(
    <div className='fixed inset-0 w-screen h-screen bg-[#00000099] z-20 flex justify-center items-center'>
          <div className='basis-1/2 h-[50vw] max-w-[80px] max-h-[80px] border-cyan border-8 border-dotted rounded-full animate-ping '></div>
          <div className='w-[50vw] h-[50vw] max-w-[180px] max-h-[180px] border-cyan border-8 border-dotted rounded-full motion-safe:animate-spin  animate-pulse absolute'></div> 
          <div className='w-[50vw] h-[50vw] max-w-[180px] max-h-[180px] border-cyan border-8 border-dotted rounded-full motion-safe:animate-spin absolute'></div>
           <div className='w-[50vw] h-[50vw] max-w-[80px] max-h-[80px] border-cyan border-8 border-dotted rounded-full  animate-ping absolute skew-x-[-45deg] '></div>
          <div className='w-[50vw] h-[50vw] max-w-[80px] max-h-[80px] border-cyan border-8 border-dotted rounded-full animate-ping absolute skew-x-[45deg] '></div>
        </div>
  )
}
export default Loader