import React from "react";
import {
  ShieldCheck,
  Sparkles,
  Apple,
  HeartHandshake,
  Users,
  Clock3,
} from "lucide-react";
import img from "../assets/gymfloor.webp";
import { motion } from "motion/react";

const WhyUsSection = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Elite Trainers",
      description: "Hand-picked coaches with championship pedigree.",
    },
    {
      icon: Sparkles,
      title: "Premium Equipment",
      description: "Top-tier machines and free weights for peak performance.",
    },
    {
      icon: Apple,
      title: "Nutrition Guidance",
      description: "Customized nutrition plans tailored to your goals.",
    },
    {
      icon: HeartHandshake,
      title: "Recovery Zone",
      description: "Recovery facilities to help you perform at your best.",
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "Small, focused sessions with expert instruction.",
    },
    {
      icon: Clock3,
      title: "24/7 Access",
      description: "Train anytime with round-the-clock gym access.",
    },
  ];
  return (
    <section className="bg-[#101010] relative min-h-[80vh] overflow-hidden px-6 md:px-8 lg:px-30 py-16 border border-b-white/5">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={img}
            alt=""
            loading="lazy"
            className="rounded-2xl border border-white/10"
          />
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl">
            <h1 className="font-display text-white font-black text-3xl text-glow">
              98%
            </h1>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/50 mt-1">
              Member Retention
            </p>
          </div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-80px" }}>
            <p className="mb-4 tracking-[0.35em] uppercase text-[#20A7DB] text-[0.7rem] md:text-[0.9rem] lg:text-[1.1rem]"
            >
              Why Platinum Fitness
            </p>
            <h2 className="font-display text-white font-black text-4xl md:text-5xl leading-[1.05]"
            >
              Elite Coaching. <br />
              Premium Equipment. <br />
              Extraordinary Results.
            </h2>
          </motion.div>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div className="flex gap-4"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  key={i}>
                  <div className="h-10 w-10 shrink-0 grid place-items-center text-[#20a7db] rounded-full neon-border">
                    <Icon />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{feature.title}</div>
                    <div className="text-sm text-white/55 mt-1">
                      {feature.description}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
