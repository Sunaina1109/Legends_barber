import React from "react";
import "../App.css";

const services = {
  gents: {
    hair: [
      { name: "Basic Hair Cut", price: "8€" },
      { name: "Hair Cut", price: "12€" },
      { name: "Beard Cut", price: "8€" },
      { name: "Clean Shave", price: "6€" },
      { name: "Head Wash & Styling", price: "5€" },
      { name: "Highlights", price: "15€" },
    ],
    skincare: [
      { name: "Clean Up", price: "10€" },
      { name: "Clean Up (With Steam)", price: "15€" },
      { name: "D-Tan Facial", price: "30€" },
      { name: "Facial", price: "35€" },
      { name: "Acne Treatment", price: "25€" },
      { name: "Head Massage (30 minutes)", price: "15€" },
    ],
    nails: [
      { name: "Threading", price: "7€" },
      { name: "Full Arm's Wax", price: "14.99€" },
      { name: "Full Leg's Wax", price: "19.99€" },
    ],
  },
  ladies: {
    hair: [
      { name: "Basic Hair Cut", price: "12€" },
      { name: "Layers Hair Cut", price: "17€" },
      { name: "Blow Dryer", price: "23€" },
      { name: "Highlights (since)", price: "65€" },
      { name: "Hair Colour (short length)", price: "25€" },
      { name: "Keratin (since)", price: "75€" },
    ],
    skincare: [
      { name: "Clean Up", price: "10€" },
      { name: "Facial (since)", price: "25€" },
      { name: "D-Tan Facial", price: "30€" },
      { name: "Acne Treatment", price: "25€" },
      { name: "Head Massage (25 minutes)", price: "20€" },
    ],
    nails: [
      { name: "Manicure", price: "13€" },
      { name: "Pedicure", price: "22€" },
      { name: "Gel Nail Polish", price: "14€" },
      { name: "Nail Art for One Nail", price: "3€" },
      { name: "Capsule Nail Extension with Glue", price: "15€" },
    ],
  },
};

const Price = () => {
  return (
    <div className="price-list">
      {/* Gents Section */}
      <div className="section gents-section">
        <h2>Gents Services</h2>
        {/* <img src="/assets/gents.jpg" alt="Gents" className="price-image" /> */}

        <div className="services">
          {/* Hair Services */}
          <h3 className="h3">Hair Services</h3>
          <ul className="ul">
            {services.gents.hair.map((service, index) => (
              <li key={index}>
                <span>{service.name}</span>
                <span>{service.price}</span>
              </li>
            ))}
          </ul>

          {/* Skin Care */}
          <h3 className="h3">Skin Care</h3>
          <ul  className="ul">
            {services.gents.skincare.map((service, index) => (
              <li key={index}>
                <span>{service.name}</span>
                <span>{service.price}</span>
              </li>
            ))}
          </ul>

          {/* Nail Art */}
          <h3 className="h3">Nail Art</h3>
          <ul  className="ul">
            {services.gents.nails.map((service, index) => (
              <li key={index}>
                <span>{service.name}</span>
                <span>{service.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Ladies Section */}
      <div className="section ladies-section">
        <h2>Ladies Services</h2>
        {/* <img src="/assets/ladies.jpg" alt="Ladies" className="price-image" /> */}

        <div className="services">
          {/* Hair Services */}
          <h3 className="h3">Hair Services</h3>
          <ul  className="ul">
            {services.ladies.hair.map((service, index) => (
              <li key={index}>
                <span>{service.name}</span>
                <span>{service.price}</span>
              </li>
            ))}
          </ul>

          {/* Skin Care */}
          <h3 className="h3">Skin Care</h3>
          <ul  className="ul">
            {services.ladies.skincare.map((service, index) => (
              <li key={index}>
                <span>{service.name}</span>
                <span>{service.price}</span>
              </li>
            ))}
          </ul>

          {/* Nail Art */}
          <h3 className="h3">Nail Art</h3>
          <ul  className="ul">
            {services.ladies.nails.map((service, index) => (
              <li key={index}>
                <span>{service.name}</span>
                <span>{service.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Price;
