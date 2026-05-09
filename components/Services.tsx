"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, ShoppingCart, LayoutDashboard, Fingerprint, Zap } from "lucide-react";

const services = [
  {
    title: "تصميم مواقع احترافية",
    description: "مواقع سريعة، متجاوبة، ومصممة لتعطي انطباع قوي من أول زيارة.",
    icon: Monitor,
  },
  {
    title: "برمجة تطبيقات",
    description: "تطبيقات مخصصة للأعمال، الحجوزات، الطلبات، والمتاجر.",
    icon: Smartphone,
  },
  {
    title: "متاجر إلكترونية",
    description: "متجر احترافي مع تجربة شراء سهلة وربط بوسائل التواصل والدفع.",
    icon: ShoppingCart,
  },
  {
    title: "لوحات تحكم وأنظمة",
    description: "أنظمة داخلية لإدارة الطلبات، العملاء، المنتجات، والمحتوى.",
    icon: LayoutDashboard,
  },
  {
    title: "هوية رقمية وتجربة مستخدم",
    description: "تصميم واجهات UI/UX تجعل مشروعك واضح وسهل الاستخدام.",
    icon: Fingerprint,
  },
  {
    title: "تحسين وتطوير المواقع",
    description: "نطوّر موقعك الحالي ونحسّن السرعة، الشكل، وتجربة العميل.",
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative z-10 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            خدماتنا
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            نقدم حلول متكاملة ترفع من قيمة علامتك التجارية وتوفر تجربة مستخدم لا تُنسى.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/[0.03] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <service.icon className="text-primary w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
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
