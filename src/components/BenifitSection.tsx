import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import BenifitSectionCard from "./BenifitSectionCard";

const content = [{
    image:"/a.png",
    title:"Immediate feedback",
    description:"students get to know their mistakes after every reading."
},
{
    image:"/book.png",
    title:"Improved vocabulary",
    description:"students get to know new words through the reading passages."
},
{
    image:"/graph.png",
    title:"Improved reading performance",
    description:"corrects mispronunciations, reduces mistakes and improves speed."
},
{
    image:"/superman.png",
    title:"Increased Confidence",
    description:"Students read confidently after reading multiple times."
}

]

const BenifitSection = ()=>{

    const ref = useRef(null)
    const isInView = useInView(ref)

return(
    <section className="bg-white w-full dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen flex items-center justify-center mb-8 lg:mb-16">
      <motion.h1
        
                
                className="text-5xl font-main  md:text-5xl lg:text-5xl font-bold  mb-10">
                    Benefits for Students
                </motion.h1>
      </div>
      <motion.div  ref={ref} className="space-y-8 md:grid md:grid-cols-2  lg:grid-cols-3 md:gap-12 md:space-y-0 items-center px-8">
         {content.map((item)=>{
           return <BenifitSectionCard 
           isInView={isInView}
            title={item.title}
            description={item.description}
            image={item.image}
           />
         })}
      </motion.div>
  </div>
</section>
)
}

export default BenifitSection


/*

    const ref = useRef(null)
    const isInView = useInView(ref)

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.5,
            
          }
        }
      };
      
      const items = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };

    return(
        <motion.div ref={ref} className="w-full min-h-screen lg:min-h-max flex   items-center flex-col justify-center px-8  md:py-0 ">
            <motion.h1
                initial={ isInView? {opacity:"0",y:20}: {opacity:"100%",y:0}} 
                animate={isInView?  {opacity:"100%",y:0}:{opacity:"0",y:50} }  
                transition={{ease:[0.33, 1, 0.68, 1],duration:0.5,delay:0.3}}
                
                className="text-5xl font-main  md:text-5xl lg:text-5xl font-bold  mb-10">
                    Benefits for Students
                </motion.h1>
                <motion.div className="  w-full grid grid-cols-1 md:grid-cols-2  gap-10">
                   {content.map((item)=>{
                    return  <div className="w-full px-4  flex flex-col items-center border py-4 rounded-lg shadow-lg  justify-center">
                    <motion.img 
                    initial={ isInView? {opacity:"0",y:20}: {opacity:"100%",y:0}} 
                    animate={isInView?  {opacity:"100%",y:0}:{opacity:"0",y:50} }  
                    transition={{ease:[0.33, 1, 0.68, 1],duration:0.5,delay:1}}
                    src={item.image} className="w-20" />
                    <motion.h4
                    initial={ isInView? {opacity:"0"}: {opacity:"100%"}} 
                    animate={isInView?  {opacity:"100%"}:{opacity:"0"} }  
                    transition={{ease:[0.33, 1, 0.68, 1],duration:0.5,delay:0.5}}
                    className=" font-semibold  text-xl">{item.tite}</motion.h4>
                    <motion.p
                      initial={ isInView? {opacity:"0"}: {opacity:"100%"}} 
                      animate={isInView?  {opacity:"100%"}:{opacity:"0"} }  
                      transition={{ease:[0.33, 1, 0.68, 1],duration:0.5,delay:0.5}}
                    className=" text-lg font-medium">{item.description}</motion.p>
                </div>
                   })}
                    
                    
                    
                </motion.div>
                
        </motion.div>
    )


*/