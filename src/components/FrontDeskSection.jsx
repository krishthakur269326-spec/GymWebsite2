import React from "react";
import frontdesk from '../assets/About/frontdesk.webp'
import { motion } from "motion/react";

const FrontDeskSection = () => {
  return (
    <section className="bg-black relative flex flex-col items-center gap-6 overflow-hidden px-6 py-16 md:px-8 lg:px-30 border border-b-white/5">
      <div className="text-center max-w-xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-4 tracking-[0.35em] uppercase text-[#20a7db] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
        >
          Our Frontdesk
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-display text-white font-bold text-3xl md:text-4xl"
        >
          our front desk team is here to support your fitness journey from day one.
        </motion.h2>
      </div>
      <div className="mx-auto">
        <img src={frontdesk} alt="" loading="lazy" className="rounded-2xl lg:w-3xl" />
      </div>
    </section>
  );
};

export default FrontDeskSection;
