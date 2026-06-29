import { Dumbbell } from "lucide-react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import trainer1 from "../assets/About/trainerhome.webp";

const CertifiedTrainer = () => {
    return (
        <section className="bg-black relative min-h-svh overflow-hidden px-6 md:px-8 lg:px-30 py-16 border border-b-white/5">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-80px" }}
                className="grid md:grid-cols-[1fr_auto] items-end gap-8 mb-16">
                <div>
                    <div className="mb-4 tracking-[0.35em] uppercase text-[#20A7DB] text-[0.7rem] md:text-[0.9rem] lg:text-[1.1rem]">Our Experts</div>
                    <h2 className="font-display text-white font-black text-4xl md:text-6xl leading-none">Certified Professional.<br /> Proven Results.</h2>
                </div>
                <div>
                    <NavLink to="/about" className="neon-btn">All Trainers</NavLink>
                </div>
            </motion.div>

            <div>
                <div className="relative max-w-sm mx-auto md:max-w-none md:flex md:items-center md:gap-16">
                    {/* Image Container with the animated badge */}
                    <div className="relative w-full md:w-[40%] shrink-0 aspect-[3/4] md:aspect-[4/5] rounded-[2rem] overflow-visible">
                        <img
                            src={trainer1}
                            alt="Trainer"
                            className="w-full h-full object-cover rounded-[2rem] border border-white/10"
                        />

                        {/* The Rotating Badge */}
                        <div className="absolute -bottom-10 -right-10 md:-bottom-16 md:-right-16 w-40 h-40 md:w-48 md:h-48 z-10 bg-[#0a0a0a] rounded-full p-2 flex items-center justify-center">
                            {/* Text Rotation */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <svg viewBox="0 0 200 200" className="w-full h-full">
                                    <path
                                        id="circlePath"
                                        d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                                        fill="none"
                                    />
                                    <text className="text-[17px] font-bold uppercase tracking-[0.1em] fill-white">
                                        <textPath href="#circlePath" startOffset="0%">
                                            Certified Trainer •
                                        </textPath>
                                        <textPath href="#circlePath" startOffset="50%">
                                            Certified Trainer •
                                        </textPath>
                                    </text>
                                </svg>
                            </motion.div>

                            {/* Dumbbell Rotation (Opposite Direction) */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                            >
                                <Dumbbell className="w-12 h-12 md:w-16 md:h-16 text-white" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Placeholder Text content for the trainer */}
                    <div className="w-full md:flex-1 mt-16 md:mt-0 space-y-6">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-[#20a7db]/30 bg-[#20a7db]/10 text-[#20a7db] text-sm font-semibold tracking-wider uppercase">
                            Head Coach
                        </div>
                        <h3 className="font-display text-white text-4xl md:text-5xl font-black">Chris Bumstead</h3>
                        <p className="text-white/60 leading-relaxed text-lg">
                            With over 12 years of experience in powerlifting and hypertrophy, Chris leads our training programs with precision and passion. He believes in building not just muscle, but unshakeable confidence.
                        </p>
                        <div className="pt-4 flex gap-4">
                            <NavLink to="/contact" className="neon-btn">Book Session</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertifiedTrainer;