import React from "react";
import trainer1 from '../assets/About/trainer1.jpg'
import trainer2 from '../assets/About/trainer2.jpg'
import trainer3 from '../assets/About/trainer3.jpg'
import { motion } from "motion/react";

const TrainersSection = () => {
  const trainersData = [
    {
      id: 1,
      name: "Adrian Voss",
      role: "Head Strength Coach",
      experience: "12 yrs experience",
      specialties: "Powerlifting - Hypertrophy",
      imageUrl:trainer1,
    },
    {
      id: 2,
      name: "Mira Halden",
      role: "Performance Director",
      experience: "9 yrs experience",
      specialties: "Conditioning - Mobility",
      imageUrl:trainer2
    },
    {
      id: 3,
      name: "Kasey Brandt",
      role: "Bodybuilding Coach",
      experience: "15 yrs experience",
      specialties: "Prep - Nutrition",
      imageUrl:trainer3
    },
  ];
  return (
    <section className="bg-black relative min-h-svh overflow-hidden px-6 py-16 md:px-8 lg:px-30 border border-b-white/5">
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-4 tracking-[0.35em] uppercase text-[#20a7db] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
        >
          Our Trainers
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-display text-white font-bold text-3xl md:text-4xl"
        >
          Expert coaches.
          <br />
          Personalized guidance.
          <br />
          Real results.
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-md mx-auto sm:max-w-none py-12">
        {trainersData.map((trainer) => (
          /* Responsive Card Box wrapper */
          <div
            key={trainer.id}
            className="group relative bg-[#141414] rounded-2xl overflow-hidden border border-[#222] shadow-2xl cursor-pointer"
          >
            {/* Responsive aspect ratio container 
                  Ensures the images scale perfectly proportional on mobile vs desktop */}
            <div className="aspect-4/5 sm:h-100 lg:h-115 w-full overflow-hidden relative">
              <img
                src={trainer.imageUrl}
                alt={trainer.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Information Overlay Area */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-linear-to-t from-black/95 via-black/75 to-transparent">
              <h3 className="text-xl text-white sm:text-2xl font-bold tracking-wide mb-1">
                {trainer.name}
              </h3>

              <p className="text-[11px] sm:text-xs text-gray-400 font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                {trainer.role}
              </p>

              {/* Info Footer Grid Meta */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs sm:text-sm text-gray-300">
                <span className="whitespace-nowrap">{trainer.experience}</span>
                <span className="text-gray-600 font-bold hidden xs:inline">
                  •
                </span>
                <span className="text-gray-400 min-w-0 flex-1 truncate">
                  {trainer.specialties}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrainersSection;
