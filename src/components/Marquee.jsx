import { motion } from "framer-motion";
import { Pause } from "lucide-react";
import { section } from "motion/react-client";

const items = [
  "STRENGTH",
  "POWER",
  "ENDURANCE",
  "FITNESS",
  "BODYBUILDING",
  "CARDIO",
  "STRENGTH",
  "POWER",
  "ENDURANCE",
  "FITNESS",
  "BODYBUILDING",
  "CARDIO",
];

export default function Marquee() {
  return (
    <section className="py-6 border border-y-white/30 overflow-hidden bg-black font-bold ">
      <motion.div className="whitespace-nowrap flex gap-12 font-display text-3xl md:text-5xl tracking-tighter"
      style={{ willChange: "transform" }}
      animate={{
        x:['0%','-50%']
      }}
      transition={{
        duration:20,
        repeat:Infinity,
        ease: "linear"
      }}
      >
        {items.map((item, i) => {
          return (
            <span key={`${item}-${i}`} className="flex items-center gap-12 text-white font-bebas">
              <span className="text-[#20a7db]">◆</span>
              {item}
            </span>
          );
        })}
      </motion.div>
    </section>
  );
}
