import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const LandingPage = () => {
  return (
    <>
      <div className="w-full h-screen bg-black text-white pt-1 ">
        <div className="textstructure mt-40 px-20">
          <div className="masker ">
            <h1 className="uppercase text-9xl leading-[6.5vw] font-[FoundersGrotesk] font-semibold">
              We Create
            </h1>
          </div>
          <div className="masker flex items-baseline gap-4">
            <div className=" relative w-[9vw] h-[5.3vw] bg-green-500 rounded-md"></div>
            <h1 className="uppercase text-9xl leading-[6.5vw] font-[FoundersGrotesk] font-semibold">
              Eye Opening
            </h1>
          </div>

          <div className="masker ">
            <h1 className="uppercase text-9xl leading-[6.5vw] font-[FoundersGrotesk] font-semibold">
              Presentations
            </h1>
          </div>
        </div>
        <div className="border-t-2 border-zinc-800 mx-auto mt-28">
          <div className="flex justify-between items-center gap-10 mx-28 mt-3">
            <div className="text-md font-semibold font-[NeueMontreal] tracking-tight leading-none">
              For public and private companies
            </div>
            <div className="text-md font-semibold font-[NeueMontreal]">
              From the first pitch to IPO
            </div>
            <div>
              <button className="text-white border-2 border-white py-2 px-4 rounded-3xl uppercase hover:bg-white hover:text-black">
                Start The Project
              </button>
              <button className="text-white border-2 border-white py-3 px-3 ml-2 rounded-full uppercase hover:bg-white hover:text-black">
                <MdOutlineArrowOutward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
