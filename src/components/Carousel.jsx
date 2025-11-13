import React from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css"; 

const contentStyle = {
  margin: 0,
  height: "400px",
  color: "#fff",
  lineHeight: "400px",
  textAlign: "center",
  background: "#000", 
  position: "relative",
  overflow: "hidden",
};

const slideImages = [
  {
    id: 1,
    src: "public/Carousel1.jpg",

  },
  {
    id: 2,
    src: "public/Carousel2.jpg",
    
  },
  {
    id: 3,
    src: "public/Carousel3.jpg",
    caption: "Comfort Meets Style",
  },
  {
    id: 4,
    src: "public/Carousel4.jpg",
  
  },
];

const CustomCarousel = () => {
  return (
    <Carousel autoplay autoplaySpeed={3000} dots={true} effect="fade">
      {slideImages.map((slide) => (
        <div key={slide.id}>
          <div style={contentStyle}>
            <img
              src={slide.src}
              alt={slide.caption}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 0,
              }}
            />
           
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
