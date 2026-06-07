'use client'

import { useState } from 'react'
import GolfGame from './components/GolfGame'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import WeddingDetails from './components/WeddingDetails'
import Timeline from './components/Timeline'
import Location from './components/Location'
import Dresscode from './components/Dresscode'
import Gifts from './components/Gifts'
import Contacts from './components/Contacts'
import Survey from './components/Survey'
import Footer from './components/Footer'

export default function Home() {
  const [gameCompleted, setGameCompleted] = useState(false)

  return (
    <main>
      {!gameCompleted ? (
        <GolfGame onComplete={() => setGameCompleted(true)} />
      ) : (
        <>
          <Navigation />
          <Hero />
          <WeddingDetails />
          <Timeline />
          <Location />
          <Dresscode />
          <Gifts />
          <Contacts />
          <Survey />
          <Footer />
        </>
      )}
    </main>
  )
}
