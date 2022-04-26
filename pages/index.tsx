import { promises as fs } from 'fs'
import path from 'path'
import Head from 'next/head'
import { FC } from 'react';
import { useState, useEffect } from 'react'
import Hero from '../components/HomeComponents/Hero'
import ShortenContainer from '../components/HomeComponents/ShortenContainer'
import LinkCardList from "../components/HomeComponents/LinkCardList"
import ShortenForm from "../components/HomeComponents/ShortenForm"
import AdvancedStats from '../components/HomeComponents/AdvancedStats'
import BoostBox from '../components/HomeComponents/Boost'
import { statsCardsListProps } from '../types/advancedStatsType';
import Loader from '../components/Loader';
import { shortenedLinkType } from '../types/linkType';
import { fetchShrtCodeErrHandler, fetchShrtCode } from '../helpers/HomeHelpers';

export const getStaticProps = async () => { 
  const dataPath = path.join(process.cwd(), '/public/data/data.json')
  const data = await fs.readFile(dataPath, 'utf8')
  const response = JSON.parse(data)
  return {
    props: {
      statsList: await response.advanced_statistics
    }
  }
}

const Home: FC<statsCardsListProps> = ({ statsList }) => {
  const [newLink, setNewLink] = useState<string>('')
  
  const [shortenedLinks, setShortenedLinks] =
    useState<Array<shortenedLinkType>>([])
  
  const [invalidReq, setInvalidReq] =
    useState<{ invalid: boolean, message: string, originalLink: string }>
      ({ invalid: false, message: '', originalLink: '' })
  
  const [isFetching, setIsFetching] =
    useState<boolean>(false)

  
  const handleSubmit = (link: string): void => {
    if(link.trim().length <= 0){
      setInvalidReq({message:'Please add a link!', invalid: true, originalLink: ''})
    } else if (link.length > 0) {
    setNewLink(link)
    }
  }


  const updateShortenedLinks = async (
    fetchLink: Function,
    newLink: string
  ) => {
    setIsFetching(true)
    const res = await fetchLink(newLink)
    let allLinks = shortenedLinks
    if (res.ok) {
      const alreadyShortened = shortenedLinks.filter(link => link.shortenedLink.path === res.finalLink.shortenedLink.path)
      if (alreadyShortened.length > 0) {
        allLinks = [
          res.finalLink,
          ...shortenedLinks.filter(link =>
            link.shortenedLink.path !== res.finalLink.shortenedLink.path)]
      } else {
        allLinks = [res.finalLink, ...shortenedLinks]
      }
      sessionStorage.setItem('shortenedLinks', JSON.stringify(allLinks))
    } else {
      let errMessage = fetchShrtCodeErrHandler(res.data.error_code)
      setInvalidReq(() => ({
        message: errMessage,
        invalid: true,
        originalLink: newLink
      }))
    }
    setNewLink('')
    setIsFetching(false)
  } 


  useEffect(() => {
    if (newLink.trim().length > 0) {
      updateShortenedLinks(fetchShrtCode, newLink)
    }
    const lsShortLinks: string | null = sessionStorage.getItem('shortenedLinks')
    if(lsShortLinks){
      setShortenedLinks(JSON.parse(lsShortLinks))
    } 
  }, [newLink])


  useEffect(() => {
    const clearSubmitError = setTimeout(() => {
      setInvalidReq({
        message: '',
        invalid: false,
        originalLink: ''
      })}, 3000)
      return () => {
       clearTimeout(clearSubmitError)
      }
  })



  return (
    <div >
      <Head>
        <title>Shortly | FEM</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        {isFetching && <Loader />}
        <Hero />
        <div className='bg-gray'>
          <div>
            <ShortenContainer>
              <>
              <div
                className='relative z-9 min-h-[30vh] md:min-h-[25vh]'>
                <ShortenForm
                  handleSubmit={handleSubmit}
                  invalidReq={invalidReq} />
              </div>
              <LinkCardList
                extraClasses='relative z-10	w-11/12 max-w-screen-lg mx-auto  mt-[-3rem]'
                  shortenedLinks={shortenedLinks} />
              </>
            </ShortenContainer>
            <AdvancedStats
              statsList={statsList} />
          </div>
          <BoostBox />
        </div>
      </main>
    </div>
  )
}

export default Home
