"use client";

import { motion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "موقع تعريفي للشركات",
    description: "واجهة تعريفية احترافية فاخرة مع أقسام خدمات متطورة وطرق تواصل ذكية.",
    category: "موقع شركات",
    image: "/images/portfolio/corporate.png",
    position: "object-top",
  },
  {
    title: "منصة متجر إلكتروني متكامل",
    description: "تجربة تسوق وشراء سلسة وسريعة مع تكامل كامل مع وسائل الدفع والطلبات.",
    category: "متجر إلكتروني",
    image: "/images/portfolio/ecommerce.png",
    position: "object-center",
  },
  {
    title: "تطبيق حجز وجدولة مواعيد",
    description: "نظام حجز مواعيد وتذاكر ذكي وسريع مع لوحة تحكم ذكية وشاملة للمشرفين.",
    category: "تطبيقات هواتف / SaaS",
    image: "/images/portfolio/booking.png",
    position: "object-center",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4 text-slate-900 leading-tight"
            >
              أعمالنا
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 font-semibold max-w-xl"
            >
              نستعرض بفخر بعضاً من المشاريع الرقمية الفاخرة التي نفذناها لعملائنا بأعلى معايير الدقة والسرعة.
            </motion.p>
          </div>
          
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://wa.me/96555512344"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sky-500 hover:text-sky-600 font-black text-lg transition-colors group shrink-0"
          >
            <span>اطلب مشروعك الخاص</span>
            <ArrowUpLeft className="w-5 h-5 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 aspect-[16/10] md:aspect-[4/3] flex flex-col justify-end p-6 md:p-8 cursor-pointer shadow-[0_10px_35px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.04)] transition-all duration-500"
            >
              {/* Subtle Blue/Cyan Border on Card Hover */}
              <div className="absolute inset-0 border-2 border-sky-500/0 group-hover:border-sky-500/30 transition-colors duration-500 rounded-[2rem] z-20 pointer-events-none" />
              
              {/* Background Image */}
              <div className="absolute inset-0 bg-slate-200">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover ${project.position} transition-transform duration-700 ease-out md:group-hover:scale-105 opacity-90 group-hover:opacity-100`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Lighter Gradient overlay for text readability, blending smoothly */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/30 to-transparent z-10" />

              <div className="relative z-20 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white mb-4 border border-white/20">
                  {project.category}
                </span>
                <h3 className="text-2xl font-black text-white mb-2 drop-shadow-sm">{project.title}</h3>
                <p className="text-slate-200 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
