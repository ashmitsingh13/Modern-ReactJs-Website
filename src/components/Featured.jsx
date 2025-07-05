import React from 'react'
import FeaturedContainer from './FeaturedContainer'

function Featured() {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-2 border-zinc-700 pb-20'>
            <h1 className='text-8xl font-[FoundersGrotesk] tracking-tight'>Featured Projects</h1>
        </div>
        <div className='flex flex-wrap w-full'>
            <FeaturedContainer heading="Salience Labs" img="/images/featured1-img.png" btn1="brand identity" btn2="pitch deck" />
            <FeaturedContainer  heading="Cardboard Spaceship" img="/images/featured2-img.png" btn1="branded template" btn2="sales deck"/>
            <FeaturedContainer  heading="AH2 & Matt Horn" img="/images/featured3-img.png" btn1="social media template" btn2="pitch deck"/>
            <FeaturedContainer  heading="Fyde" img="/images/featured4-img.png" btn1="audit" btn2="copywriting"/>
            <FeaturedContainer  heading="Vise" img="/images/featured5-img.png" btn1="agency" btn2="company presentation"/>
            <FeaturedContainer  heading="All Things Go" img="/images/featured6-img.png" btn1="brand identity" btn2="design research"/>
            <FeaturedContainer  heading="Trawa" img="/images/featured7-img.png" btn1="inverstor desk" btn2="redesign"/>
            <FeaturedContainer  heading="Black Book" img="/images/featured8-img.png" btn1="brand template" btn2="review"/>
            <FeaturedContainer  heading="Premium Blend" img="/images/featured9-img.png" btn1="company presentation" btn2="pitch deck"/>
            <FeaturedContainer  heading="Softstart" img="/images/featured10-img.png" btn1="brand template" btn2="sales desk"/>
        </div>
    </div>

  )
}

export default Featured