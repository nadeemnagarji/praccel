import { motion,  } from "framer-motion"




interface BenifitCardProps {
   image:string,
   title:string,
   description:string,
    isInView:boolean,

}

const BenifitSectionCard = ({image,title,description,isInView}:BenifitCardProps)=>{


    return (
        <motion.div className="shadow-md  border border-1 border-[#e9f3ff] px-4 py-4 rounded">
              <motion.div
              
              
              className="flex  justify-center items-center mb-4 w-10 h-10 rounded-full  lg:h-12 lg:w-12 border-2 border-[#6da9f3] dark:bg-primary-900">
                  <motion.img
                   initial={{ opacity: 0, y: 20, scale: 0.2 }}
                   whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                   animate={{ scale: [1, 1.5, 1] }} 
                   transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1],
                     delay: 1, scale: { repeat: Infinity, duration: 1, ease: [0.33, 1, 0.68, 1] } }}
                  className="  bg-red-400text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" src={image}/>
              </motion.div>
              <motion.h3
              initial={ isInView?  {opacity:"0"}: {opacity:"100%"}} 
              animate={isInView?  {opacity:"100%"}:{opacity:"0"} }  
              transition={{ease:[0.33, 1, 0.68, 1],duration:0.5,delay:0.5}}
              className="mb-2 font-main text-xl font-bold dark:text-white">{title}</motion.h3>
              <motion.p
              
              initial={ isInView?  {opacity:"0"}: {opacity:"100%"}} 
              animate={isInView?  {opacity:"100%"}:{opacity:"0"} }  
              transition={{ease:[0.33, 1, 0.68, 1],duration:0.5,delay:0.8}}
              className="text-gray-500 font-normal dark:text-gray-400">{description}</motion.p>
          </motion.div>
    )
}

export default BenifitSectionCard