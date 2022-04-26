import { HeadingTwo } from "../Headings"
import { PBasic } from "../Paragraphs"
import StatsCardsList from "./StatsCardsList"
import { statsCardsListProps } from '../../types/advancedStatsType'


const AdvancedStats = ({ statsList }: statsCardsListProps): JSX.Element => {

  return(
    <section
      className="text-center mb-0 mx-auto w-11/12 max-w-screen-lg" >
      <HeadingTwo
        extraClasses=' text-3xl text-blue-900 font-bold capitalize mt-20 mb-6 md:text-4xl '>
        <>advanced Statistics </>
      </HeadingTwo>
      <PBasic
        extraClasses=' mx-auto max-w-[35ch] md:max-w-[48ch] '>
         <>Track how your links are performing across the web with our advanced statistics dashboard.</>
      </PBasic>
      <StatsCardsList
        statsList={statsList} />
    </section>
  )
}

export default AdvancedStats