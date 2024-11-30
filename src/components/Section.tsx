import { motion, useInView } from "framer-motion"
import { useRef } from "react";


const Section = ()=>{
    const ref = useRef(null)
    const isInView = useInView(ref)

 
      const items = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
    return(
        <div ref={ref}
        
        className="w-full overflow-hidden min-h-screen lg:min-h-max flex  md:flex-row items-center flex-col-reverse justify-center px-4  md:py-0">
            
            <motion.div 
            className="w-full md:w-1/2 flex flex-col gap-4 md:gap-5 text-center md:text-center">
                <motion.h1
                initial={ isInView? {opacity:"0",y:20}: {opacity:"100%",y:0}} 
                animate={isInView?  {opacity:"100%",y:0}:{opacity:"0",y:50} }  
                transition={{ease:[0.33, 1, 0.68, 1],duration:0.5,delay:0.5}}


                
                className="text-5xl font-main  md:text-5xl lg:text-5xl font-bold">
                    Get FeedBack !
                </motion.h1>
                <motion.div className="flex flex-col items-center md:items-center gap-2">
                    <motion.p
                    initial={ isInView? {opacity:"0",y:20}: {opacity:"100%",y:0}} 
                    animate={isInView?  {opacity:"100%",y:0}:{opacity:"0",y:50} }  
                    transition={{ease:[0.33, 1, 0.68, 1],duration:0.5,delay:0.9}}



                    variants={items} className=" font-main text-xl md:text-lg lg:text-xl xl:text-2xl">
                        The App will Highlight the mistake and give you a score
                    </motion.p>
                    
                </motion.div>
            </motion.div>
            <div className="w-full  md:w-1/2 flex justify-center mb-8 md:mb-0">
                <img 
                
                    className="max-w-full h-auto max-h-[500px] md:max-h-[800px] object-contain" 
                    src="/Curious.gif" 
                    alt="Hero Image"
                />
            </div>
        </div>
    )
}

export default Section