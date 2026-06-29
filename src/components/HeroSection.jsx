import React, { useState, useEffect } from "react";
import img1 from "../assets/gymfloor.webp";
import img2 from "../assets/gymfloor2.webp";
import img3 from "../assets/gymfloor3.webp";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const images = [img1, img2, img3];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black relative min-h-svh flex items-end overflow-hidden px-6 md:px-8 lg:px-30">
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            fetchpriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            className={`absolute h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-30" : "opacity-0"
              }`}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: "-80px" }}
        className="relative pb-24 pt-32 md:pb-32">
        <p
          className="text-[#20a7db] font-semibold text-[14px] lg:text-[1rem] uppercase tracking-[0.2em] mb-6"
        >
          ◆ Est. 2018 — Premium Training Club
        </p>
        <h1

          className="text-white uppercase font-black text-6xl md:text-7xl lg:text-9xl leading-[0.82] tracking-tight"
        >
          Platinum <br />
          <span className="text-[#20a7db]"> Fitness</span>
        </h1>
        <div

          className="mt-10 flex flex-wrap gap-4"
        >
          <NavLink to="/membership" className="neon-btn-solid">
            Join Now <ArrowRight />
          </NavLink>
          <NavLink to="/service" className="neon-btn">
            Explore Programs
          </NavLink>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
