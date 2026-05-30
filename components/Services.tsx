"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, ShoppingCart, LayoutDashboard, Fingerprint, Zap } from "lucide-react";

const services = [
  {
    title: "تصميم مواقع احترافية",
    description: "مواقع سريعة، متجاوبة بالكامل، ومصممة لتعطي انطباعاً قوياً من أول زيارة لعملائك.",
    icon: Monitor,
  },
  {
    title: "برمجة تطبيقات الجوال",
    description: "تطبيقات مخصصة للأعمال، أنظمة الحجوزات، الطلبات، والمتاجر على App Store و Google Play.",
    icon: Smartphone,
  },
  {
    title: "متاجر إلكترونية",
    description: "متجر احترافي متكامل مع تجربة شراء سلسة وسهلة، وربط كامل مع بوابات الدفع المحلية والخليجية.",
    icon: ShoppingCart,
  },
  {
    title: "لوحات تحكم وأنظمة خاصة",
    description: "أنظمة إدارة داخلية مخصصة للطلبات، العملاء، إدارة الموظفين، والعمليات التجارية المختلفة.",
    icon: LayoutDashboard,
  },
  {
    title: "هوية رقمية وتجربة مستخدم UX/UI",
    description: "تصميم واجهات مستخدم عصرية تجعل موقعك أو تطبيقك واضحاً، جميلاً، وسهل التصفح والاستخدام.",
    icon: Fingerprint,
  },
  {
    title: "تحسين وتطوير المواقع الحالية",
    description: "نقوم بتحديث موقعك الحالي وترقية أدائه وسرعته، وتطوير واجهاته لتتواكب مع العصر.",
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative z-10 bg-[#f8fafc]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 text-slate-900 leading-tight"
          >
            خدماتنا
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 font-semibold max-w-2xl mx-auto"
          >
            نقدم حلولاً برمجية ورقمية متكاملة ترفع من قيمة علامتك التجارية وتوفر تجربة مستخدم لا تُنسى.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white border border-slate-100 p-8 rounded-[2rem] hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] transition-all duration-300 overflow-hidden"
            >
              {/* Subtle background glow on card hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[2rem]" />
              
              <div className="relative z-10">
                {/* Micro-animated icon container */}
                <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-sky-500 group-hover:border-sky-500 transition-all duration-300">
                  <service.icon className="text-sky-500 w-7 h-7 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
