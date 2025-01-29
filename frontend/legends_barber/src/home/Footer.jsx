import React from "react";
import { Link } from "react-router-dom";
import { useModal } from "../context/ModalContext";  // Use Modal Context
import "../App.css";

const Footer = () => {
   const { openModal } = useModal();  // Get openModal function

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section company">
                    <h3>Get in Touch</h3>
                    <a>📞 +351-920598170, +351-932724056</a><br />
                    <a href="mailto:info.lengendsbarber@gmail.com"> 📧 info.Legendsbarber@gmail.com</a>

                    <p className="Follow-us">Follow Us:</p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/share/15zFu1Ubwz/?mibextid=wwXIfr"><i className="fa-brands fa-square-facebook"></i></a>
                        <a href="https://www.instagram.com/legends.barber.studio742?igsh=cHVsa29ucmx3Nm9y&utm_source=qr"><i className="fa-brands fa-square-instagram"></i></a>
                        <a href="https://www.tiktok.com/@legendsbarberstudio1?_t=ZS-8tCbtQj5zIO&_r=1"><i className="fa-brands fa-tiktok"></i></a>
                        <a href="https://wa.me/351920598170" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-whatsapp"></i></a>
                        <a href="tel:+351920598170"><i className="fa-solid fa-square-phone"></i></a>
                    </div>
                </div>

                <div className="footer-section quick-links">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">Terms & Condition</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Disclaimer</a></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-section services">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/price">Price</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/photos">Gallery</Link></li>
                        {/* Use openModal function */}
                        <li><a href="#" onClick={(e) => { e.preventDefault(); openModal(); }}>Book Appointment</a></li>
                    </ul>
                </div>

                <div className="footer-section get-in-touch">
                    <h3>Store Locations</h3>
                    <ul>
                        <li>📍Rua Santa Catarina 742, 4000-446, Porto</li>
                        <li>📍Avenida Da Republica 488, 4450-237, Matosinhos</li>
                        <li>📍Rua Almirante Candido Dos Reis 84, 2460-023, Aveiro</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p><i className="fa-regular fa-copyright"></i> 2025 Legends Barber Services. All rights reserved | Powered by <a href="https://cosmicdatasystems.com/">Cosmic Data Systems</a></p>
            </div>
        </footer>
    );
};

export default Footer;
