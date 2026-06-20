import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaYoutube, FaTiktok, FaFacebookF } from "react-icons/fa";
import { MdEmail, MdCall, MdLocationPin } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://facebook.com/yourusername",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/yourusername",
    },
    { name: "Tiktok", icon: FaTiktok, url: "https://tiktok.com/yourusername" },
    {
      name: "Youtube",
      icon: FaYoutube,
      url: "https://youtube.com/yourusername",
    },
  ];
  const explore = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Gallery", href: "/gallery" },
    { name: "Membership", href: "/membership" },
  ];

  const policies = [
    { name: "Privacy Policy", href: "/policy" },
    { name: "Terms & Conditions", href: "/policy" },
    { name: "Refund Policy", href: "/policy" },
    { name: "Cookie Policy", href: "/policy" },
  ];

  const info = {
    address: "Samakhusi Chowk",
    district: "Kathmandu District",
    open: "Sun-Friday ● 5AM-9PM",
    email: "gym@example.com",
    number: "+97798########",
  };
  return (
    <footer className="bg-black overflow-hidden px-6 md:px-8 lg:px-16 pt-16 pb-8 border border-b-white/5">
      <div className="grid gap-12 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2 text-2xl lg:text-3xl">
            <span className="text-[#20a7db] drop-shadow-[0_0_6px_#20a7db] pb-1">
              ●
            </span>
            <span className="font-display text-white text-glow font-black tracking-[0.25em] uppercase">
              Platinum Fitness
            </span>
          </div>
          <p className="mt-5 text-sm text-white/55 max-w-sm leading-relaxed">
            A private club of strength, discipline and elite performance. Built
            for the few who refuse to be average.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="h-12 w-12 grid place-items-center rounded-full neon-border hover:bg-white hover:text-black text-white transition"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="mb-4 tracking-[0.35em] uppercase text-[#aeaeae] text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]">
            EXPLORE
          </p>
          <ul className="space-y-3 text-[1rem] text-white/70">
            {explore.map((item, i) => (
              <li key={item.name}>
                <NavLink to={item.href} className="hover:text-white underline">
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 tracking-[0.35em] uppercase text-[#aeaeae] text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]">
            Policy
          </p>
          <ul className="space-y-3 text-[1rem] text-white/70">
            {policies.map((item, i) => (
              <li key={item.name}>
                <NavLink to={item.href} className="hover:text-white underline">
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 tracking-[0.35em] uppercase text-[#aeaeae] text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] flex items-center">
            Visit Us At <MdLocationPin />
          </p>
          <ul className="space-y-3 text-[1rem] text-white/70">
            <li>{info.address}</li>
            <li>{info.district}</li>
            <li>{info.open}</li>
            <li>
              <a
                href={`mailto:${info.email}`}
                className="underline hover:text-white underline-offset-6 flex items-end-safe gap-2"
              >
                <MdEmail />
                {info.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${info.number}`}
                className="underline hover:text-white underline-offset-6 flex items-end-safe gap-2"
              >
                <MdCall />
                {info.number}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6">
        <p className="text-white/30 text-[12px] w-fit mx-auto"
        >—— © 2024 Krish Thakur. All rights reserved. ——</p>
      </div>
    </footer>
  );
};

export default Footer;
