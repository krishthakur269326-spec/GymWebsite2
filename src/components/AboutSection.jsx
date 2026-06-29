import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const AboutSection = () => {
  const stats = [
    {
      stat: "1000+",
      label: "ACTIVE MEMBERS",
    },
    {
      stat: "48",
      label: "ELITE TRAINERS",
    },
    {
      stat: "150+",
      label: "Success Stories",
    },
    {
      stat: "200+",
      label: "Gym Equipment",
    },
  ];

  return (
    <section className="bg-black relative min-h-[80vh] overflow-hidden px-6 md:px-8 lg:px-30 py-16 border border-b-white/5">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-full max-w-4xl mx-auto aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/29ix5ABj8RA?autoplay=1&mute=1&loop=1&playlist=29ix5ABj8RA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-80px" }}>
            <div className="mb-4 tracking-[0.35em] uppercase text-[#20A7DB] text-[0.7rem] md:text-[0.9rem] lg:text-[1.1rem]">
              About Platinum Fitness
            </div>
            <h2 className="font-display text-white font-black text-4xl md:text-6xl lg:text-7xl leading-none mb-4">
              Building Strength.
              <br />
              Building Confidence.
            </h2>
            <div>
              <p className="mb-4 text-[#aeaeae] text-[1rem] md:text-[1.2rem]">
                At Platinum Fitness, we believe fitness is more than just a
                workout — it's a lifestyle. Our mission is to help you achieve
                your goals with world-class equipment, expert guidance and
                unmatched support.
              </p>
              <p className="mb-4 text-[#aeaeae] text-[1rem] md:text-[1.2rem]">
                Platinum Fitness combines professional training, modern
                facilities, and personalized support. We provide the tools,
                guidance, and motivation you need to become the strongest version
                of yourself.
              </p>
            </div>
          </motion.div>
          <div className="mb-4 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 max-w-4xl rounded-2xl overflow-hidden">
            {stats.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-80px" }}
                key={i} className="bg-black/60 backdrop-blur-md p-5 md:p-6"
                style={{ willChange: "transform, opacity" }}>
                <h1 className="font-display text-white font-black text-3xl md:text-5xl text-glow">
                  {item.stat}
                </h1>
                <p className="mt-2 text-[10px] tracking-[0.25em] uppercase text-white/50">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <NavLink to="/membership" className="neon-btn">
              Join Us Now <ArrowRight />
            </NavLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
