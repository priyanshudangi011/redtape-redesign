import React, { useState, useEffect } from "react";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StickyCard002 from "./components/StickyCard002"; 
import Footer from "./components/Footer";
import Slide from "./components/Slide";
import CustomCarousel from "./components/Carousel";

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          setShowContent(true);
        }
      },
    });
  }, []);

 
  const cards = [
    { id: 1, image: "r1.webp", alt: "Sneaker 1" },
    { id: 2, image: "r2.webp", alt: "Sneaker 2" },
    { id: 3, image: "https://redtape.com/cdn/shop/files/APPAREL-1600x900_1700x_7bde42c0-69fb-460c-a0ea-0474f204dec5_1700x.webp?v=1741691113", alt: "Sneaker 3" },
    { id: 4, image: "https://redtape.com/cdn/shop/files/1000x900-1_08f1e2ae-9972-4736-aece-62bf8e3159ba.webp?v=1741691932", alt: "Sneaker 4" },
  ];

  return (
    <div className="relative w-full h-screen">
     
      {!showContent && (
        <div className="fixed top-0 left-0 z-50 w-full h-screen flex items-center justify-center bg-black overflow-hidden">
          <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="viMask">
                <rect width="100%" height="100%" fill="black" />
                <g className="vi-mask-group">
                  <text
                    x="50%"
                    y="50%"
                    fontSize="250"
                    textAnchor="middle"
                    fill="white"
                    dominantBaseline="middle"
                    fontFamily="Arial Black"
                  >
                    RT
                  </text>
                </g>
              </mask>
            </defs>

            <rect width="100%" height="100%" fill="white" mask="url(#viMask)" />
          </svg>
        </div>
      )}

      {showContent && (
        <div className="w-full bg-black text-white">
          <Navbar />

      <div style={{ maxWidth: "1200px", margin: "50px auto" }}>
      
      <CustomCarousel />
       </div>

          <section className="h-[400vh] w-full">
            <StickyCard002
              cards={cards}
              className="bg-black h-screen w-full"
              containerClassName="h-full w-full"
              imageClassName="object-cover" />
          </section>
          <Slide />
  
           <HeroSection />
          <Footer />
        </div>
        )}
    </div>
        );
      }
      export default App;
         
         







