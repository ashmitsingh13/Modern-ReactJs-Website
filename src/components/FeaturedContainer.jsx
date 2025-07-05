import React from "react";

function FeaturedContainer({ img, heading, btn1, btn2 }) {
  return (
    <div className="card w-1/2 h-[90vh] relative px-6 my-6">
      <div className="uppercase h-[15vh] flex items-center">
        <h1 className="flex items-center text-xl text-white">
          <span className="text-4xl mr-2 leading-none">•</span>
          {heading}
        </h1>
      </div>
      <div className="h-[60vh] object-cover rounded-2xl">
        <img
          src={img}
          className="w-full h-[60vh] object-cover object-center rounded-2xl"
        />
      </div>
      <div className="h-[15vh]">
        <button className="text-white border-2 mt-8 ml-8 border-white py-2 px-4 rounded-3xl uppercase hover:bg-white hover:text-black">
          {btn1}
        </button>
        <button className="text-white border-2 mt-8 ml-8 border-white py-2 px-4 rounded-3xl uppercase hover:bg-white hover:text-black">
          {btn2}
        </button>
      </div>
    </div>
  );
}

export default FeaturedContainer;
