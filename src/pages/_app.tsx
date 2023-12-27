import Layout from '@/components/Layout'
import { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import '../app/globals.css'
import { useEffect, useState } from 'react'

const roboto = Roboto({subsets: ['latin'], weight: '400'})


export default function MyApp({ Component, pageProps }: AppProps) {
    const [showRules, setShowRules] = useState(false)
    const [newR, setNewR] = useState('')
    const [phase, setPhase] = useState(0)
    const [userScore, setUserScore] = useState(0)
    const [plOne, setPlOne] = useState('')
    const [plOpp, setPlOpp] = useState('')


    useEffect(() => {
      if(localStorage.getItem('Score')) setUserScore(Number(localStorage.getItem('Score')))
    },[])

    useEffect(() => {
      if(newR.length) localStorage.setItem('Score', userScore.toString())
    },[userScore])
    return (
      <Layout showRules={showRules} setShowRules={setShowRules} setUserScore={setUserScore} userScore={userScore}>
        <Component className={roboto.className} {...pageProps} newR={newR} setNewR={setNewR} setPlOpp={setPlOpp} plOpp={plOpp} plOne={plOne} setPlOne={setPlOne} phase={phase} setPhase={setPhase} setUserScore={setUserScore} userScore={userScore} />
      </Layout>
    )
  }
 
