"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpLeft, ArrowUpRight, Check, Code2, Layers3, Smartphone, Globe2, Plus } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const projects = [
  { name: ["أطياب نقوة", "Atyab Naqwah"], type: ["تجارة إلكترونية", "E-COMMERCE"], description: ["تجربة متجر للعطور والبخور، من استعراض المنتجات إلى إتمام الطلب. واجهة تعبّر عن هوية العلامة وتسهّل رحلة العميل.", "A fragrance and incense storefront, from product discovery to checkout. An experience shaped around the brand and its customers."], scope: ["واجهات المتجر · تجربة الشراء · الدفع الإلكتروني", "Storefront design · Shopping journey · Payments"] },
  { name: ["مبرة البحارنة", "Al Baharna Charity"], type: ["منصة تبرعات", "DONATION PLATFORM"], description: ["منصة لعرض المشاريع الخيرية وتنظيم رحلة التبرع، مع أدوات لإدارة المحتوى ومتابعة العمليات.", "A platform for discovering charity projects and making donations, with tools for content management and operational oversight."], scope: ["عرض المشاريع · رحلة التبرع · إدارة المحتوى", "Project discovery · Donation flow · Content management"] },
  { name: ["برو تاش", "ProTouch"], type: ["نظام إدارة", "BUSINESS SOFTWARE"], description: ["نظام يجمع الحجوزات وعمليات الخدمة ومتابعة الإيرادات في تجربة واحدة، مصممة لتنظيم تفاصيل العمل اليومي.", "Bookings, service operations, and revenue tracking brought together in one experience designed for everyday business."], scope: ["الحجوزات · لوحة التحكم · إدارة العمليات", "Bookings · Dashboard · Operations"] },
  { name: ["استرو كيو أيت", "Astroq8"], type: ["متجر إلكترونيات", "ELECTRONICS STORE"], description: ["متجر إلكتروني متخصص في بيع الإلكترونيات، يجمع المنتجات التقنية في واجهة تسهّل استعراضها والتعرّف عليها.", "An online store dedicated to electronics, bringing tech products together in an accessible shopping experience."], scope: ["تجارة إلكترونية · إلكترونيات", "E-commerce · Electronics"] },
  { name: ["قيد", "qeed"], type: ["تطبيق ألعاب الورق", "CARD GAME APP"], description: ["قيد — qeed، تطبيق لتسجيل نتائج ألعاب الورق ومتابعة النقاط، لتكون تفاصيل اللعب واضحة وفي متناول اليد.", "qeed is a mobile app for recording card game results and keeping track of scores throughout the game."], scope: ["تطبيق موبايل · تسجيل نتائج ألعاب الورق", "Mobile app · Card game scorekeeping"] },
];

