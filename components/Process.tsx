"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "نسمع فكرتك" },
  { num: "02", title: "نرسم التجربة" },
  { num: "03", title: "نصمم الواجهة" },
  { num: "04", title: "نبرمج النظام" },
  { num: "05", title: "نطلق المشروع" },
  { num: "06", title: "نتابع ونطوّر" },
];

export default function Process() {
  return (
    <section className="py-24 relative bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            طريقة العمل
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            خطوات واضحة ومدروسة لضمان نجاح مشروعك من البداية وحتى الإطلاق.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0" />
          
          {/* Connecting Line Mobile */}
          <div className="md:hidden absolute top-0 right-8 w-[2px] h-full bg-white/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-row md:flex-col items-center md:justify-center gap-6 md:gap-4"
              >
                <div className="w-16 h-16 shrink-0 rounded-full bg-[#0a0a0a] border-2 border-white/10 flex items-center justify-center text-xl font-bold text-primary relative group hover:border-primary hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300">
                  {step.num}
                  {/* Glowing dot */}
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-xl font-bold text-white md:text-center">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
