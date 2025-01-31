import React from "react";
import '../App.jsx';
import { Link } from "react-router-dom";
import { useModal } from "../context/ModalContext";


function Services() {
   const { openModal } = useModal();  // Get openModal function
    
    return (
        <div className="service-head">
             <div className="Service-About">
                {/* <h2>Explore Our Services</h2>
                <p>Offering exceptional, tailored grooming and beauty solutions for both gentlemen and ladies. Discover our expertise for Unique and personalized services.</p> */}
          <img src="/image/Service-banner.svg" alt='Hero_Image' className='Hero-img' ></img>        
</div>
<div className="service-button">
<a href="#" onClick={(e) => { e.preventDefault(); openModal(); }}>Book Appointment</a>
<a href="#" onClick={(e) => { e.preventDefault(); openModal(); }}>Book Appointment</a>
<a href="#" onClick={(e) => { e.preventDefault(); openModal(); }}>Book Appointment</a>
</div>
        {/* <div  className= 'service-h2'style={{ textAlign:'center', padding:'1.5rem'}}><h2> Explore Our Services</h2>
        <p>Offering exceptional, tailored grooming and beauty solutions for both gentlemen and ladies.</p>
        <p>Discover our expertise for Unique and personalized services.</p></div>
        <div className="service">
             <div className="card1">
                <img className="img" src=".\image\Hair_services-pic.svg" alt="nail-img"></img>
                <p>Transform your look with our expert hair services. From precision cuts to vibrant colors and luxurious treatments, we create styles that suit your personality, leaving you confident and radiant.</p>
                <button type="button" class="btn ">Check Now!</button>
            </div>
            <div className="card1">
                <img className="img" src=".\image\Skin_care-pic.svg" alt="img"></img>
                <p>Transform your look with our expert hair services. From precision cuts to vibrant colors and luxurious treatments, we create styles that suit your personality, leaving you confident and radiant.</p>
                <button type="button" class="btn ">Check Now!</button>
            </div>
            <div className="card1">
                <img className="img" src=".\image\Nail_arts-pic.svg" alt="img"></img>
                <p>Transform your look with our expert hair services. From precision cuts to vibrant colors and luxurious treatments, we create styles that suit your personality, leaving you confident and radiant.</p>
                <button type="button" class="btn">Check Now!</button>
            </div> 
            </div>  */}

        </div>
     );
}

export default Services;
