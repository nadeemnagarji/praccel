import { motion, useInView } from "framer-motion"
import { useRef } from "react"


const PerformanceSection = ()=>{
    const ref = useRef(null)
    const isInView = useInView(ref)
    return(
        <motion.div ref={ref} className="w-full min-h-max lg:min-h-max flex mt-28    items-center flex-col justify-center   pt-10 px-8 ">
        <motion.h1
            initial={ isInView? {opacity:"0",y:20}: {opacity:"100%",y:0}} 
            animate={isInView?  {opacity:"100%",y:0}:{opacity:"0",y:50} }  
            transition={{ease:[0.33, 1, 0.68, 1],duration:0.5,delay:0.3}}
            
            className="text-5xl font-main  md:text-5xl lg:text-5xl font-bold mb-10">
                Performance
            </motion.h1>
            <motion.div className="flex flex-col lg:flex-row items-center justify-between ">
            <motion.div className="flex flex-col items-start justify-start lg:items-center  lg:w-1/2 w-full  ">
                <motion.h2
                 initial={ isInView? {opacity:"0",y:20}: {opacity:"100%",y:0}} 
                 animate={isInView?  {opacity:"100%",y:0}:{opacity:"0",y:50} }  
                 transition={{ease:[0.33, 1, 0.68, 1],duration:0.5,delay:0.3}}
                className="font-extrabold font-main text-6xl text-[#9ABAFF] mb-6 self-center   lg:self-start xl:self-center ">Score</motion.h2>
                <motion.h4 className=" text-4xl font-semibold  self-center  lg:self-start xl:self-center xl:text-center lg:text-start   mb-4">
                    Students read multiple times to improve their 
                   <span className=" text-[#0A57FF]"> score </span>
                </motion.h4>
                <motion.p className=" text-xl md:text-2xl  self-center lg:self-start xl:text-center` xl:self-center lg:text-start mb-2">
                    On average a student scores 73 in the 1st attempt. But they jump to 93 in the latest attempt
                </motion.p>
                <motion.p className=" text-md self-center lg:self-start xl:self-center ">for more results,check out our <span className=" text-[#0A57FF] border-b-2  border-[#0A57FF]"> Performance </span>page
                </motion.p>
            </motion.div>
            <img src="Grades.gif" className="lg:w-1/2 md:w-[60%]  w-[80%]" alt="" />
            </motion.div>

        </motion.div>
    )
}

export default PerformanceSection