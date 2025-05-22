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
         <p style={{fontSize:'0.5px', color: 'white', textAlign:'center'}}>
        Legends Barber Studio welcomes men and women on a transformative journey
        of style and self-care. We offer exceptional hair, skin, and nail
        services, all in one place, ensuring a seamless and luxurious
        experience. Our expert stylists and beauty professionals are dedicated
        to delivering top-tier services tailored to your unique needs. Whether
        you’re looking for a fresh haircut, a rejuvenating skin treatment, or
        artistic nail designs, we have you covered. Step into our studio and let
        us enhance your confidence with the perfect look. Visit Legends Barber
        Studio today for premium grooming and beauty services designed just for
        you!
      </p>
        <img
          src="/image/banner-about.svg"
          alt="Hero_Image"
          className="Hero-img"
        ></img>
      </motion.section>
      <p style={{fontSize:'1px', color: 'white', textAlign:'center'}}>
          Legends Barber Studio is the ultimate destination for men’s and
          women’s haircuts, skincare, and nail art services. We offer
          professional hair styling, beard grooming, facials, waxing, manicures,
          and pedicures, all in one place. Our top-rated barbers and beauty
          experts provide modern hairstyles, fades, shaves, hair coloring, and
          rejuvenating skin treatments to enhance your look. Whether you need a
          trendy haircut, glowing skin, or stylish nails, we ensure a luxurious
          experience. Visit Legends Barber Studio, the best unisex salon and
          grooming studio, for your complete transformation today!
        </p>
    </div>
  );
}

export default About;
