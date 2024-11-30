
import { CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Button } from "./ui/button";
import { motion } from "framer-motion";
interface StepCardProps {
    image:string,
    title:string,
    description:string,
    step:string

}

const StepCard = ({image,title,description,step}:StepCardProps)=>{
    return (
      
        <motion.div
        
        whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        
        className="h-max-content cursor-pointer min-w-full border rounded-lg" > 
        <CardHeader className="flex items-center justify-center">
        <CardTitle className="text-2xl font-semibold text-gray-600 -mb-6">{step}</CardTitle> </CardHeader> 
        <CardContent> 
           <img className="max-w-[400px] w-full object-cover rounded-lg shadow-sm" src={image} alt={image} /> 
           <CardDescription className="mt-4 text-gray-600 dark:text-gray-400">
                <Button className=" text-gray-700 text-lg" variant={"link"}>{title}</Button>
                <p className=" text-sm">{description}</p>
                </CardDescription> 

            </CardContent> 
       </motion.div> 
    )
}

export default StepCard;