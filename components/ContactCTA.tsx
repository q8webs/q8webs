"use client";

import { MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      {/* Background soft highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center bg-slate-50 border border-slate-100 p-12 md:p-20 rounded-[2.5rem] shadow-[0_15px_50px_rgba(0,0,0,0.015)]"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 leading-tight">
            خل مشروعك الرقمي <span className="text-sky-500">يبدأ بشكل أقوى</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-semibold leading-relaxed">
            سواء كنت تحتاج موقعاً إلكترونياً، تطبيقاً ذكياً، متجراً متكاملاً، أو نظاماً خاصاً — Q8WEBS جاهزة لتبني لك تجربة رقمية استثنائية.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* WhatsApp CTA Button */}
            <a
              href="https://wa.me/96555512344"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full sm:w-auto justify-center px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_4px_14px_rgba(14,165,233,0.3)]"
            >
              <MessageCircle size={24} />
              <span>واتساب: 55512344</span>
            </a>
            
            {/* Email CTA Button */}
            <a
              href="mailto:info@q8webs.com"
              className="flex items-center gap-3 w-full sm:w-auto justify-center px-8 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_4px_14px_rgba(0,0,0,0.02)]"
            >
              <Mail size={24} />
              <span dir="ltr">info@q8webs.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
