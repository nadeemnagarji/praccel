
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import TestimonialCard from "./TestimonialCard"

const TestimonialsContent = [
    {
        content:"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
        author:"Micheal Gough",
        address:"CEO at Google"
    },
    {
        content:"Praccel develops good reading habits among students through practice.",
        author:"Father of Viola Sanvi, Class 5",
        address:"St. Raymonds Primary School, Vamanjoor"
    },
    {
        content:"I have been using Praccel app for a month now. I like this app very much. I improved my English with the help of this app during summer vacation.",
        author:"Larissa D Souza, Class 7",
        address:"Nithyadar English Medium School, Mangalore"
    },
    {
        content:"Praccel Reading App is helpful for improving basic knowledge of English pronunciation.",
        author:"Mother of Angela Michelle Dias, Class 2",
        address:"St. Lawrence English medium School, Mangalore"
    }

]


const Testimonials = ()=>{
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
        <motion.div ref={ref} className="w-full  bg-[#0A57FF] min-h-max lg:min-h-max flex mt-28 items-center flex-col justify-center   pt-10 px-8 pb-10">
        <motion.h1
            initial={ isInView? {opacity:"0",y:20}: {opacity:"100%",y:0}} 
            animate={isInView?  {opacity:"100%",y:0}:{opacity:"0",y:50} }  
            transition={{ease:[0.33, 1, 0.68, 1],duration:0.5,delay:0.3}}
            
            className="text-5xl text-white font-main  md:text-5xl lg:text-5xl font-bold mb-10">
                Testimonials
            </motion.h1>
            <Carousel className=" md:max-w-[95%] w-[85%]  ">
      <CarouselContent>
        {TestimonialsContent.map((item, index) => (
          <CarouselItem key={index}>
            <div className="sm:p-1  ">
              <TestimonialCard content={item.content} author={item.author} address={item.address} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
            </motion.div>
    )
}

export default Testimonials;