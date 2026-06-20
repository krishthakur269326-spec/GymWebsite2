import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

const JoinSection = () => {
  return (
    <section className="bg-[#101010] relative min-h-[80vh] overflow-hidden px-6 md:px-8 lg:px-30 py-16 border border-b-white/5  flex flex-col justify-center items-center">
      <div className="floating-orb h-125 w-125 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="relative flex flex-col text-center items-center justify-between">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-4 tracking-[0.35em] uppercase text-[#20A7DB] text-[0.7rem] md:text-[0.9rem] lg:text-[1.1rem]"
        >
          Begin The Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-display text-white font-black text-4xl md:text-5xl leading-[1.05] text-glow"
        >
          YOUR STRONGEST SELF <br />
          STARTS TODAY
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <NavLink to="/membership" className="neon-btn-solid">
            Claim Membership
          </NavLink>
          <NavLink to="/contact" className="neon-btn">
            Book A Tour
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;
