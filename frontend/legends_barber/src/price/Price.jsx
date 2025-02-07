import React from "react";
import "../App.css";

const services = {
  gents: {
    hair: [
      { name: "Basic Hair Cut", price: "8€" },
      { name: "Hair Cut", price: "12€" },
      { name: "Beard Cut", price: "8€" },
      { name: "Clean Shave", price: "6€" },
      { name: "Baby Hair Cut", price: "10€" },
      { name: "Head Wash & Styling", price: "5€" },
      { name: "Braids & Dreadlocks (By Appointment)", price: "N/A" },
      { name: "Hair Curl", price: "45€" },
      { name: "Highlights", price: "15€" },
      { name: "Highlights (Fashion Shades)", price: "45€" },
      { name: "White Hair Colour", price: "40€" },
      { name: "Men’s Hair Colour (Black, Brown, Dark Brown)", price: "12€" },
      { name: "Hair Colour & Polishing", price: "15€" },
      { name: "Rebonding/Smoothing", price: "45€" },
      { name: "Hair and Beard Cut Combo", price: "18€" },
    ],
    skincare: [
      { name: "Face Wax", price: "8€" },
      { name: "Head Massage (30 minutes)", price: "15€" },
      { name: "Clean Up", price: "10€" },
      { name: "Clean Up (With Steam)", price: "15€" },
      { name: "Only Scrub", price: "5€" },
      { name: "Only D-Tan", price: "5€" },
      { name: "Only Gel Massage", price: "5€" },
      { name: "D-Tan Facial", price: "30€" },
      { name: "Facial (Basic)", price: "25€" },
      { name: "Facial (Advanced)", price: "35€" },
      { name: "Acne Treatment", price: "25€" },
    ],
    bodyCare: [
      { name: "Manicure (By Appointment)", price: "12€" },
      { name: "Pedicure (By Appointment)", price: "20€" },
      { name: "Foot Massage (20 minutes)", price: "15€" },
      { name: "Hand Massage (10 minutes)", price: "9€" },
      { name: "Threading", price: "7€" },
      { name: "Full Arms Wax", price: "14.99€" },
      { name: "Full Legs Wax", price: "19.99€" },
    ],
  },
  ladies: {
    Hair: [
      { name: "Head Wash", price: "12€" },
      { name: "Head Wash & Brushing", price: "15€" },
      { name: "Head Massage (25 minutes)", price: "20€" },
      { name: "Hair Spa", price: "17€" },
      { name: "Basic Hair Cut", price: "12€" },
      { name: "Layers Hair Cut", price: "17€" },
      { name: "Step Hair Cut", price: "17€" },
      { name: "Blow Dryer", price: "23€" },
      { name: "Head Wash & Blow Dryer", price: "32€" },
      { name: "Highlights", price: "65€" },
      { name: "Highlight Chunks", price: "20€" },
      { name: "Temporary Hair Ironing", price: "17€" },
      { name: "Temporary Hair Rolls", price: "22€" },
      { name: "Roots Touch-up (Black, Brown, Dark Brown)", price: "18€" },
      { name: "Hair Colour (Short Length)", price: "25€" },
      { name: "Hair Colour (Medium Length)", price: "40€" },
      { name: "Hair Colour (Long Length)", price: "65€" },
      { name: "Keratin Treatment", price: "75€" },
      { name: "Hair Polishing", price: "25€" },
      { name: "Rebonding/Smoothing", price: "120€+" },
    ],
    skincare: [
      { name: "Face Wax", price: "8€" },
      { name: "Head Massage (30 minutes)", price: "15€" },
      { name: "Clean Up", price: "10€" },
      { name: "Clean Up (With Steam)", price: "15€" },
      { name: "Only Scrub", price: "5€" },
      { name: "Only D-Tan", price: "5€" },
      { name: "Only Gel Massage", price: "5€" },
      { name: "D-Tan Facial", price: "30€" },
      { name: "Facial (Basic)", price: "25€" },
      { name: "Facial (Advanced)", price: "35€" },
      { name: "Acne Treatment", price: "25€" },
    ],
    bodyCare: [
      { name: "Manicure", price: "13€" },
      { name: "Manicure With Normal Nail Polish", price: "16€" },
      { name: "Manicure With Gel Nail Polish", price: "20€" },
      { name: "Threading", price: "7€" },
      { name: "Threading & Colouring", price: "15€" },
      { name: "Pedicure", price: "22€" },
      { name: "Pedicure With Nail Polish", price: "27€" },
      { name: "Foot Massage (20 minutes)", price: "15€" },
    ],
  },
  nailArts: [
    { name: "New Gel Extension", price: "29€" },
    { name: "Gel Extension Maintenance", price: "24€" },
    { name: "Take Off Gel Extension", price: "12€" },
    { name: "One Nail Repair", price: "3€" },
    { name: "Take Off Gel Nail Polish", price: "9€" },
    { name: "Capsule Nail Extension with Glue", price: "15€" },
    { name: "Nail Polish", price: "10€" },
    { name: "Gel Nail Polish", price: "14€" },
    { name: "Additional French Colour", price: "4€" },
    { name: "Nail Art for One Nail", price: "3€" },
  ],
};

const Price = () => {
  return (
    <div className="price-list">
      <div className="sections">
        <h2 className="price-h2">Gents Services</h2>
        {Object.keys(services.gents).map((category) => (
          <div key={category}>
            <h3 className="price-h3">{category.replace(/([A-Z])/g, " $1").trim()}</h3>
            <ul className="price-ul">
              {services.gents[category].map((service, index) => (
                <li key={index}><span>{service.name}</span><span>{service.price}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="sections">
        <h2 className="price-h2">Ladies Services</h2>
        {Object.keys(services.ladies).map((category) => (
          <div key={category}>
            <h3 className="price-h3">{category.replace(/([A-Z])/g, " $1").trim()}</h3>
            <ul className="price-ul">
              {services.ladies[category].map((service, index) => (
                <li key={index}><span>{service.name}</span><span>{service.price}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="sections">
        <h2 className="price-h2">Nail Arts</h2>
        <ul className="price-ul">
          {services.nailArts.map((service, index) => (
            <li key={index}><span>{service.name}</span><span>{service.price}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
