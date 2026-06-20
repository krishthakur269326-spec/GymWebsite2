import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "./services";
import { motion } from "motion/react";

const AllServiceSection = () => {
  return (
    <section className="bg-[#101010] relative min-h-svh overflow-hidden px-6 md:px-8 lg:px-30 py-16 border-b border-white/5">
      <div className="text-center mb-6 max-w-xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-4 tracking-[0.35em] uppercase text-[#20a7db] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
        >
          More Than a Gym
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-display text-white font-bold text-3xl md:text-4xl"
        >
          World-class training, recovery, nutrition, grooming, and wellness—all
          in one destination.
        </motion.h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="glass-card h-full group flex flex-col overflow-hidden"
            >
              <div className="h-55 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-col flex-1 gap-4 p-5">
                <Icon size={24} className="text-[#20A7DB]" />

                <h3 className="font-display text-white font-bold text-2xl">
                  {service.title}
                </h3>

                <p className="text-sm text-white/55 leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AllServiceSection;
