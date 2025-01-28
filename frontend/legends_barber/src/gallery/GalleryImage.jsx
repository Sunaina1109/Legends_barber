import React from "react";
import '../App.css';

const galleryData = [
    { id: 1, type: "image", src: "./image/photo/pic1.jpeg", alt: "Photo 1" },
    { id: 2, type: "image", src: "./image/photo/pic2.jpeg", alt: "Photo 2" },
    { id: 3, type: "image", src: "./image/photo/pic3.jpeg", alt: "Photo 3" },
    { id: 4, type: "image", src: "./image/photo/pic4.jpeg", alt: "Photo 4" },
    { id: 5, type: "image", src: "./image/photo/pic5.jpeg", alt: "Photo 5" },
    { id: 6, type: "video", src: "./image/photo/vid1.mp4", alt: "video 1" },
    { id: 7,type:  "video", src: "./image/photo/vid2.mp4", alt: "video 2" },
    { id: 8, type: "video", src: "./image/photo/vid3.mp4", alt: "video 3" },
    { id: 9, type: "video", src: "./image/photo/vid4.mp4", alt: "video 4" },
    { id: 10, type: "video", src: "./image/photo/vid5.mp4", alt: "video 5" },
    { id: 11, type: "video", src: "./image/photo/vid6.mp4", alt: "video 6" },
    { id: 12, type: "video", src: "./image/photo/vid7.mp4", alt: "video 7" },
    { id: 13, type: "video", src: "./image/photo/vid8.mp4", alt: "video 8" },
    { id: 14, type: "video", src: "./image/photo/vid9.mp4", alt: "video 9" },
    { id: 15, type: "video", src: "./image/photo/vid10.mp4", alt: "video 10" },
];


const GalleryImage = () => {
    return (
      <div className="G-gallery">
        {/* Banner */}
        {/* <div className="G-banner">
          <img src=".\image\photo\Galley-banner.svg" alt="Gallery Banner" className="G-banner-image" />
        </div> */}
  
        {/* Gallery Items */}
        <div className="G-gallery-grid">
          {galleryData.map((item) => (
            <div key={item.id} className="G-gallery-item">
              {item.type === "image" ? (
                <img src={item.src} alt={item.alt} className="G-gallery-photo" />
              ) : (
                <video controls className="G-gallery-video">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default GalleryImage;