export default function EditorialExperience() {
  const { isRTL } = useLanguage();
  const [activeProject, setActiveProject] = useState(0);
  const [service, setService] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);
  const locale = isRTL ? 0 : 1;
  const Arrow = isRTL ? ArrowUpLeft : ArrowUpRight;
  const capabilities = isRTL
    ? [["تصميم يعبّر عنك", "نبدأ من هويتك ونبني لغة بصرية خاصة بمشروعك. من الخطوط والمساحات إلى أصغر تفصيلة في الواجهة."], ["برمجة مدروسة", "نحوّل التصميم إلى تجربة عملية، ببنية واضحة تراعي الأداء وقابلية التطوير مع نمو مشروعك."], ["تجربة بكل اللغات", "العربية والإنجليزية جزء من التصميم من البداية، مع مراعاة اتجاه القراءة وتجربة التصفح على كل شاشة."]]
    : [["Designed around you", "We start with your identity and build a visual language of your own, from type and space to the smallest interface detail."], ["Engineered with care", "We turn design into a working experience, with a thoughtful foundation for performance and future growth."], ["Made for every audience", "Arabic and English are considered from the start, with natural reading directions and a considered experience on every screen."]];
  const services = isRTL ? ["موقع إلكتروني", "تطبيق موبايل", "متجر إلكتروني", "نظام مخصص"] : ["Website", "Mobile app", "Online store", "Custom software"];
  const message = isRTL ? `مرحباً كويت ويبس، عندي فكرة ${services[service]} وأبي نتكلم عن تفاصيل المشروع.` : `Hello Q8WEBS, I would like to discuss a project: ${services[service]}.`;
  const steps = isRTL
    ? [["نكتشف", "نفهم فكرتك وأهدافك ونحدد نطاق المشروع."], ["نصمّم", "نرسم التجربة ونراجع معاك التفاصيل."], ["نطوّر", "نبني ونختبر على مختلف الأجهزة."], ["نطلق", "نجهّز الإطلاق ونشرح لك إدارة مشروعك."]]
    : [["Discover", "Your idea, your goals, and a clear project scope."], ["Design", "We shape the experience and refine it together."], ["Develop", "We build and test across different devices."], ["Deliver", "We launch and walk you through your product."]];

  return (
    <>
      <div className="paper-journey">
        <div className="ink-river" aria-hidden="true" />
        <div className="journey-grid" aria-hidden="true"><i /><i /><i /></div>

        <section id="services" className="craft-section editorial-shell">
          <div className="craft-heading">
            <p className="eyebrow">{isRTL ? "الفن وراء التجربة" : "THE ART BEHIND THE EXPERIENCE"}</p>
            <h2 className="serif-title">{isRTL ? "خبراتنا." : "CRAFT."}</h2>
            <span className="tiny-rule" />
            <p>{isRTL ? "تفاصيل صغيرة.\nفرق كبير." : "Small details.\nA lasting difference."}</p>
            <div className="craft-icons"><Code2 size={18} /><Layers3 size={18} /><Smartphone size={18} /></div>
          </div>
          <div className="capability-stack">
            <div className="red-panel">
              <span className="micro-label">CREATIVE / ENGINEERING</span>
              <h3>{isRTL ? <>فن.<br />منطق.<br />وأثر.</> : <>ART.<br />CODE.<br />IMPACT.</>}</h3>
              <Code2 size={40} strokeWidth={.8} />
              <span className="panel-index" dir="ltr">Q8 / 01—03</span>
            </div>
            <div className="paper-panel capability-panel">
              <span className="micro-label">0{activeCapability + 1} / OUR APPROACH</span>
              <h3>{capabilities[activeCapability][0]}</h3>
              <p>{capabilities[activeCapability][1]}</p>
              <div className="capability-select" role="group" aria-label={isRTL ? "مجالات الخبرة" : "Our approach"}>
                {capabilities.map(([title], i) => <button key={title} onClick={() => setActiveCapability(i)} aria-label={title} aria-pressed={i === activeCapability}><span /></button>)}
              </div>
            </div>
          </div>
          <div className="studio-statement">
            <span className="micro-label light">THE Q8WEBS WAY</span>
            <h2>{isRTL ? <>مو مجرد موقع.<br />هذي هويتك.</> : <>NOT JUST A SITE.<br />YOUR SIGNATURE.</>}</h2>
            <p>{isRTL ? "نصنع تجارب رقمية تجمع وضوح الفكرة، جمال التصميم، وقوة التنفيذ. مصممة لك، من أول سطر إلى آخر نقرة." : "Clear ideas. Distinctive design. Purposeful development. A digital experience made for you, from the first line to the final click."}</p>
          </div>
          <div className="craft-margin-note"><Plus size={24} strokeWidth={1} /><span>{isRTL ? "تصميم له معنى" : "PURPOSE BY DESIGN"}</span><p>{isRTL ? "كل تفصيلة لها دور.\nوكل تجربة لها حكاية." : "Every detail has a role.\nEvery experience has a story."}</p></div>
        </section>

        <section id="web-design" className="web-chapter editorial-shell">
          <div className="chapter-heading"><span className="chapter-number" dir="ltr">01.</span><div><p className="eyebrow">{isRTL ? "المواقع والتجارة الإلكترونية" : "WEBSITES & E-COMMERCE"}</p><h2>{isRTL ? <>موقعك.<br /><em>بصمتك.</em></> : <>YOUR WEB.<br /><em>YOUR WORLD.</em></>}</h2></div></div>
          <div className="chapter-side-note"><span className="crosshair" /><p>{isRTL ? "واجهات مدروسة،\nمن أول انطباع." : "THOUGHTFUL INTERFACES.\nFROM THE FIRST IMPRESSION."}</p><span className="micro-label">UI / UX — DEVELOPMENT</span></div>
          <div className="web-art floating-art"><Image src="/images/editorial/web.webp" alt={isRTL ? "تصوّر فني للابتوب وواجهات مواقع من تصميم كويت ويبس" : "Editorial laptop and website interface concept for Q8WEBS"} width={1448} height={1086} sizes="(max-width: 700px) 95vw, 65vw" /></div>
          <div className="web-spec paper-panel"><span className="micro-label">BUILT AROUND YOUR BUSINESS</span><h3>{isRTL ? "حضور يليق بفكرتك." : "A presence of your own."}</h3><p>{isRTL ? "مواقع تعريفية ومتاجر إلكترونية بهوية مميزة، وتجربة واضحة على الكمبيوتر والموبايل." : "Distinctive business websites and online stores. A thoughtful experience on desktop and mobile."}</p><ul>{(isRTL ? ["تصميم مخصص لهويتك", "تجربة عربية وإنجليزية", "ربط الدفع والخدمات"] : ["Bespoke visual identity", "Arabic & English experiences", "Payment & service integrations"]).map(item => <li key={item}><span>—</span>{item}</li>)}</ul><a href="#contact" className="text-link">{isRTL ? "ابدأ موقعك" : "Create your website"}<Arrow size={16} /></a></div>
          <div className="black-caption"><span className="caption-number" dir="ltr">1st.</span><div><h3>{isRTL ? "الانطباع الأول. يستاهل." : "FIRST IMPRESSIONS. REIMAGINED."}</h3><p>{isRTL ? "تجارب رقمية تبقى بالبال." : "Digital experiences worth remembering."}</p></div></div>
        </section>

        <section id="mobile-apps" className="mobile-chapter editorial-shell">
          <div className="chapter-heading"><span className="chapter-number" dir="ltr">02.</span><div><p className="eyebrow">{isRTL ? "تطبيقات الموبايل" : "MOBILE APPLICATIONS"}</p><h2>{isRTL ? <>فكرتك.<br /><em>بمتناول اليد.</em></> : <>BIG IDEAS.<br /><em>POCKET SIZE.</em></>}</h2><p>{isRTL ? "نقرّب مشروعك من عملائك، بتطبيق يجمع بساطة الاستخدام وجمال التفاصيل." : "Bring your business closer to your customers with an app that feels effortless."}</p></div></div>
          <div className="mobile-art floating-art"><Image src="/images/editorial/mobile.webp" alt={isRTL ? "تصوّر فني لتطبيق موبايل وواجهات متابعة الأعمال" : "Editorial mobile app and business dashboard concept"} width={1122} height={1402} sizes="(max-width: 700px) 85vw, 46vw" /></div>
          <div className="mobile-spec red-panel"><span className="micro-label">MOBILE / CAPABILITIES</span><h3>{isRTL ? "تجربة\nتقرّبك." : "MADE TO\nCONNECT."}</h3><ul>{(isRTL ? ["تطبيقات iOS وAndroid", "واجهات سهلة وواضحة", "ربط الأنظمة والخدمات", "إشعارات وتجارب تفاعلية"] : ["iOS & Android apps", "Intuitive interfaces", "Connected services", "Interactive experiences"]).map(item => <li key={item}>{item}</li>)}</ul><Smartphone size={32} strokeWidth={1} /></div>
          <div className="mobile-footnote"><span className="micro-label">DESIGN THAT MOVES WITH YOU</span><p>{isRTL ? "من شاشة صغيرة،\nتبدأ فرص كبيرة." : "A smaller screen.\nA bigger opportunity."}</p><a className="text-link" href="#contact">{isRTL ? "نتكلم عن تطبيقك" : "Let’s talk about your app"}<Arrow size={16} /></a></div>
        </section>

        <section id="portfolio" className="work-chapter editorial-shell">
          <div className="work-intro"><p className="eyebrow">{isRTL ? "من شغلنا" : "SELECTED COLLABORATIONS"}</p><h2 className="serif-title">{isRTL ? "أفكار\nأنجزناها." : "SELECTED\nWORK."}</h2><p>{isRTL ? "مجالات مختلفة. اهتمام واحد بالتفاصيل." : "Different industries. The same attention to detail."}</p><Globe2 size={30} strokeWidth={.8} /><span className="micro-label">KUWAIT / DIGITAL EXPERIENCES</span></div>
          <div className="project-dossier">
            <div className="dossier-top"><span>Q8WEBS / PROJECT ARCHIVE</span><span dir="ltr">{String(activeProject + 1).padStart(2, "0")} — {String(projects.length).padStart(2, "0")}</span></div>
            <div className="project-list" role="group" aria-label={isRTL ? "اختر مشروعاً" : "Select a project"}>
              {projects.map((project, index) => <button key={project.name[1]} onClick={() => setActiveProject(index)} aria-pressed={index === activeProject}><small dir="ltr">0{index + 1}</small><span>{project.name[locale]}</span><Arrow size={18} /></button>)}
            </div>
            <div className="project-description paper-panel" aria-live="polite" aria-atomic="true"><span className="micro-label">{projects[activeProject].type[locale]}</span><h3>{projects[activeProject].name[locale]}</h3><p>{projects[activeProject].description[locale]}</p><div className="project-scope">{projects[activeProject].scope[locale]}</div></div>
          </div>
          <div className="work-seal"><span>Q8</span><small>DESIGN & DEVELOPMENT<br />KUWAIT</small></div>
        </section>

        <section id="process" className="process-chapter editorial-shell">
          <div className="process-intro"><p className="eyebrow">{isRTL ? "الطريقة" : "THE PROCESS"}</p><h2>{isRTL ? <>من الفكرة.<br />إلى الإطلاق.</> : <>FROM IDEA.<br />TO REALITY.</>}</h2><p>{isRTL ? "خطوات واضحة، وتواصل معاك بكل مرحلة." : "Clear milestones. A conversation at every stage."}</p></div>
          <ol className="editorial-steps">{steps.map(([title, description], index) => <li key={title}><span dir="ltr">0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
          <span className="process-mark" aria-hidden="true">+</span>
        </section>
      </div>

      <section id="contact" className="editorial-contact">
        <div className="editorial-shell contact-grid">
          <div className="contact-copy"><p className="eyebrow light">{isRTL ? "الفصل القادم نكتبه معاك" : "LET’S WRITE THE NEXT CHAPTER"}</p><h2>{isRTL ? <>عندك فكرة؟<br /><em>خلّها تبدأ.</em></> : <>YOUR NEXT<br /><em>BIG THING.</em></>}</h2><p>{isRTL ? "قول لنا شنو في بالك. نسمع فكرتك ونرسم معاك الخطوة الأولى." : "Tell us what you have in mind. We’ll listen, explore, and find the right place to start."}</p></div>
          <div className="contact-form"><span className="micro-label light">{isRTL ? "شنو نوع مشروعك؟" : "WHAT ARE WE CREATING?"}</span><div className="project-type-options" role="group" aria-label={isRTL ? "نوع المشروع" : "Project type"}>{services.map((item, index) => <button key={item} aria-pressed={index === service} onClick={() => setService(index)}>{item}{index === service ? <Check size={15} /> : <Plus size={15} />}</button>)}</div><a className="editorial-button contact-send" href={`https://wa.me/96555512344?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">{isRTL ? "نبدأ المحادثة على واتساب" : "Start a conversation"}<Arrow size={18} /></a><div className="contact-direct"><a href="tel:+96555512344" dir="ltr">+965 5551 2344</a><a href="mailto:info@q8webs.com">info@q8webs.com</a></div></div>
        </div>
      </section>
    </>
  );
}
