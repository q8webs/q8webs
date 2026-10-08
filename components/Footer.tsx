"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { isRTL } = useLanguage();
  return (
    <footer className="editorial-footer">
      <div className="editorial-shell footer-main">
        <a className="footer-logo" href="#hero" aria-label="Q8WEBS"><Image src="/images/editorial/q8webs-logo-transparent.webp" alt="Q8WEBS — Web Solutions" width={120} height={80} /></a>
        <p>{isRTL ? "تصميم وتطوير المواقع وتطبيقات الموبايل.\nمن الكويت، لطموحك." : "Web design & mobile app development.\nFrom Kuwait, for your ambition."}</p>
        <nav aria-label={isRTL ? "روابط التذييل" : "Footer navigation"}><a href="#services">{isRTL ? "خبراتنا" : "Expertise"}</a><a href="#portfolio">{isRTL ? "أعمالنا" : "Our work"}</a><a href="#contact">{isRTL ? "تواصل معنا" : "Contact"}</a></nav>
        <a href="#hero" className="back-to-top" aria-label={isRTL ? "العودة للأعلى" : "Back to top"}><ArrowUp size={19} /></a>
      </div>
      <div className="editorial-shell footer-legal"><span>© {new Date().getFullYear()} Q8WEBS. {isRTL ? "جميع الحقوق محفوظة." : "All rights reserved."}</span><span dir="ltr">DESIGN WITH CHARACTER. CODE WITH PURPOSE.</span></div>
    </footer>
  );
}
