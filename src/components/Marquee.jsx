import{ motion} from "framer-motion";
const Marquee = () => {
  return (
    <div className="bg-[#004d43] w-full py-20 rounded-tl-3xl rounded-tr-3xl">
      <div className="border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap overflow-hidden">
      <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ ease: "linear", duration: 10, repeat: Infinity, repeatType: "loop"}} className="text-[40vh] leading-none font-[FoundersGrotesk] font-semibold uppercase">We are ochi</motion.h1>
      <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ ease: "linear", duration: 10, repeat: Infinity, repeatType: "loop"}} className="text-[40vh] leading-none font-[FoundersGrotesk] font-semibold uppercase">We are ochi</motion.h1>
      <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ ease: "linear", duration: 10, repeat: Infinity, repeatType: "loop"}} className="text-[40vh] leading-none font-[FoundersGrotesk] font-semibold uppercase">We are ochi</motion.h1>
      </div> 
    </div>
  );
};

export default Marquee;
