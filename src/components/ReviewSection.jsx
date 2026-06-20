import { motion } from "motion/react";
import React from "react";
import { Star } from "lucide-react";

const ReviewSection = () => {
  const reviews = [
    {
      name: "Marcus Vale",
      initials: "MA",
      years: "3 Years",
      comment:
        "Iron Temple rebuilt me. Strength, presence, mindset — every metric leveled up.",
    },
    {
      name: "Sienna Cole",
      initials: "SI",
      years: "2 Years",
      comment:
        "This isn't a gym. It's a private discipline academy that happens to have iron.",
    },
    {
      name: "Daniel Reyes",
      initials: "DA",
      years: "5 Years",
      comment:
        "The standard here is uncompromising. You either rise to it, or you don't last.",
    },
  ];
  return (
    <section className="bg-black relative min-h-[80vh] overflow-hidden px-6 md:px-8 lg:px-30 py-16 border border-b-white/5">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-4 tracking-[0.35em] uppercase text-[#20A7DB] text-[0.7rem] md:text-[0.9rem] lg:text-[1.1rem]"
        >
          Reviews
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-display text-white font-black text-4xl md:text-5xl leading-[1.05]"
        >
          What Our Members Say
        </motion.h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <div key={review.name} className="glass-card p-8 h-full flex flex-col">
            <div className="flex gap-1 text-white">
                {
                    [...Array(5)].map((_, starIndex)=>(
                        <Star key={starIndex} className="fill-white"/>
                    ))
                }
            </div>
            <div className="mt-6 text-lg leading-relaxed text-white/85">
              {review.comment}
            </div>
            <div className="mt-8 flex items-center gap-3 pt-6 border-t border-white/5">
              <div className="h-11 w-11 rounded-full text-[#20a7db] border border-[#20a7db] font-extrabold flex items-center justify-center">
                {review.initials}
              </div>
              <div>
                <div className="text-sm font-semibold text-white text-glow">
                  {review.name}
                </div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-white/40 mt-0.5">
                  Member ● {review.years}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
