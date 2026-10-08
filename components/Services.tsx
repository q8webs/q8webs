"use client";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const services = [
  { ar: "مواقع لها حضور.", en: "Websites with presence.", descAr: "من أول انطباع إلى آخر نقرة. نصمم ونبرمج موقعاً يعكس هويتك ويخلي الوصول لك أسهل.", descEn: "From the first impression to the last click. A website that reflects your identity and connects you with your audience.", tags: ["WEB DESIGN", "DEVELOPMENT", "SEO"] },
  { ar: "تطبيقات تقرّبك.", en: "Apps that connect.", descAr: "فكرتك في متناول اليد. تطبيقات جوال بتجربة واضحة ومريحة، مصممة حول احتياج مستخدميك.", descEn: "Your idea, in the palm of a hand. Mobile experiences designed around what your users actually need.", tags: ["iOS", "ANDROID", "USER EXPERIENCE"] },
  { ar: "متاجر تفتح آفاق.", en: "Stores that grow.", descAr: "رحلة شراء متكاملة من اكتشاف المنتج إلى الدفع، مع ربط بوابات الدفع المناسبة للسوق الكويتي.", descEn: "A thoughtful journey from product discovery to checkout, with payment integrations for the Kuwait market.", tags: ["E-COMMERCE", "KNET", "PAYMENTS"] },
  { ar: "أنظمة ترتّب شغلك.", en: "Systems that simplify.", descAr: "حجوزات، عمليات، ولوحات تحكم. نجمع تفاصيل شغلك في نظام مخصص يوفر عليك الوقت والجهد.", descEn: "Bookings, operations, and dashboards. Custom platforms that bring the moving parts of your business together.", tags: ["DASHBOARDS", "AUTOMATION", "CUSTOM SOFTWARE"] },
];
export default function Services() {
  const { isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowUpLeft : ArrowUpRight;
  return <section id="services" className="services-section section-space"><div className="site-shell services-layout"><div className="services-intro"><p className="eyebrow">02 / {isRTL ? "وش نسوي" : "OUR EXPERTISE"}</p><h2>{isRTL ? <>طموحك كبير.<br /><em>وحلولنا على قدّه.</em></> : <>Big ambitions.<br /><em>Built to match.</em></>}</h2><p>{isRTL ? "من أول فكرة إلى تجربة متكاملة. التصميم والبرمجة تحت سقف واحد، وكل تفصيلة محسوبة لك." : "From a spark of an idea to a complete digital experience. Design and development, working together."}</p><a className="button-text" href="#contact">{isRTL ? "نتكلم عن مشروعك" : "Tell us about your project"}<Arrow size={18} /></a><div className="studio-symbol" aria-hidden="true"><span /><span /><span /><b>✳</b></div></div><div className="service-list">{services.map((s, i) => <details className="service-row" key={s.en} open={i === 0 ? true : undefined}><summary><span className="service-number">0{i + 1}</span><h3>{isRTL ? s.ar : s.en}</h3><span className="service-expand">+</span></summary><div className="service-body"><p>{isRTL ? s.descAr : s.descEn}</p><div className="service-tags" dir="ltr">{s.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></details>)}</div></div></section>;
}
