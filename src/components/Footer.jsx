import React from "react";
import { useEffect, useState } from "react";

function Footer() {
    const[rotate, setRotate]= useState(0)
      useEffect(()=>{
        window.addEventListener('mousemove',(e)=>{
    
          let mouseX = e.clientX;
          let mouseY = e.clientY;
           
          let deltaX = mouseX - window.innerWidth/2;
          let deltaY = mouseY - window.innerHeight/2;
    
          var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
          setRotate(angle-180);
    
        }
    
    )
})
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full h-screen bg-[#CDEA68] flex flex-col items-center justify-between py-10 relative">
      <div className="">
        <div className="text-[25vh] leading-none font-[FoundersGrotesk] font-semibold uppercase text-black text-center">
          READY
        </div>
        <div className="text-[25vh] leading-none font-[FoundersGrotesk] font-semibold uppercase text-black text-center">
          TO START
        </div>
        <div className="text-[25vh] leading-none font-[FoundersGrotesk] font-semibold uppercase text-black text-center">
          THE PROJECT
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
        <div className=" flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-zinc-200">
          <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
          <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
            <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
          </div>
          </div>
        </div>
        <div className=" flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-zinc-200">
          <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
            <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
          </div>
          </div>
        </div>
      </div>
      <div>
        <button className="px-5 py-4 bg-black text-white uppercase rounded-3xl">
          Start The Project &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•
        </button>
      </div>
    </div>
  );

};


export default Footer;
