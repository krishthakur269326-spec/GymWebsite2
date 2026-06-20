import {
  Dumbbell,
  Coffee,
  Bike,
  Flame,
  Waves,
  Apple,
  UserRound,
  Activity,
  Scissors,
  Thermometer,
  Trophy,
  Scale,
  Flower2,
  Music4,
} from "lucide-react";

import bodybuilding from "../assets/services/bodybuilding.webp";
import cafe from "../assets/services/cafe.webp";
import cardio from "../assets/services/cardio.webp";
import crossfit from "../assets/services/crossfit.webp";
import jacuzzi from "../assets/services/jacuzzi.webp";
import nutrition from "../assets/services/nutrition.webp";
import personalCoach from "../assets/services/personal-coach.webp";
import resistance from "../assets/services/resistance.webp";
import saloon from "../assets/services/saloon.webp";
import sauna from "../assets/services/sauna.webp";
import strength from "../assets/services/strength.webp";
import weightloss from "../assets/services/weightloss.webp";
import yoga from "../assets/services/yoga.webp";
import zumba from "../assets/services/zumba.webp";

export const services = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description:
      "Develop raw power and functional strength with specialized programs.",
    image: strength,
    link: "/service",
  },
  {
    icon: Trophy,
    title: "Bodybuilding",
    description:
      "Build muscle mass and sculpt your physique with expert guidance.",
    image: bodybuilding,
    link: "/service",
  },
  {
    icon: Flame,
    title: "Weight Loss Programs",
    description:
      "Structured training and nutrition plans to achieve sustainable results.",
    image: weightloss,
    link: "/service",
  },
  {
    icon: UserRound,
    title: "Personal Coaching",
    description:
      "One-on-one coaching tailored to your goals and fitness level.",
    image: personalCoach,
    link: "/service",
  },
  {
    icon: Coffee,
    title: "Fitness Café",
    description:
      "Refuel with healthy meals, protein shakes, and beverages.",
    image: cafe,
    link: "/service",
  },
  {
    icon: Bike,
    title: "Cardio Training",
    description:
      "Improve endurance and cardiovascular health with modern equipment.",
    image: cardio,
    link: "/service",
  },
  {
    icon: Scale,
    title: "CrossFit",
    description:
      "High-intensity functional workouts that challenge your limits.",
    image: crossfit,
    link: "/service",
  },
  {
    icon: Waves,
    title: "Jacuzzi",
    description:
      "Relax your muscles and recover after intense training sessions.",
    image: jacuzzi,
    link: "/service",
  },
  {
    icon: Apple,
    title: "Nutrition Guidance",
    description:
      "Get personalized nutrition support to maximize your results.",
    image: nutrition,
    link: "/service",
  },
  {
    icon: Activity,
    title: "Resistance Training",
    description:
      "Increase strength and endurance with progressive resistance workouts.",
    image: resistance,
    link: "/service",
  },
  {
    icon: Scissors,
    title: "Salon & Grooming",
    description:
      "Professional grooming and self-care services under one roof.",
    image: saloon,
    link: "/service",
  },
  {
    icon: Thermometer,
    title: "Sauna",
    description:
      "Enhance recovery, circulation, and relaxation after your workout.",
    image: sauna,
    link: "/service",
  },
  {
    icon: Flower2,
    title: "Yoga",
    description:
      "Improve flexibility, mobility, balance, and mental well-being.",
    image: yoga,
    link: "/service",
  },
  {
    icon: Music4,
    title: "Zumba",
    description:
      "Fun, energetic dance workouts that make fitness enjoyable.",
    image: zumba,
    link: "/service",
  },
];