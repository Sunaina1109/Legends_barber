import React from "react";
import { Link } from "react-router-dom";
import { useModal } from "../context/ModalContext";  // Use Modal Context
import '../App.css'
const MatosinhosSalon = () => {
    const { openModal } = useModal();  // Get openModal function
    
  return (
    <div className="font-sans text-gray-900">
      {/* Banner Section */}
      <section className="hero-pic">
      <img
          src=".\image\G-2.svg"
          alt="About Us"
        className='Hero-img'
        />
      </section>
<br></br>
      {/* About Section */}
      <section className="p-5">
        <img
          src=".\image\A-1.png"
          alt="About Us"
        className='Hero-img'
        />
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-20 px-10">
      <Link to='/' onClick={(e) => { e.preventDefault(); openModal(); }}>
      <img
          src=".\image\S-1.svg"
          alt="About Us"
        className='Hero-img'
        />
        </Link>
      </section>

      {/* Follow Us Section */}
      <section className="py-10 text-center">
      <div
      className="follow-container">
    
      <div className="follow">
        <h2>Social Media Links</h2>
        <p>
          "Connect with us on social media to learn more about our services and
          share your queries.</p> <p><b>We're here to assist you. Feel free to contact us
          anytime!"</b>
        </p>
        <br></br>
        <div className="follow-link">
          <div className="social-icon">
          <a href="https://www.facebook.com/share/15zFu1Ubwz/?mibextid=wwXIfr"><i class="fa-brands fa-square-facebook"></i></a>
          <a href="https://www.instagram.com/legends.barber.studio742?igsh=cHVsa29ucmx3Nm9y&utm_source=qr"><i class="fa-brands fa-square-instagram"></i></a>
          <a href="https://www.tiktok.com/@legendsbarberstudio1?_t=ZS-8tCbtQj5zIO&_r=1"><i class="fa-brands fa-tiktok"></i></a>
          <a href="https://wa.me/351920598170" target="_blank"><i class="fa-brands fa-square-whatsapp"></i></a>
          <a href="tel:+351920598170"><i class="fa-solid fa-square-phone"></i></a>

        </div>
        </div>
      </div>
    </div>
      </section>
    </div>
  );
};

export default MatosinhosSalon;
