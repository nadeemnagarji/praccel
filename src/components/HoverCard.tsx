import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface HoverCardProps {
  title: string;
  image: string;
  description: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ title, image, description }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="w-full max-w-[550px] "
    >
      <Card className='flex flex-col h-[300px]  items-center justify-center'>
       <img 
          src={image} 
          alt={title} 

          className=" object-cover w-20 mt-4"
        />
        <CardHeader className=' text-2xl font-main'>
          <CardTitle >{title}</CardTitle>
        </CardHeader>
       
        <CardContent  className=" -mt-3">
          <CardDescription className=' text-md font-medium'>{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default HoverCard;
