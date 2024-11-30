import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import HoverCard from "./HoverCard";

const content = [{
    image:"/phone.png",
    tite:"Get feedback",
    description:"The app will highlight mistakes and give you a score."
},
{
    image:"/hare.png",
    tite:"Suitable reading content",
    description:"Each student will get reading content suitable for him/her."
},
{
    image:"/speak.png",
    tite:"Expert Audio",
    description:"Listen to the correct pronunciations."
},
{
    image:"/target.png",
    tite:"Practise multiple times",
    description:"Read multiple times and improve your score."
}

]

const Features = ()=>{

    const ref = useRef(null)
    const isInView = useInView(ref)

   

    return(
        <motion.div ref={ref} className="w-full m-auto min-h-screen lg:min-h-max flex mt-28  bg-blue-200  items-center flex-col justify-center   pt-10 px-8 pb-8 ">
            <motion.h1
                initial={ isInView? {opacity:"0",y:20}: {opacity:"100%",y:0}} 
                animate={isInView?  {opacity:"100%",y:0}:{opacity:"0",y:50} }  
                transition={{ease:[0.33, 1, 0.68, 1],duration:0.5,delay:0.3}}
                
                className="text-5xl font-main  md:text-5xl lg:text-5xl font-bold mb-10">
                    Features
                </motion.h1>
                <motion.div className="  w-full grid  grid-cols-1 md:grid-cols-2 place-items-center  gap-10 md:gap-5">
                   {content.map((item)=>{
                    return  <HoverCard image={item.image} title={item.tite} description={item.description} />
                   })}
                    
                    
                    
                </motion.div>
                
        </motion.div>
    )
}

export default Features