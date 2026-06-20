import React from "react";
import usbg from "../assets/usbg.jpg";
import { motion } from "motion/react";

const OurStorySection = () => {
  return (
    <section className="bg-[#101010] relative min-h-svh overflow-hidden px-6 md:px-8 lg:px-34 border border-b-white/5">
      <div className="py-24 grid lg:grid-cols-2 gap-10 lg:gap-0 items-center">
        <div>
          <img
            src={usbg}
            alt=""
            loading="lazy"
            decoding="async"
            className="rounded-2xl border border-white/10 md:h-[90%] md:w-[90%]"
          />
        </div>
        <div className="space-y-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-4 tracking-[0.35em] uppercase text-[#20a7db] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]">
              Our Story
            </p>
            <h2 className="font-display text-white font-bold text-3xl md:text-4xl">
              From a single barbell to a private club.
            </h2>
            <p className="mt-5 text-white/60 leading-relaxed">
              Platinum fitness began in 2018 in a converted warehouse with one rack,
              one mirror and a refusal to dilute the standard. Fourteen years
              later, the standard is the only thing that hasn't changed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-4 tracking-[0.35em] uppercase text-[#20a7db] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]">
              Our Mission
            </p>
            <p className="mt-5 text-white/60 leading-relaxed">
              we are dedicated to creating an elite fitness experience where ambition meets results. Through world-class equipment, professional coaching, and a culture built on excellence, we inspire our members to push beyond limits, embrace challenges, and become the strongest version of themselves—both physically and mentally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-4 tracking-[0.35em] uppercase text-[#20a7db] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]">
              Our Vision
            </p>
            <p className="mt-5 text-white/60 leading-relaxed">
              To inspire a generation of stronger, healthier, and more confident individuals by creating a world-class fitness community built on excellence, innovation, and personal transformation.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
