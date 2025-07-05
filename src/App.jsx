import React from 'react'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App(){
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <div className='min-h-screen w-full bg-black text-white'>
      <NavBar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Footer />
    </div>
    </>
  )
}

export default App