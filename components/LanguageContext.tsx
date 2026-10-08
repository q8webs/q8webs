"use client";

import React, { createContext, useContext, useSyncExternalStore, useEffect } from "react";

export type Language = "ar" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

export const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.services": "خدماتنا",
    "nav.portfolio": "أعمالنا",
    "nav.whyUs": "لماذا Q8Webs",
    "nav.process": "طريقة العمل",
    "nav.contact": "تواصل معنا",
    "nav.cta": "تواصل معنا",
    "nav.langSwitch": "English",

    // Hero
    "hero.badge": "استوديو هندسة وتصميم رقمي فاخر • الكويت والخليج",
    "hero.title1": "نبني تجارب رقمية",
    "hero.titleHighlight": "استثنائية",
    "hero.title2": "تليق بمكانة علامتك",
    "hero.desc": "نصمم ونطوّر مواقع إلكترونية، تطبيقات جوال فائقة السرعة، ومتاجر متكاملة تجمع بين الفخامة الجمالية وأعلى معايير الهندسة البرمجية.",
    "hero.ctaPrimary": "ابدأ مشروعك عبر واتساب",
    "hero.ctaSecondary": "استكشف أعمالنا المختارة",
    "hero.liveStatus": "متاحون للمشاريع الجديدة",
    "hero.metricProjects": "مشاريع منجزة",
    "hero.metricPerformance": "معدل سرعة الأداء",
    "hero.metricSatisfaction": "رضا الشركاء والعملاء",
    "hero.locationBadge": "الكويت: 29.3759° N, 47.9774° E",

    // Marquee
    "marquee.item1": "مواقع فائقة السرعة (Next.js & React)",
    "marquee.item2": "تطبيقات جوال تفاعلية (iOS & Android)",
    "marquee.item3": "متاجر إلكترونية متكاملة مع KNET وبوابات الدفع",
    "marquee.item4": "لوحات تحكم وأنظمة سحابية مخصصة (SaaS)",
    "marquee.item5": "واجهات وتجارب مستخدم راقية (UI/UX Design)",

    // Portfolio
    "portfolio.badge": "سجل الأعمال الاستثنائي",
    "portfolio.title": "أعمال مختارة صنعت لتلهم وتتفوق",
    "portfolio.desc": "نستعرض نماذج حية لمشاريع حقيقية نفذناها لعملائنا في الكويت والخليج، صممت بأدق التفاصيل وأعلى درجات الموثوقية.",
    "portfolio.requestCustom": "هل لديك فكرة مشروع؟",
    "portfolio.viewProject": "تفاصيل المشروع",
    "portfolio.deliverables": "المخرجات والتقنيات:",
    "portfolio.impact": "الأثر والنتائج:",
    
    // Portfolio Items
    "project.corporate.client": "أطياب نقوة للعطور الفاخرة",
    "project.corporate.title": "منصة التجارة الإلكترونية وتجربة العطور الملكية",
    "project.corporate.category": "متجر إلكتروني فاخر & هوية رقمية",
    "project.corporate.desc": "تصميم وتطوير متجر عطور وبخور فاخر يعكس الفخامة الخليجية الأصيلة، مع تجربة استعراض حسية غامرة للمنتجات وشراء فوري فائق السلاسة.",
    "project.corporate.impact": "نمو بنسبة 180% في الطلبات عبر الجوال وسرعة تحميل أقل من ثانية واحدة.",

    "project.ecommerce.client": "مبرة البحارنة الخيرية",
    "project.ecommerce.title": "بوابة التبرعات الرقمية المتكاملة مع شبكة KNET",
    "project.ecommerce.category": "منصة تبرعات ومشاريع خيرية",
    "project.ecommerce.desc": "منصة متطورة لإدارة المشاريع الخيرية وجمع التبرعات بسلاسة وأمان تام، مربوطة لحظياً ببوابة كي نت (KNET) والبطاقات الائتمانية مع لوحة تحكم فورية.",
    "project.ecommerce.impact": "معالجة آلاف التبرعات بثبات 100% وبدون أي انقطاع أثناء مواسم الذروة.",

    "project.booking.client": "برو تاش لحماية وتلميع السيارات",
    "project.booking.title": "نظام ERP سحابي متكامل ولوحة تحكم العمليات والحجوزات",
    "project.booking.category": "تطبيق ويب سحابي (SaaS) & نظام إدارة",
    "project.booking.desc": "منظومة إدارية شاملة لمتابعة إيرادات الورشة، الحجوزات اليومية، بطاقات الضمان الرقمية، وتتبع عمليات الخدمة عبر الموبايل وسطح المكتب بالدينار الكويتي (KWD).",
    "project.booking.impact": "تقليص زمن إدخال وتتبع الفواتير بنسبة 65% مع أتمتة كاملة للتنبيهات.",

    // Services
    "services.badge": "مجالات الاختصاص",
    "services.title": "حلول برمجية وهندسية متكاملة",
    "services.desc": "نجمع بين الابتكار البرمجي والذوق الفني الراقي لنبني أصولاً رقمية تدوم وتنمو مع أعمالك.",
    
    "service.1.title": "تصميم وتطوير المواقع الفاخرة",
    "service.1.desc": "مواقع مؤسسية وحملات تعريفية ذات تأثير بصري استثنائي، مبنية بأحدث تقنيات الويب العالمية مع معايير SEO صارمة وسرعة فائقة.",
    "service.1.feature": "Next.js • React • Tailwind • Ultra Fast",

    "service.2.title": "تطوير تطبيقات الجوال المخصصة",
    "service.2.desc": "تطبيقات هواتف ذكية لأنظمة iOS و Android بتجربة مستخدم لا تضاهى، مهيأة للربط السحابي وإشعارات الدفع والأنظمة الحية.",
    "service.2.feature": "iOS • Android • React Native • APIs",

    "service.3.title": "متاجر إلكترونية عالية التحويل",
    "service.3.desc": "متاجر متكاملة تدعم بوابات الدفع المحلية والخليجية (KNET، بطاقات ائتمانية، Apple Pay)، مصممة لرفع معدلات الشراء وثقة العميل.",
    "service.3.feature": "KNET Integration • Apple Pay • Checkout UX",

    "service.4.title": "أنظمة SaaS ولوحات تحكم سحابية",
    "service.4.desc": "أنظمة إدارة عمليات، مراقبة المبيعات، الفواتير، وجدولة المواعيد مع تحليلات بيانية حية وصلاحيات أمان مشددة.",
    "service.4.feature": "Realtime Analytics • Role Control • ERP",

    "service.5.title": "تصميم واجهات وتجارب المستخدم (UI/UX)",
    "service.5.desc": "دراسة دقيقة لسلوك المستخدم وتصميم رحلة تفاعلية أنيقة تجمع بين بساطة الاستخدام والهيبة البصرية الجذابة.",
    "service.5.feature": "Figma Prototypes • Design Systems • Micro-motion",

    "service.6.title": "تحسين الأداء وصيانة الأنظمة الحالية",
    "service.6.desc": "ترقية المواقع والتطبيقات القائمة، مضاعفة سرعة التحميل، معالجة الثغرات الأمنية، وضمان جاهزيتها المستمرة على مدار الساعة.",
    "service.6.feature": "Core Web Vitals • 99.9% Uptime • Security Audit",

    // Why Q8Webs
    "why.badge": "معايير Q8Webs الهندسية",
    "why.title": "لماذا تختار Q8Webs كشريك استراتيجي؟",
    "why.desc": "نحن لا نبيع قوالب جاهزة؛ بل نبني حلولاً مخصصة من الصفر تعكس هيبة علامتك في السوق الكويتي والخليجي.",
    "why.point1.title": "هندسة مخصصة بدون قوالب جاهزة",
    "why.point1.desc": "كود نظيف تماماً مصمم خصيصاً لمشروعك، مما يمنحك سرعة استثنائية وأماناً لا توفره القوالب المستهلكة.",
    "why.point2.title": "فهم عميق للسوق الكويتي والخليجي",
    "why.point2.desc": "خبرة متخصصة في سلوك المستهلك الخليجي، وتوافق كامل مع بوابات الدفع المحلية مثل KNET وشبكات التوصيل.",
    "why.point3.title": "أداء قياسي (Google Lighthouse 95+)",
    "why.point3.desc": "تحسين دقيق لكل بكسل وسطر برمجي لضمان فتح موقعك أو تطبيقك في أجزاء من الثانية دون أي تأخير.",
    "why.point4.title": "دعم فني واستمرارية تشغيلية",
    "why.point4.desc": "فريقنا المحلي معك في كل خطوة، نوفر صيانة مستمرة، تحديثات دورية، ومتابعة فورية لاحتياجاتك عبر واتساب.",

    // Comparison Table
    "comparison.title": "الفارق بين العمل معنا وبين القوالب العادية",
    "comparison.colFeature": "المعيار",
    "comparison.colQ8Webs": "مع Q8Webs",
    "comparison.colOthers": "الشركات التقليدية / القوالب",
    "comparison.row1.feat": "طريقة البناء والبرمجة",
    "comparison.row1.q8": "برمجة حصرية مخصصة 100% بأحدث التقنيات",
    "comparison.row1.others": "قوالب ووردبريس مكررة وبطيئة",
    "comparison.row2.feat": "سرعة التحميل وتجربة التصفح",
    "comparison.row2.q8": "فائقة السرعة (< 0.8 ثانية) مع درجات 95+",
    "comparison.row2.others": "بطيئة ومحملة بإضافات معطلة",
    "comparison.row3.feat": "الدعم وخدمة ما بعد الإطلاق",
    "comparison.row3.q8": "متابعة مباشرة عبر واتساب مع فريق مهندسين",
    "comparison.row3.others": "تذاكر دعم متأخرة أو غياب الرد",

    // Process
    "process.badge": "منهجية التنفيذ",
    "process.title": "مسار العمل: من الفكرة إلى الريادة",
    "process.desc": "منظومة واضحة ومنضبطة تضمن إنجاز مشروعك وفق أعلى معايير الجودة والالتزام بالمواعيد.",
    "process.step1.num": "01",
    "process.step1.title": "جلسة الاكتشاف والتخطيط",
    "process.step1.desc": "تحليل أهداف عملك، تحديد الجمهور المستهدف، ورسم خارطة الطريق التقنية للمشروع.",
    "process.step2.num": "02",
    "process.step2.title": "تصميم تجربة المستخدم (UI/UX)",
    "process.step2.desc": "ابتكار الواجهات التفاعلية والأنماط البصرية التي تجسد هوية علامتك التجارية بفخامة.",
    "process.step3.num": "03",
    "process.step3.title": "الهندسة والبرمجة المتطورة",
    "process.step3.desc": "كتابة كود عالي الكفاءة باستخدام أحدث أطر العمل العالمية مع ربط قواعد البيانات وبوابات الدفع.",
    "process.step4.num": "04",
    "process.step4.title": "اختبارات الأداء والأمان (QA)",
    "process.step4.desc": "فحص شامل للتوافق عبر جميع الشاشات واختبارات الضغط والحماية لضمان تجربة خالية من الأخطاء.",
    "process.step5.num": "05",
    "process.step5.title": "الإطلاق والربط السحابي",
    "process.step5.desc": "نشر المشروع على خوادم سحابية عالمية فائقة السرعة مع تهيئة محركات البحث (SEO).",
    "process.step6.num": "06",
    "process.step6.title": "التطوير والمساندة المستمرة",
    "process.step6.desc": "متابعة حية بعد الإطلاق، تدريب فريقك، وتقديم تحسينات دورية تواكب توسع مشروعك.",

    // Contact CTA
    "contact.badge": "ابدأ الآن",
    "contact.title": "جاهز لنقل مشروعك إلى مستوى استثنائي؟",
    "contact.desc": "تحدث مباشرة مع فريقنا الهندسي عبر واتساب، أو أرسل تفاصيل فكرتك لنبدأ في دراستها وتقديم الحل الأمثل فوراً.",
    "contact.waBtn": "تواصل عبر واتساب: 55512344",
    "contact.emailBtn": "مراسلة عبر الإيميل",
    "contact.serviceSelectLabel": "اختر نوع المشروع لبدء المحادثة:",
    "contact.optWebsite": "موقع إلكتروني فاخر",
    "contact.optMobile": "تطبيق جوال (iOS/Android)",
    "contact.optStore": "متجر إلكتروني مع KNET",
    "contact.optSaaS": "نظام أو لوحة تحكم خاصة",
    "contact.phoneDirect": "+965 55512344",
    "contact.emailDirect": "info@q8webs.com",
    "contact.office": "دولة الكويت — نخدم جميع مناطق الكويت ودول الخليج العربي",

    // Footer
    "footer.desc": "استوديو رائد في تصميم وتطوير المواقع والحلول الرقمية الفاخرة في دولة الكويت ودول الخليج العربي.",
    "footer.quickLinks": "روابط سريعة",
    "footer.servicesTitle": "خدماتنا",
    "footer.rights": "جميع الحقوق محفوظة لشركة Q8WEBS.",
    "footer.timeZone": "توقيت الكويت (GMT+3):",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.whyUs": "Why Q8Webs",
    "nav.process": "Process",
    "nav.contact": "Contact",
    "nav.cta": "Start a Project",
    "nav.langSwitch": "العربية",

    // Hero
    "hero.badge": "Luxury Digital Engineering & Design Studio • Kuwait & GCC",
    "hero.title1": "Architecting World-Class",
    "hero.titleHighlight": "Digital Experiences",
    "hero.title2": "for Visionary Brands",
    "hero.desc": "We engineer high-performance bespoke websites, native mobile applications, and enterprise digital ecosystems that elevate prestige and accelerate growth across Kuwait and the Arabian Gulf.",
    "hero.ctaPrimary": "Start via WhatsApp",
    "hero.ctaSecondary": "Explore Selected Works",
    "hero.liveStatus": "Available for Select Engagements",
    "hero.metricProjects": "Delivered Projects",
    "hero.metricPerformance": "Avg. Lighthouse Score",
    "hero.metricSatisfaction": "Client Satisfaction",
    "hero.locationBadge": "Kuwait City: 29.3759° N, 47.9774° E",

    // Marquee
    "marquee.item1": "Ultra-Fast Web Platforms (Next.js & React)",
    "marquee.item2": "Intuitive Mobile Applications (iOS & Android)",
    "marquee.item3": "High-Converting E-Commerce with KNET & Apple Pay",
    "marquee.item4": "Custom Cloud Portals & SaaS Dashboards",
    "marquee.item5": "Bespoke Editorial UI/UX & Motion Systems",

    // Portfolio
    "portfolio.badge": "Curated Portfolio",
    "portfolio.title": "Selected Works Built to Lead & Inspire",
    "portfolio.desc": "Explore authentic live platforms crafted for prominent clients across Kuwait and the Gulf, engineered with uncompromising attention to detail and performance.",
    "portfolio.requestCustom": "Have a custom vision in mind?",
    "portfolio.viewProject": "Case Study Details",
    "portfolio.deliverables": "Deliverables & Stack:",
    "portfolio.impact": "Key Impact:",

    // Portfolio Items
    "project.corporate.client": "Naqwah Luxury Perfumes & Oud",
    "project.corporate.title": "Bespoke Luxury E-Commerce & Olfactory Storytelling",
    "project.corporate.category": "Luxury Commerce & Digital Brand Identity",
    "project.corporate.desc": "An atmospheric, immersive digital flagship for an authentic Kuwaiti oud & luxury perfume house, combining sensory visual storytelling with an effortless checkout flow.",
    "project.corporate.impact": "180% surge in mobile transactions and sub-second page delivery across the GCC.",

    "project.ecommerce.client": "Al Baharna Charity",
    "project.ecommerce.title": "Secure Giving Platform with Real-Time KNET Gateway",
    "project.ecommerce.category": "Fintech Giving Platform & Multi-Cause Portal",
    "project.ecommerce.desc": "A mission-critical donation portal engineered for high concurrency, integrated seamlessly with Kuwait's KNET payment infrastructure and granular donation tracking.",
    "project.ecommerce.impact": "Zero downtime across high-traffic seasonal drives with 100% payment verification.",

    "project.booking.client": "ProTouch Automotive Detailing",
    "project.booking.title": "Enterprise Cloud ERP, Scheduling & Analytics Portal",
    "project.booking.category": "Cloud SaaS & Operations Management",
    "project.booking.desc": "A real-time operational operating system managing workshop revenue in KWD, automated customer appointments, digital warranty cards, and technician workflows.",
    "project.booking.impact": "65% reduction in administrative overhead with automated WhatsApp notification triggers.",

    // Services
    "services.badge": "Our Disciplines",
    "services.title": "End-to-End Digital Craftsmanship",
    "services.desc": "We synthesize cutting-edge software architecture with refined aesthetic direction to forge digital assets that command prestige.",
    
    "service.1.title": "Bespoke Web Development",
    "service.1.desc": "Custom-coded, lightning-fast web experiences built with Next.js, tailored for global performance, search engine dominance, and unmatched elegance.",
    "service.1.feature": "Next.js • React • Tailwind • Ultra Fast",

    "service.2.title": "Custom Mobile Applications",
    "service.2.desc": "Fluid, native iOS & Android applications engineered for fluid user journeys, secure API integrations, and instant push notifications.",
    "service.2.feature": "iOS • Android • React Native • APIs",

    "service.3.title": "High-Converting E-Commerce",
    "service.3.desc": "Modern digital storefronts integrated with GCC payment rails (KNET, Apple Pay, Credit Cards) designed to turn browsers into loyal customers.",
    "service.3.feature": "KNET Integration • Apple Pay • Checkout UX",

    "service.4.title": "SaaS Platforms & Custom ERPs",
    "service.4.desc": "Internal operations systems, real-time analytics, automated booking engines, and multi-tenant portals engineered with bank-grade security.",
    "service.4.feature": "Realtime Analytics • Role Control • ERP",

    "service.5.title": "UI/UX & Product Design",
    "service.5.desc": "Human-centric digital interfaces shaped through extensive user research, architectural design systems, and tasteful micro-interactions.",
    "service.5.feature": "Figma Prototypes • Design Systems • Micro-motion",

    "service.6.title": "Performance Optimization & Cloud",
    "service.6.desc": "Auditing and supercharging legacy platforms to achieve 99+ Core Web Vitals, enterprise security hardening, and 24/7 technical stability.",
    "service.6.feature": "Core Web Vitals • 99.9% Uptime • Security Audit",

    // Why Q8Webs
    "why.badge": "The Q8Webs Difference",
    "why.title": "Why Visionary Brands Partner with Us",
    "why.desc": "We reject off-the-shelf templates and bloated page builders. Everything we produce is custom-crafted to establish authoritative market leadership.",
    "why.point1.title": "100% Handcrafted Code Architecture",
    "why.point1.desc": "Zero sluggish page builders. Clean, scalable, modern code ensuring unmatched speed, modularity, and future-proof extensibility.",
    "why.point2.title": "Deep Kuwait & GCC Market Intelligence",
    "why.point2.desc": "Local engineering expertise with native KNET payment gateways, bilingual nuances, and Gulf consumer behavioral habits.",
    "why.point3.title": "Benchmark Speed (Google Lighthouse 95+)",
    "why.point3.desc": "Obsessive performance optimization delivering instant interaction response times and superior SEO rankings.",
    "why.point4.title": "Dedicated Strategic Support",
    "why.point4.desc": "Direct engineer communication via WhatsApp with rapid response times and continuous post-launch evolution.",

    // Comparison Table
    "comparison.title": "How Q8Webs Compares to Generic Agencies",
    "comparison.colFeature": "Criteria",
    "comparison.colQ8Webs": "With Q8Webs",
    "comparison.colOthers": "Generic Agencies / Templates",
    "comparison.row1.feat": "Code Architecture",
    "comparison.row1.q8": "100% Custom Next.js & React engineered from scratch",
    "comparison.row1.others": "Bloated WordPress themes & slow visual plugins",
    "comparison.row2.feat": "Loading Speed & UX",
    "comparison.row2.q8": "Sub-second (<0.8s), 95+ Core Web Vitals guaranteed",
    "comparison.row2.others": "Sluggish (4-8s) with frequent rendering lag",
    "comparison.row3.feat": "Post-Launch Care",
    "comparison.row3.q8": "Direct WhatsApp access to lead engineers",
    "comparison.row3.others": "Slow ticketing systems or abandoned handoffs",

    // Process
    "process.badge": "Our Methodology",
    "process.title": "The Road from Vision to Market Leadership",
    "process.desc": "A disciplined, transparent delivery cadence engineered to ensure excellence at every phase.",
    "process.step1.num": "01",
    "process.step1.title": "Strategic Discovery",
    "process.step1.desc": "Defining core business objectives, identifying user personas, and drafting the technical blueprint.",
    "process.step2.num": "02",
    "process.step2.title": "UI/UX Architecture",
    "process.step2.desc": "Designing bespoke interactive prototypes and an editorial design system aligned with your brand prestige.",
    "process.step3.num": "03",
    "process.step3.title": "Precision Engineering",
    "process.step3.desc": "Developing robust, modern codebases integrated with resilient databases, APIs, and payment infrastructure.",
    "process.step4.num": "04",
    "process.step4.title": "Rigorous QA & Testing",
    "process.step4.desc": "Multi-device audits, cross-browser validation, and security stress-testing across mobile, tablet, and desktop.",
    "process.step5.num": "05",
    "process.step5.title": "Deployment & SEO Indexing",
    "process.step5.desc": "Launching to high-availability global edge CDNs with full technical SEO and analytics instrumentation.",
    "process.step6.num": "06",
    "process.step6.title": "Continuous Evolution",
    "process.step6.desc": "Post-launch performance monitoring, ongoing iterations, and proactive optimization as your business scales.",

    // Contact CTA
    "contact.badge": "Start the Conversation",
    "contact.title": "Ready to Build Something Extraordinary?",
    "contact.desc": "Connect directly with our engineering team on WhatsApp or send us an email. Let's discuss your project and formulate the optimal strategy.",
    "contact.waBtn": "Connect via WhatsApp: 55512344",
    "contact.emailBtn": "Email Us Direct",
    "contact.serviceSelectLabel": "Select your project type to start:",
    "contact.optWebsite": "Luxury Corporate Website",
    "contact.optMobile": "Custom Mobile App (iOS/Android)",
    "contact.optStore": "E-Commerce with KNET",
    "contact.optSaaS": "Cloud Portal / Custom SaaS",
    "contact.phoneDirect": "+965 55512344",
    "contact.emailDirect": "info@q8webs.com",
    "contact.office": "State of Kuwait — Serving Kuwait & the Arabian Gulf",

    // Footer
    "footer.desc": "Premier digital agency specializing in bespoke web engineering, luxury e-commerce, and high-impact software solutions across Kuwait and the GCC.",
    "footer.quickLinks": "Navigation",
    "footer.servicesTitle": "Capabilities",
    "footer.rights": "All rights reserved. Q8WEBS.",
    "footer.timeZone": "Kuwait Time (GMT+3):",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "ar",
  setLang: () => {},
  toggleLang: () => {},
  t: () => "",
  isRTL: true,
});

function subscribeLanguage(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("q8webs-language", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("q8webs-language", callback);
  };
}
let fallbackLanguage: Language = "ar";
function readLanguage(): Language {
  try { return localStorage.getItem("q8webs_lang") === "en" ? "en" : "ar"; }
  catch { return fallbackLanguage; }
}
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lang = useSyncExternalStore(subscribeLanguage, readLanguage, () => "ar" as Language);
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);
  const setLang = (newLang: Language) => {
    fallbackLanguage = newLang;
    try { localStorage.setItem("q8webs_lang", newLang); } catch { /* Session-only preference when storage is blocked. */ }
    window.dispatchEvent(new Event("q8webs-language"));
  };
  const toggleLang = () => setLang(lang === "ar" ? "en" : "ar");

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations["ar"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, isRTL: lang === "ar" }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
