import { motion } from "framer-motion"


const Hero = ()=>{

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          }
        }
      };
      const items = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          
        }
      };
    return(
        <div className="w-full  overflow-hidden m-auto min-h-screen  mt-12 flex flex-col md:flex-row items-center justify-center px-4 pt-8 md:py-0">
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                <img 
                    className="max-w-full h-auto max-h-[500px] md:max-h-[800px] object-contain" 
                    src="/Main.gif" 
                    alt="Hero Image"
                />
            </div>
            <motion.div
            variants={container}
            initial="hidden"
          animate="visible"
            className="w-full md:w-1/2 flex flex-col gap-4 md:gap-5 text-center md:text-left">
                <motion.h1 variants={items} className="text-3xl   md:text-4xl lg:text-5xl font-bold">
                    The <span className=" font-main text-5xl ">Read Aloud </span> app!
                </motion.h1>
                <div className="flex flex-col items-center md:items-start gap-2">
                    <motion.p variants={items} className=" font-main text-xl md:text-lg lg:text-xl xl:text-2xl">
                        Get bite-sized reading passages in English regularly.
                    </motion.p>
                    <motion.p variants={items} className="text-xl font-main md:text-lg lg:text-xl xl:text-2xl">
                        Read, receive feedback, and watch your reading skills soar to new heights.
                    </motion.p>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero