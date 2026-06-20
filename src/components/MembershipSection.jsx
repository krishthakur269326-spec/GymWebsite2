import React from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { motion } from "motion/react";

const MembershipSection = () => {
  const navigate = useNavigate();

  const membershipPlans = [
    {
      id: 1,
      tier: "STARTER",
      name: "1 Month",
      price: "4,000",
      popular: false,
      bestValue: false,
      features: [
        "Unlimited gym access",
        "Locker & shower",
        "Open floor equipment",
        "Member app",
      ],
      buttonText: "Choose Plan",
    },
    {
      id: 2,
      tier: "POPULAR",
      name: "3 Months",
      price: "10,500",
      popular: true,
      bestValue: false,
      features: [
        "Everything in 1 Month",
        "Workout guidance",
        "Nutrition consultation",
        "Progress tracking",
        "Priority support",
      ],
      buttonText: "Choose Plan",
    },
    {
      id: 3,
      tier: "COMMITTED",
      name: "6 Months",
      price: "19,000",
      popular: false,
      bestValue: false,
      features: [
        "Everything in 3 Months",
        "Body composition scans",
        "Recovery zone access",
        "Monthly assessment",
        "Priority booking",
      ],
      buttonText: "Choose Plan",
    },
    {
      id: 4,
      tier: "BEST DEAL",
      name: "1 Year",
      price: "34,999",
      popular: false,
      bestValue: true,
      features: [
        "Everything in 6 Months",
        "Maximum savings",
        "VIP benefits",
        "Dedicated coach",
        "Quarterly review",
      ],
      buttonText: "Choose Plan",
    },
  ];

  return (
    <section className="bg-black py-30 px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-80px" }}
            className="uppercase tracking-[0.35em] text-[#20a7db] text-xs font-medium"
          >
            Membership Plans
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mt-4 text-white text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-glow"
          >
            Choose Your Membership
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mt-4 text-white/60 max-w-xl mx-auto"
          >
            Flexible plans designed to fit your goals and commitment level.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {membershipPlans.map((plan, i) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              key={plan.id}
              style={{ willChange: "transform, opacity" }}
              className={`relative rounded-2xl border p-6 flex flex-col min-h-130 transition-all duration-300 ${plan.popular
                ? "border-white/30 bg-linear-to-b from-white/15 to-black/5"
                : plan.bestValue
                  ? "border-[#20a7db]/40 bg-linear-to-b from-[#20a7db]/10 to-black/5"
                  : "border-white/10 bg-white/2 hover:border-white/20"
                }`}
            >
              {/* Badge */}
              {(plan.popular || plan.bestValue) && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                    className={`px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase ${plan.popular
                      ? "bg-white text-black"
                      : "bg-[#20a7db] text-black"
                      }`}
                  >
                    {plan.popular ? "Most Chosen" : "Best Value"}
                  </span>
                </div>
              )}

              {/* Tier */}
              <p className="text-white/50 text-[11px] tracking-[0.3em] uppercase font-semibold">
                {plan.tier}
              </p>

              {/* Name */}
              <h3 className="text-white font-black text-4xl mt-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-6 mb-8 flex items-end">
                <span className="text-white/40 text-sm mr-1">Rs</span>

                <span
                  className={`text-white font-black text-[3.5rem] leading-none ${plan.popular
                    ? "drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
                    : ""
                    }`}
                >
                  {plan.price}
                </span>

                <span className="text-white/40 text-sm ml-2 mb-1">/ plan</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 flex-1">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white/75 text-sm"
                  >
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-white" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                onClick={() => navigate("/contact")}
                className={`mt-8 w-full py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${plan.popular
                  ? "bg-white text-black hover:bg-black hover:text-white hover:border hover:border-white"
                  : plan.bestValue
                    ? "bg-[#20a7db] text-black hover:bg-white"
                    : "border border-white/40 text-white hover:bg-white hover:text-black"
                  }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
