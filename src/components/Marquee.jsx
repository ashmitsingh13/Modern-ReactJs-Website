import{ motion} from "framer-motion";
const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="bg-[#004d43] w-full py-20 rounded-tl-3xl rounded-tr-3xl">
      <div className="border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
      <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ ease: "linear", duration: 5, repeat: Infinity, repeatType: "loop"}} className="text-[40vh] leading-none font-[FoundersGrotesk] font-semibold uppercase pr-20">We are ochi</motion.h1>
      <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ ease: "linear", duration: 5, repeat: Infinity, repeatType: "loop"}} className="text-[40vh] leading-none font-[FoundersGrotesk] font-semibold uppercase pr-20">We are ochi</motion.h1>
      <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ ease: "linear", duration: 5, repeat: Infinity, repeatType: "loop"}} className="text-[40vh] leading-none font-[FoundersGrotesk] font-semibold uppercase pr-20">We are ochi</motion.h1>
      </div> 
    </div>
  );
};

export default Marquee;
