
import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  const FaqContent = [{
    question:"What is Praccel?",
    answer:"An app which helps improve reading skills. It gives short reading passages regularly. The reader has to read the passage aloud, after which the reader gets feedback on his reading performance."
  },
  {
    question:"Who can use the app?",
    answer:"Students from class 2 to class 10."
  },
  {
    question:"How does Praccel help in improving reading skills?",
    answer:"Reading is a skill which needs to be practised regularly in order to be better at it. Praccel makes users read regularly and gives feedback. This helps improve their performance in the long run."
  },
  {
    question:"How long is the reading passage? How much time does it take to read?",
    answer:"Each reading passage depends on the class and the reading level of each student. On an average, it takes about 1 min to read a passage."
  }

]




const Faq = ()=>{
    const ref = useRef(null)
    const isInView = useInView(ref)
    return(
        <motion.div ref={ref} className="w-full  m-auto min-h-max lg:min-h-max flex mt-28    items-center flex-col justify-center   pt-10 px-8 mb-10 ">
            <motion.h1
          initial={ isInView? {opacity:"0",y:20}: {opacity:"100%",y:0}} 
          animate={isInView?  {opacity:"100%",y:0}:{opacity:"0",y:50} }  
          transition={{ease:[0.33, 1, 0.68, 1],duration:0.5,delay:0.5}}
            
            className="text-5xl font-main  md:text-5xl lg:text-5xl font-bold mb-10">
             Frequently Asked Questions
            </motion.h1>
            <div className=" w-full flex items-center justify-center px-8">
            <Accordion type="single" collapsible className="w-full">
      {FaqContent.map((faq)=>{
        return <AccordionItem value={faq.question}>
            <AccordionTrigger className=" text-xl">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-lg bg-[#0A57FF] text-white px-2 py-2 rounded-md">{faq.answer}</AccordionContent>
        </AccordionItem>
      })}
    </Accordion>
            </div>
        </motion.div>
    )
}

export default Faq