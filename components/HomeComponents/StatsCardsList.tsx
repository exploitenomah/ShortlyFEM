

import StatsCard from './StatsCard'
import { statsCardsListProps } from '../../types/advancedStatsType'



const aligns = [
  'self-start',
  'self-center',
  'self-end'
]
const StatsCardsList = ({statsList}: statsCardsListProps): JSX.Element => {
  return (
    <ul
      className='relative my-4 pb-2  md:flex md:justify-between md:text-left md:items-center md:min-h-[55vh] md:mx-0 md:mt-24 md:mb-28'>

      <hr
        className='absolute left-[50%] translate-x-[-50%] top-[10%] bottom-[10%] border-none bg-cyan w-2 h-4/5 z-1 md:top-[50%] md:left-[10%] md:right-[10%] md:translate-x-0 md:translate-y-[-50%] md:w-4/5 md:h-2' />
      {
        statsList.map((item, idx) =>
        (<StatsCard
          extraClasses={aligns[idx]}
          key={item.stat_detail}
          stat={item} />))
      }
    </ul>
  )
}

export default StatsCardsList