"use client";

import { motion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "موقع شركة",
    description: "واجهة تعريفية احترافية مع أقسام خدمات وتواصل.",
    category: "Corporate",
    image: "/images/portfolio/corporate.png",
  },
  {
    title: "متجر إلكتروني",
    description: "تجربة شراء سلسة وتصميم مخصص للمنتجات.",
    category: "E-commerce",
    image: "/images/portfolio/ecommerce.png",
  },
  {
    title: "تطبيق حجز",
    description: "نظام حجز ذكي مع لوحة تحكم وإدارة مواعيد.",
    category: "SaaS / App",
    image: "/images/portfolio/booking.png",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              أعمالنا
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400 max-w-xl"
            >
              نستعرض بعضاً من المشاريع التي نفذناها بمعايير عالية لتلبية احتياجات عملائنا.
            </motion.p>
          </div>
          
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://wa.me/96555512344"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-white font-bold text-lg transition-colors group"
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
              className="group relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 aspect-[4/5] flex flex-col justify-end p-8 cursor-pointer"
            >
              {/* Glowing Hover Border */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-500 rounded-[2rem] z-20 pointer-events-none" />
              
              {/* Background Image */}
              <div className="absolute inset-0 bg-[#0a0a0a]">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-60 group-hover:opacity-100"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" />

              <div className="relative z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white mb-4 border border-white/20">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
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
