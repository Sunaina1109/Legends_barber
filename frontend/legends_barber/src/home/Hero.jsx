import React from "react";
import '../App.css'

function Hero() {
    return ( 
        <div className="containr">
            <div className="hero-pic">
            <img src='.\image\Banner1.svg' alt='Hero_Image' className='Hero-img' /> 
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
            </div>
           
        </div>
     );
}

export default Hero;