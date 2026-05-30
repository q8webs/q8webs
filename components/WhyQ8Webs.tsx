"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "تصميم احترافي يليق بالسوق الكويتي والخليجي",
  "كود نظيف وقابل للتطوير والزيادة",
  "سرعة تحميل عالية وتجربة مستخدم ممتازة",
  "دعم فني وتطوير مستمر للمشاريع",
  "واجهات متجاوبة بالكامل للموبايل والكمبيوتر",
  "تنفيذ بأسلوب عصري وفاخر وبسيط"
];

export default function WhyQ8Webs() {
  return (
    <section id="why-us" className="py-24 relative bg-white border-y border-slate-100">
      {/* Background soft highlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-sky-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">

        {/* Text column */}
        <div className="w-full lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-8 text-slate-900 leading-tight"
          >
            لماذا تختار <span className="text-sky-500 font-black">Q8WEBS؟</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-start gap-3.5"
              >
                <CheckCircle2 className="text-sky-500 w-6 h-6 shrink-0 mt-0.5" />
                <span className="text-slate-600 font-bold text-base sm:text-lg leading-relaxed">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 100% Quality badge column */}
        <div className="w-full lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square md:aspect-video lg:aspect-square rounded-[2rem] bg-gradient-to-tr from-slate-50 to-white border border-slate-100 p-8 flex items-center justify-center relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.02)]"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/10 blur-[80px] rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full"></div>

            <div className="text-center relative z-10">
              <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-blue-600 mb-4 drop-shadow-sm font-sans">100%</div>
              <div className="text-2xl text-slate-800 font-black tracking-wider">الجودة والاحترافية</div>
              <p className="text-sm text-slate-500 font-medium mt-2">نضمن تسليم مشاريع متكاملة تليق بتطلعاتك</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
