import React from "react";
import "../App.css"
import { Link } from "react-router-dom";


const Gallery = () => {
  // const images = [
  //   { id: 1, src: "/image/photo/Small-pic1.png", alt: "Gallery Image 1" },
  //   { id: 2, src: "/image/photo/Small-pic2.png", alt: "Gallery Image 2" },
  //   { id: 3, src: "/image/photo/Small-pic1.png", alt: "Gallery Image 3" },
  //   { id: 4, src: "/image/photo/Small-pic1.png", alt: "Gallery Image 4" },
  //   { id: 5, src: "/image/photo/Small-pic1.png", alt: "Gallery Image 5" },
  // ];

  return (
    <div className="Gallery p-2">
      <div className="Gallery-img">
         <Link to='/photos'> <img src="/image/photo/Gallery-banner.svg" alt='Hero_Image' className='Hero-img' ></img></Link>    
</div>
</div>

  );
};

export default Gallery;
