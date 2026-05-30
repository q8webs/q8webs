"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Logo from "./Logo";

export default function Hero() {
  const serviceCards = [
    {
      title: "مواقع إلكترونية",
      description: "تصميم وتطوير مواقع احترافية تتناسب مع احتياجاتك",
      icon: Globe,
      color: "from-sky-400 to-sky-600",
    },
    {
      title: "تطبيقات الجوال",
      description: "نطور تطبيقات iOS و Android بأفضل جودة وأداء",
      icon: Smartphone,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "متاجر إلكترونية",
      description: "تبني متاجر إلكترونية متكاملة آمنة وسهلة الاستخدام",
      icon: ShoppingBag,
      color: "from-cyan-400 to-blue-500",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between items-center bg-white overflow-hidden"
    >
      {/* Responsive Official Background Images */}
      {/* Desktop Background Image - only loads on md and larger screens */}
      <div className="hidden md:block absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/background-desktop.png"
          alt="Q8WEBS Desktop Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Premium overlay backdrop */}
        <div className="absolute inset-0 bg-white/65" />
      </div>

      {/* Mobile Background Image - only loads on screens smaller than md */}
      <div className="block md:hidden absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/background-mobile.png"
          alt="Q8WEBS Mobile Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Premium overlay backdrop */}
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Main Brand Content Overlay */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center flex-grow text-center mt-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <Logo size="xl" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight max-w-3xl"
        >
          نحو مستقبل رقمي <span className="text-sky-500">أفضل</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-2xl mb-10 font-semibold leading-relaxed"
        >
          نبني حلولاً رقمية متكاملة تساعد مشروعك على النمو
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md"
        >
          <a
            href="https://wa.me/96555512344"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_6px_20px_rgba(14,165,233,0.35)] text-center"
          >
            تواصل معنا
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-lg transition-all hover:scale-105 active:scale-95 text-center"
          >
            شاهد خدماتنا
          </a>
        </motion.div>
      </div>

      {/* Modern Mockup Service Cards aligned horizontally at bottom */}
      <div className="w-full container mx-auto px-6 md:px-12 relative z-10 mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {serviceCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 flex items-center md:flex-col md:text-center gap-4 text-right"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shrink-0 shadow-md`}>
                <card.icon className="text-white w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex flex-col md:items-center">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
