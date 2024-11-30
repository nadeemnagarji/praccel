
import StepCard from "./StepCard";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const StepsContent = [
    {
    image:"./Step1.gif",
    title:"Click on Register Button",
    description:"fill in your details",
    step:"Step 1"

    },
    {
    image:"Step2.gif",
    title:"Get Username and Password",
    description:"You will get your login details after a few days.",
     step:"Step 2"
        
    },
    {
    image:"Step3.gif",
    title:"Download and Install",
    description:"Click above to download the App",
     step:"Step 3"
        
    },
]

const Steps = ()=>{

    const ref = useRef(null)
    const isInView = useInView(ref)
    return(
        <section ref={ref} className=" w-full pb-8  dark:bg-gray-900 ">
  <div className="py-8 px-4 mx-auto max-w-screen-xl w-[95%] lg:py-16 ">
      <motion.div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <motion.h2
            initial={ isInView? {opacity:"0",y:20}: {opacity:"100%",y:0}} 
            animate={isInView?  {opacity:"100%",y:0}:{opacity:"0",y:50} }  
            transition={{ease:[0.33, 1, 0.68, 1],duration:0.5,delay:0.3}}
          
          className="text-5xl  font-main  md:text-5xl lg:text-5xl font-bold mb-10">Get Started</motion.h2>
      </motion.div>
      <motion.div 
    
      className="  grid lg:grid-cols-3 md:grid-cols-2 place-content-center sm:gap-6 xl:gap-10 lg:space-y-0 px-2 ">
        
        {StepsContent.map((step)=>{
            return <StepCard 
            step={step.step}
            key={step.title} 
            title={step.title}
            description={step.description}
            image={step.image}
            />
        })}

        
      </motion.div>
  </div>
</section>
    )
}

export default Steps;