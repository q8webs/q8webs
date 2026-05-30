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
    <section className="py-24 relative bg-[#f8fafc] overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight"
          >
            طريقة العمل
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 font-semibold"
          >
            خطوات واضحة ومدروسة لضمان نجاح مشروعك من البداية وحتى الإطلاق.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -translate-y-1/2 z-0" />
          
          {/* Connecting Line Mobile */}
          <div className="md:hidden absolute top-0 right-8 w-[2px] h-full bg-slate-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex flex-row md:flex-col items-center md:justify-center gap-6 md:gap-4"
              >
                <div className="w-16 h-16 shrink-0 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-xl font-bold text-sky-500 relative group hover:border-sky-500 hover:text-sky-600 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] transition-all duration-300 font-sans">
                  {step.num}
                  {/* Glowing dot */}
                  <div className="absolute inset-0 bg-sky-500/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-lg font-black text-slate-800 md:text-center leading-relaxed">
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
