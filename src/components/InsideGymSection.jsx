import React from "react";
import {NavLink} from "react-router-dom";
import StrengthFloor from "../assets/gymfloor.webp";
import Cardio from "../assets/services/cardio.webp";
import Recovery from "../assets/services/sauna.webp";
import { motion } from "motion/react";

const InsideGymSection = () => {
  const images = [
    { img: StrengthFloor, title: "Strength Floor" },
    { img: Cardio, title: "Cardio Zone" },
    { img: Recovery, title: "Recovery Zone" },
  ];
  return (
    <section className="bg-[#101010] relative min-h-svh overflow-hidden px-6 md:px-8 lg:px-30 py-16 border border-b-white/5">
      <div className="grid md:grid-cols-[1fr_auto] items-end gap-8 mb-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-4 tracking-[0.35em] uppercase text-[#20A7DB] text-[0.7rem] md:text-[0.9rem] lg:text-[1.1rem]"
          >
            Inside The Gym
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-80px" }}
            className="font-display text-white font-black text-4xl md:text-6xl leading-none"
          >
            Built to Forge <br />
            Stronger Bodies and Minds
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <NavLink to="/gallery" className="neon-btn">
            View Gallery
          </NavLink>
        </motion.div>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-4">
        {images.map((image, i) => (
          <div key={image.title} className="relative overflow-hidden rounded-2xl border border-white/10 aspect-4/5 group">
            <img src={image.img} alt="" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-all duration-700"/>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-5 left-5 right-5 text-xs tracking-[0.25em] uppercase text-white/70">
              {image.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsideGymSection;
