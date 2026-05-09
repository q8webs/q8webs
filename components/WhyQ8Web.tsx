"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "تصميم احترافي يليق بالسوق الكويتي والخليجي",
  "كود نظيف وقابل للتطوير",
  "سرعة عالية وتجربة مستخدم ممتازة",
  "دعم وتطوير مستمر",
  "واجهات متجاوبة للموبايل والكمبيوتر",
  "تنفيذ بأسلوب عصري وفاخر"
];

export default function WhyQ8Web() {
  return (
    <section id="why-us" className="py-24 relative bg-[#030303] border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">

        <div className="w-full lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
          >
            ليش تختار <span className="text-primary">Q8Webs؟</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-1" />
                <span className="text-gray-300 font-medium text-lg">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square md:aspect-video lg:aspect-square rounded-3xl bg-gradient-to-tr from-white/5 to-white/10 border border-white/10 p-8 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[80px] rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full"></div>

            <div className="text-center relative z-10">
              <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-4 drop-shadow-2xl">100%</div>
              <div className="text-2xl text-gray-300 font-bold tracking-wider">الجودة والاحترافية</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
