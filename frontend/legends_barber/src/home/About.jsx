import React from "react";
import "../App.css";
import { motion } from "framer-motion";

function About() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

    return ( 
        <div className="About p-2">
           <motion.section
        className="hero-section"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        
          <img src="/image/banner-about.svg" alt='Hero_Image' className='Hero-img' ></img>    
         
              </motion.section>
    
</div>
     );
}

export default About;