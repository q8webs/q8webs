"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpLeft, ArrowUpRight, Plus, Minus } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const projects = [
  { key: "corporate", name: ["أطياب نقوة", "Atyab Naqwah"], type: ["تجارة إلكترونية · عطور وهوية فاخرة", "E-COMMERCE · FRAGRANCE & LUXURY"], image: "corporate", color: "sand", services: ["تصميم تجربة الشراء، واجهات المتجر، وربط الدفع الإلكتروني.", "Shopping experience, storefront design, and payment integration."] },
  { key: "ecommerce", name: ["مبرة البحارنة", "Al Baharna Charity"], type: ["منصة تبرعات · تجربة تصنع أثراً", "DONATION PLATFORM · DIGITAL IMPACT"], image: "ecommerce", color: "mint", services: ["عرض المشاريع الخيرية، رحلة التبرع، ولوحة إدارة المحتوى.", "Charity project discovery, donation flow, and content management."] },
  { key: "booking", name: ["برو تاش", "ProTouch"], type: ["نظام إدارة · كل التفاصيل بمكان واحد", "BUSINESS PLATFORM · CONNECTED OPERATIONS"], image: "booking", color: "violet", services: ["إدارة الحجوزات، متابعة الإيرادات، وتنظيم عمليات الخدمة.", "Booking management, revenue tracking, and service operations."] },
];
export default function Portfolio() {
  const { isRTL, t } = useLanguage();
  const [active, setActive] = useState(0);
  const [details, setDetails] = useState(false);
  const project = projects[active];
  const next = (delta: number) => { setActive((active + delta + projects.length) % projects.length); setDetails(false); };
  const Arrow = isRTL ? ArrowUpLeft : ArrowUpRight;
  return <section id="portfolio" className="work-section section-space">
    <div className="site-shell">
      <div className="section-topline"><span className="eyebrow">01 / {isRTL ? "أعمال مختارة" : "SELECTED WORK"}</span><span className="micro-label">DESIGNED WITH PURPOSE. BUILT WITH CARE.</span></div>
      <div className="section-heading"><h2>{isRTL ? <>أفكار صارت <em>واقع.</em></> : <>Ideas made <em>real.</em></>}</h2><p>{isRTL ? "لكل مشروع حكاية. وهذي بعض التجارب اللي صممناها لتعبّر عن أصحابها." : "Every project has a story. Explore the experiences we built to bring each one to life."}</p></div>
      <div className={`project-stage ${project.color}`}>
        <div className="project-stage-grid" aria-hidden="true" />
        <span className="project-stage-word" aria-hidden="true">{["NAQWAH", "IMPACT", "PROTOUCH"][active]}</span>
        <div className="project-preview" key={project.key}>
          <div className="browser-chrome"><span><i /><i /><i /></span><small>{project.name[1]} / Q8WEBS</small><span>↗</span></div>
          <div className="project-image"><Image src={`/images/portfolio/${project.image}.png`} alt={isRTL ? `معاينة مشروع ${project.name[0]}` : `${project.name[1]} project preview`} fill sizes="(max-width: 700px) 90vw, 75vw" className="object-cover object-top" /></div>
        </div>
        <div className="stage-caption"><span>{isRTL ? "تصميم يعبّر عنك" : "CRAFTED TO STAND OUT"}</span><span>0{active + 1} / 03</span></div>
      </div>
      <div className="project-summary" aria-live="polite" aria-atomic="true"><div><p className="eyebrow">{project.type[isRTL ? 0 : 1]}</p><h3>{project.name[isRTL ? 0 : 1]}</h3></div><button className="button-text" aria-expanded={details} aria-controls="project-details" onClick={() => setDetails(!details)}>{isRTL ? "عن المشروع" : "About the project"}{details ? <Minus size={18} /> : <Plus size={18} />}</button></div>
      {details && <div id="project-details" className="project-details"><p>{t(`project.${project.key}.desc`)}</p><p>{project.services[isRTL ? 0 : 1]}</p><a href="#contact" className="button-text">{isRTL ? "نصمم تجربة تناسب مشروعك" : "Let’s create your experience"}<Arrow size={18} /></a></div>}
      <div className="project-controls"><div className="project-tabs" role="group" aria-label={isRTL ? "اختيار المشروع" : "Select project"}>{projects.map((p, i) => <button key={p.key} aria-pressed={i === active} onClick={() => {setActive(i);setDetails(false);}}><span>0{i + 1}</span>{p.name[isRTL ? 0 : 1]}</button>)}</div><div className="project-arrows"><button onClick={() => next(-1)} aria-label={isRTL ? "المشروع السابق" : "Previous project"}>{isRTL ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}</button><button onClick={() => next(1)} aria-label={isRTL ? "المشروع التالي" : "Next project"}>{isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}</button></div></div>
    </div>
  </section>;
}
