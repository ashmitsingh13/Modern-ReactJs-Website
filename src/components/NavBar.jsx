import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="fixed z-[999] top-0 left-0 w-full flex justify-between items-center px-20 py-8">
        <div className="text-2xl font-bold tracking-wide font-[FoundersGrotesk]">
          MOMINTO
        </div>
        <div className="links flex gap-10">
          <a href="/services" className="hover:underline text-md font-semibold font-[NeueMontreal]">
            Services
          </a>
          <a href="/ourwork" className="hover:underline text-md font-semibold font-[NeueMontreal]">
            Our Work
          </a>
          <a href="/aboutus" className="hover:underline text-md font-semibold font-[NeueMontreal]">
            About Us
          </a>
          <a href="/insights" className="hover:underline text-md font-semibold font-[NeueMontreal]">
            Insights
          </a>
        </div>
        <div>
          <button className="text-white bg-black px-4 py-2 rounded hover:underline text-md font-semibold font-[NeueMontreal]">
            Contact Us
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
