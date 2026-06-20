import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "./services";
import { motion } from "motion/react";

const ProgramSection = () => {
  return (
    <section className="bg-[#101010] relative min-h-svh overflow-hidden px-6 md:px-8 lg:px-30 py-16 border-b border-white/5">
      <div className="grid md:grid-cols-[1fr_auto] items-end gap-8 mb-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-4 tracking-[0.35em] uppercase text-[#20A7DB] text-[0.7rem] md:text-[0.9rem] lg:text-[1.1rem]"
          >
            Our Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-80px" }}
            className="font-display text-white font-black text-4xl md:text-6xl leading-none"
          >
            Train with intent.
            <br />
            Built for results.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <NavLink to="/service" className="neon-btn">
            All Services
          </NavLink>
        </motion.div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.slice(0, 4).map((service, i) => {
          const Icon = service.icon;

          return (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              key={service.title}
              className="glass-card h-full group flex flex-col overflow-hidden"
            >
              <div className="h-55 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-col gap-4 p-4 flex-1">
                <Icon className="text-[#20A7DB]" />

                <h3 className="font-display text-white font-bold text-2xl">
                  {service.title}
                </h3>

                <p className="text-sm text-white/55 leading-relaxed flex-1">
                  {service.description}
                </p>

                <NavLink
                  to={service.link}
                  className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-white/40 transition group-hover:text-white"
                >
                  Discover
                  <ArrowRight className="transition-transform group-hover:translate-x-2" />
                </NavLink>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProgramSection;
