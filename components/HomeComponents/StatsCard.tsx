
import Image from 'next/image'
import { HeadingThree } from '../Headings'
import { PBasic } from '../Paragraphs'
import { stat } from '../../types/advancedStatsType'

type statsCardProps = {
  stat: stat,
  extraClasses: string
} 
const StatsCard = ({
  stat,
  extraClasses }: statsCardProps): JSX.Element => {
  const {
    stat_icon,
    stat_title,
    stat_detail } = stat
  return (
    <li
      className={`relative bg-white mx-auto mt-24 mb-24  py-12 px-6 rounded-lg z-10 md:basis-[30%] md:px-7 md:my-0 ${extraClasses}`}>
      
      <div
        className='absolute bg-blue-900 p-6 flex justify-center top-[-15%] left-[50%] translate-x-[-50%] items-center rounded-full md:left-[12%] md:translate-x-[0]'>
        <Image
          width='40'
          height='40'
          src={stat_icon}
          alt='' />
      </div>
      <HeadingThree
        extraClasses='font-bold text-2xl text-violet-900 mt-8 mb-3 md:text-xl ' >
        <>{stat_title}</>
      </HeadingThree> 
      <PBasic
        extraClasses='max-w-[35ch] mx-auto md:max-w-[50ch] md:mx-0 md:text-[.8rem]'>
        <>
        {stat_detail} 
        </>
      </PBasic>
    </li>
  ) 
}
export default StatsCard