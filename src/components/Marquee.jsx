import { motion } from "framer-motion";
import { Pause } from "lucide-react";
import { section } from "motion/react-client";

const items = [
  "Strength Training",
  "Personal Coach",
  "Free Parking",
  "Nutrition Plans",
  "Bodybuilding",
  "Cafe",
  "Cardio",
  "CrossFit",
  "Jacuzzi",
  "Resistance Training",
  "Saloon",
  "Sauna",
  "Weight Loss",
  "Yoga",
  "Zumba",
];

export default function Marquee() {
  return (
    <section className="py-4 overflow-hidden bg-[#20a7db]">
      <motion.div className="whitespace-nowrap flex gap-12 font-display text-2xl md:text-4xl tracking-tighter"
        style={{ willChange: "transform" }}
        animate={{
          x: ['0%', '-50%']
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {items.map((item, i) => {
          return (
            <span key={`${item}-${i}`} className="flex items-center gap-12 text-white font-bebas">
              <span className="text-white/60">◆</span>
              {item}
            </span>
          );
        })}
      </motion.div>
    </section>
  );
}
