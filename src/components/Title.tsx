import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
type Props={
  title:string
}
const Title = ({title}:Props) => {
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0.5, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
      <div className=" mt-[40px]">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="md:text-3xl  text-2xl font-bold  text-blue-600 leading-10
          text-center tracking-widest  mb-4"
        >
      {title}
        </motion.h1>
      </div>
    
  );
};

export default Title;
