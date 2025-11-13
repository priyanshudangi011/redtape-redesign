// import React from "react";
import { Heart } from "lucide-react";

const products = [
  { id: 1, name: "RedTape Shoe 1", price: 1000, img: "/r1.webp", for: "man" },
  { id: 2, name: "RedTape Shoe 2", price: 1200, img: "/r2.webp", for: "woman" },
  { id: 3, name: "RedTape Shoe 3", price: 1100, img: "/r3.webp", for: "man" },
  { id: 4, name: "RedTape Shoe 4", price: 1300, img: "/r4.webp", for: "man" },
  { id: 5, name: "RedTape Shoe 5", price: 1500, img: "/r5.webp", for: "woman" },
  { id: 6, name: "RedTape Shoe 6", price: 1400, img: "/r6.webp", for: "man" },
  { id: 7, name: "RedTape Shoe 7", price: 1250, img: "/r7.webp", for: "woman" },
  { id: 8, name: "RedTape Shoe 8", price: 1350, img: "/r8.webp", for: "woman" },
  { id: 9, name: "RedTape Shoe 9", price: 1450, img: "/r9.webp", for: "man" },
  { id: 10, name: "RedTape Shoe 10", price: 1550, img: "/r10.webp", for: "man" },
];

const HeroSection = () => {
  return (
    <section className="bg-[#0B0B0B] py-16 px-6 md:px-16 min-h-screen text-white">
     

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#1A1A1A] rounded-xl p-4 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative"
          >
            <img
              src={product.img}
              alt={product.name}
              className="h-44 w-full object-contain mb-4 rounded-md"
            />
            <h2 className="font-semibold text-lg text-white">{product.name}</h2>
            <p className="text-gray-300 text-sm">{product.for.toUpperCase()}</p>
            <p className="text-red-500 font-bold mt-1 text-lg">
              ₹{product.price}
            </p>

            <div className="flex items-center gap-3 mt-2 mb-2">
              <button className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-white font-semibold text-sm transition active:scale-95">                ADD TO CART
              </button>
              <Heart
                size={22}
                className="text-gray-400 hover:text-red-500 cursor-pointer transition-transform active:scale-90"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
