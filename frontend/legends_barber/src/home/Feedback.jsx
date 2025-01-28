import React, { useRef } from "react";
import "../App.css";

function Feedback() {
  const testimonials = [
    {
      name: "Emily Johnson",
      feedback:
        "Legends Barber gave me the best haircut I've ever had! The staff is friendly, and the atmosphere is fantastic.",
    },
    {
      name: "Michael Lee",
      feedback:
        "The skin treatments here are amazing. My skin feels refreshed and glowing after every visit!",
    },
    {
      name: "Sophia Martinez",
      feedback:
        "I love their nail art! The designs are so creative and always on point. Highly recommend Legends Barber!",
    },
    {
      name: "Alex Brown",
      feedback:
        "The best salon experience I've ever had! The services are impeccable, and the staff is so attentive.",
    },
    {
      name: "Jessica White",
      feedback:
        "I love the skin treatments! The quality of service here is unmatched. Highly recommend it!",
    },
  ];

  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="container">
    <div className="testimonials">
      <h2 className="testimonial-heading">Testimonials</h2>
      <div className="testimonial-wrapper">
        <button className="scroll_button left" onClick={scrollLeft}>
          &#8592;
        </button>
        <div className="testimonial-cards" ref={scrollContainer}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <h4 className="testimonial-name">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
        <button className="scroll_button right" onClick={scrollRight}>
          &#8594;
        </button>
      </div>
    </div>
    </div>
  );
}

export default Feedback;
