import React from "react";

const About = () => {
  return (
      <div className="w-full p-20 px-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black">
        <h1 className="font-[NeueMontreal] text-[4vw] leading-[4.5vw] tracking-tight">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to raise funds, sell prod­ucts, ex­plain com­plex
          ideas, and hire great peo­ple.
        </h1>
        <div className="w-full border-t-[2px] border-[#a2b663] mx-auto mt-20 flex">
          <div className="w-[50%]">
            <h1 className="text-5xl py-6 ">Our Approach:</h1>
            <button className="px-5 py-3 bg-black text-white uppercase rounded-3xl">
              Read More&nbsp;&nbsp;&nbsp;&nbsp;•
            </button>
          </div>
          <div className="w-[50%] rounded-3xl my-6 bg-red-600">
            <img
              src="/images/about-img.jpg"
              alt=""
              className="rounded-3xl"
            />
          </div>
          <div></div>
        </div>
      </div>
  );
};

export default About;
