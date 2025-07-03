import React from 'react'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'

const App = () => {
  return (
    <>
    <div className='h-screen w-full bg-black text-white'>
      <NavBar />
      <LandingPage />
    </div>
    </>
  )
}

export default App