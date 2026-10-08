"use client";
import { useLanguage } from "./LanguageContext";
const en = ["DIGITAL EXPERIENCES", "WEB DEVELOPMENT", "MOBILE APPLICATIONS", "E-COMMERCE", "UI / UX DESIGN"];
const ar = ["تجارب تُلهم", "مواقع تُميّزك", "تطبيقات تقرّبك", "متاجر تنمو معك", "تصميم يصنع الفرق"];
export default function TechTicker() {
  const { isRTL } = useLanguage();
  const items = isRTL ? ar : en;
  return <div className="studio-ticker" aria-label={isRTL ? "مجالات عملنا" : "Our disciplines"}><div className="ticker-track">{[0, 1].map(copy => <div className="ticker-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{items.map(item => <span key={item}>{item}<b>✳</b></span>)}</div>)}</div></div>;
}
