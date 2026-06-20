import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      label: "ENTRANCE",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop",
      size: "col-span-1 md:row-span-2 row-span-1",
    },
    {
      id: 2,
      label: "INTERIOR",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop",
      size: "col-span-1 row-span-1",
    },
    {
      id: 3,
      label: "EVENTS",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop",
      size: "col-span-1 row-span-1",
    },
    {
      id: 4,
      label: "INTERIOR",
      image:
        "https://images.unsplash.com/photo-1518602164578-cd0074062767?w=400&h=300&fit=crop",
      size: "col-span-1 row-span-1",
    },
    {
      id: 5,
      label: "TRAINING",
      image:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&h=300&fit=crop",
      size: "col-span-1 row-span-1",
    },
    {
      id: 6,
      label: "EQUIPMENT",
      image:
        "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=600&h=300&fit=crop",
      size: "col-span-1 md:col-span-2 row-span-1",
    },
    {
      id: 7,
      label: "CARDIO",
      image:
        "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=400&h=300&fit=crop",
      size: "col-span-1 row-span-1",
    },
    {
      id: 8,
      label: "WEIGHTS",
      image:
        "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=400&h=300&fit=crop",
      size: "col-span-1 row-span-1",
    },
    {
      id: 9,
      label: "TRAINING",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop",
      size: "col-span-1 md:col-span-2 row-span-1",
    },
    {
      id: 10,
      label: "EQUIPMENT",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=400&fit=crop",
      size: "col-span-1 md:col-span-2 row-span-1",
    },
  ];

  return (
    <>
      {" "}
      <section className="bg-[#101010] relative min-h-svh overflow-hidden px-6 md:px-8 lg:px-30 py-30 border-b border-white/5">
        <div className="text-center mb-14 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-80px" }}
            className="uppercase tracking-[0.35em] text-[#20a7db] text-xs font-medium"
          >
            Gallery
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mt-4 text-white text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
          >
            Our Moments
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mt-4 text-white/60 max-w-xl mx-auto"
          >
            A glimpse into our training space, energy, and community.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 auto-rows-[280px] md:auto-rows-[340px] lg:auto-rows-[420px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.size} group relative overflow-hidden rounded-lg border border-white/10 hover:border-white/50 transition-all duration-300 cursor-pointer bg-gray-900`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.label}
                onClick={() => setSelectedImage(item.id)}
                className="w-full h-full object-cover hover:brightness-110 transition-all duration-500 group-hover:scale-110"
              />

              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                <p className="text-white font-semibold text-sm md:text-base tracking-wider uppercase group-hover:text-white transition-colors duration-300">
                  {item.label}
                </p>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>
      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-white hover:text-white transition-colors z-50"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={() => {
              const currentIndex = galleryItems.findIndex(
                (item) => item.id === selectedImage,
              );
              const prevIndex =
                currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
              setSelectedImage(galleryItems[prevIndex].id);
            }}
            className="absolute left-2 md:left-4 lg:left-20 top-1/2 transform -translate-y-1/2 text-white hover:text-white hover:scale-110 transition-all p-1.5 md:p-2.5 lg:p-4 bg-black/2 backdrop-blur-sm rounded-md hover:bg-black/5"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
          </button>

          {/* Image container */}
          <div className="max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-7xl max-h-[90vh] flex items-center justify-center px-4 md:px-0">
            <img
              src={
                galleryItems.find((item) => item.id === selectedImage)?.image
              }
              alt="Full view"
              className="w-full h-auto max-h-[80vh] md:max-h-[92vh] lg:max-h-[96vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>

          {/* Next button */}
          <button
            onClick={() => {
              const currentIndex = galleryItems.findIndex(
                (item) => item.id === selectedImage,
              );
              const nextIndex =
                currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1;
              setSelectedImage(galleryItems[nextIndex].id);
            }}
            className="absolute right-2 md:right-4 lg:right-20 top-1/2 transform -translate-y-1/2 text-white hover:text-white hover:scale-110 transition-all p-1.5 md:p-2.5 lg:p-4 bg-black/2 backdrop-blur-sm rounded-md hover:bg-black/5"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold bg-black/50 px-4 py-2 rounded-full">
            {galleryItems.findIndex((item) => item.id === selectedImage) + 1} /{" "}
            {galleryItems.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
