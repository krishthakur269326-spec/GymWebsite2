import React from "react";
import heroimg from "../assets/home.jpg";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section className="bg-[#101010] relative min-h-svh flex items-end overflow-hidden px-6 md:px-8 lg:px-30">
      <div className="floating-orb h-100 w-100 -top-20 -left-20 animate-pulse"></div>
      <div className="floating-orb h-100 w-100 top-10 right-0 animate-pulse"></div>
      <div className="absolute inset-0">
        <img
          src={heroimg}
          alt=""
          className="absolute h-full w-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,black_85%)]"></div>
      </div>
      <div className="relative pb-24 pt-32 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-[#20a7db] font-mono text-[12px] uppercase tracking-[0.4em] text-primary mb-6"
        >
          ◆ Est. 2018 — Premium Training Club
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-white uppercase font-black text-5xl md:text-6xl lg:text-9xl leading-[0.82] tracking-tight text-glow"
        >
          Platinum <br />
          <span className="text-[#20a7db]"> Fitness</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <NavLink to="/membership" className="neon-btn-solid">
            Join Now <ArrowRight />
          </NavLink>
          <NavLink to="/service" className="neon-btn">
            Explore Programs
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
