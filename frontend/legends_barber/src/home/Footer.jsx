import React from "react";
import "../App.jsx";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section company">
        <h3>Get in Touch</h3>
            <a>📞 +91-9415760616, +91-8787094691</a><br></br>
             <a href="mailto:vivek.divineservices@gmail.com"> 📧 info.Legendsbarber@gmail.com</a>
            
        <p className="Follow-us">Follow Us:</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61571583203134&mibextid=JRoKGi"><i class="fa-brands fa-square-facebook"></i></a>
          <a href="https://www.instagram.com/divinetravelservices2025"><i class="fa-brands fa-square-instagram"></i></a>
          <a href="tel:+919415760616"><i class="fa-brands fa-tiktok"></i></a>
          <a href="https://wa.me/919415760616" target="_blank"><i class="fa-brands fa-square-whatsapp"></i></a>
          <a href="tel:+919415760616"><i class="fa-solid fa-square-phone"></i></a>
        </div>
        </div>

        <div className="footer-section quick-links">
        <h3>Company</h3>
          <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Disclaimer</a></li>
          <li><a href="#">Terms & Condition</a></li>
          <li><a href="#">testimonials</a></li>
          <li><a href="About-us"> Contact Us</a></li>

          </ul>
        </div>

        <div className="footer-section services">
          <h3>Useful Links</h3>
          <ul >
            <li><a href="/">Home</a></li>
            <li><a href="About-us"> About Us</a></li>
            <li><a href="/Services">Services</a></li>
            <li><a href="About-us">Gallery</a></li>
            <li><a href="About-us">Appointment</a></li>

           
          </ul>
        </div>

        <div className="footer-section get-in-touch">
        <h3>Store Locations</h3>
          <ul>
            <li>📍Rua Santa Catarina 742, 4000-446, Porto</li>
            <li>📍Avenida Da Republica 488, 4450-237, Matosinhos</li>
            <li>📍Rua Almirante Candido Dos Reis 84, 2460-023, Aveiro </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p><i class="fa-regular fa-copyright"></i> 2025 Legends Barber Services. All right reserved | Powered by <a href="https://cosmicdatasystems.com/">Cosmic Data Systems</a>

</p>
      </div>
    </footer>
  );
};

export default Footer;
