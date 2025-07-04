import React from 'react'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'

function App(){
  return (
    <>
    <div className='min-h-screen w-full bg-black text-white'>
      <NavBar />
      <LandingPage />
      <Marquee />
      <About />
    </div>
    </>
  )
}

export default App