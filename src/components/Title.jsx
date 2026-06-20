import { motion } from "motion/react";
import React from "react";

const Title = ({ para1, title, para2 }) => {
  return (
    <section className="bg-black relative flex items-start overflow-hidden px-6 py-30 md:px-8 lg:px-34">
      <div className="floating-orb h-100 w-100 -top-20 -left-20 animate-pulse"></div>
      <div className="floating-orb h-100 w-100 top-10 right-0 animate-pulse"></div>
      <div>
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-4 tracking-[0.35em] uppercase text-[#20A7DB] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
          >
            {para1}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-80px" }}
            className="font-display font-black text-[#fafafa] text-[3rem] md:text-7xl lg:text-8xl leading-none"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mt-4 text-[1.2rem] text-[#aeaeae]"
          >
            {para2}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Title;
