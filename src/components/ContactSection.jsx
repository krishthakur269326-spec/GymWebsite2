import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";

import { MapPin, Mail, Phone, CheckCircle2, XCircle } from "lucide-react";

import { FaInstagram, FaYoutube, FaTiktok, FaFacebookF } from "react-icons/fa";

const contactInfo = [
  {
    Icon: MapPin,
    title: "Address",
    value: "Platinum Fitness Gym, Samakhusi, Kathmandu, Nepal",
  },
  {
    Icon: Mail,
    title: "Email",
    value: "info@platinumfitness.com",
  },
  {
    Icon: Phone,
    title: "Phone",
    value: "+977 98XXXXXXXX",
  },
];

const socialLinks = [
  {
    Icon: FaInstagram,
    href: "https://instagram.com",
  },
  {
    Icon: FaFacebookF,
    href: "https://facebook.com",
  },
  {
    Icon: FaTiktok,
    href: "https://tiktok.com",
  },
  {
    Icon: FaYoutube,
    href: "https://youtube.com",
  },
];

const ContactSection = () => {
  const form = useRef(null);

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const contactForm = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setNotification({
        type: "success",
        message: "Message sent successfully!",
      });

      form.current.reset();
    } catch (error) {
      console.error(error);

      setNotification({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);

      setTimeout(() => {
        setNotification(null);
      }, 5000);
    }
  };

  return (
    <section className="bg-[#101010] relative min-h-svh overflow-hidden px-6 md:px-8 lg:px-30 py-16 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Contact Card */}
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/3 backdrop-blur-2xl">
          {/* Blue Glow */}
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#20a7db]/20 blur-[120px]" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#20a7db]/10 blur-[120px]" />

          {/* Noise */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "4px 4px",
            }}
          />

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className="mb-14 text-5xl md:text-6xl font-bold text-white"
            >
              Get in touch.
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Side */}
              <div className="space-y-10">
                {contactInfo.map(({ Icon, title, value }, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    key={index} className="flex gap-5"
                  >
                    <Icon size={24} className="text-[#20a7db] mt-1" />

                    <div>
                      <h3 className="mb-2 text-2xl font-semibold text-white">
                        {title}
                      </h3>

                      <p className="text-white/60">{value}</p>
                    </div>
                  </motion.div>
                ))}

                <div>
                  <h3 className="mb-5 text-2xl font-semibold text-white">
                    Follow Us
                  </h3>

                  <div className="flex gap-4">
                    {socialLinks.map(({ Icon, href }, index) => (
                      <a
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-[#20a7db]/50 hover:text-[#20a7db]"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side Form */}
              <motion.form 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, margin: "-80px" }}
                ref={form} onSubmit={contactForm} className="space-y-5">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 backdrop-blur-md outline-none focus:border-[#20a7db]"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 backdrop-blur-md outline-none focus:border-[#20a7db]"
                />

                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 backdrop-blur-md outline-none focus:border-[#20a7db]"
                />

                <textarea
                  rows={6}
                  name="message"
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 backdrop-blur-md outline-none focus:border-[#20a7db]"
                />

                {/* Notification */}
                {notification && (
                  <div
                    className={`z-50 flex items-center gap-3 rounded-2xl border px-5 py-4 backdrop-blur-xl shadow-2xl ${notification.type === "success"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                      : "bg-red-500/10 border-red-500/30 text-red-400"
                      }`}
                  >
                    {notification.type === "success" ? (
                      <CheckCircle2 size={20} />
                    ) : (
                      <XCircle size={20} />
                    )}

                    <p>{notification.message}</p>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-[#20a7db] px-8 py-4 font-medium text-white shadow-[0_0_40px_rgba(32,167,219,0.35)] transition-all duration-300 hover:scale-105 hover:bg-[#1a96c5] disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </motion.form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 overflow-hidden rounded-4xl border border-white/10 bg-white/3 backdrop-blur-2xl">
          <iframe
            title="Platinum Fitness Gym"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.411167949061!2d85.31791679999999!3d27.735461299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19003b00fdd7%3A0x229a05f5cc846e89!2sPlatinum%20Fitness%20%26%20Spa!5e0!3m2!1sen!2snp!4v1781896617367!5m2!1sen!2snp"
            loading="lazy"
            allowFullScreen
            className="h-112.5 w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
