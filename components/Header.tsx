"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpLeft, ArrowUpRight, Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Header() {
  const { isRTL, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const Arrow = isRTL ? ArrowUpLeft : ArrowUpRight;
  const links = [
    ["services", isRTL ? "خبراتنا" : "Expertise"],
    ["web-design", isRTL ? "المواقع" : "Websites"],
    ["mobile-apps", isRTL ? "التطبيقات" : "Mobile apps"],
    ["portfolio", isRTL ? "أعمالنا" : "Our work"],
    ["contact", isRTL ? "تواصل معنا" : "Let’s talk"],
  ];

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 60);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);

  return (
    <header className={`editorial-header ${scrolled || open ? "header-solid" : ""}`}>
      <a href="#main-content" className="skip-link">{isRTL ? "انتقل للمحتوى" : "Skip to content"}</a>
      <div className="header-shell">
        <a className="brand-plaque" href="#hero" aria-label="Q8WEBS">
          <Image src="/images/editorial/q8webs-logo-transparent.webp" alt="Q8WEBS — Web Solutions" width={138} height={92} preload />
        </a>
        <span className="header-caption" dir="ltr">INDEPENDENT DIGITAL STUDIO<br /><b>KUWAIT & THE GULF</b></span>
        <div className="header-tools">
          <a className="header-project" href="#contact">{isRTL ? "عندك فكرة؟" : "Have a project?"}<Arrow size={15} /></a>
          <button className="language-switch" onClick={toggleLang} aria-label={isRTL ? "Switch to English" : "التحويل إلى العربية"}>{isRTL ? "EN" : "عربي"}</button>
          <button ref={menuButton} className="menu-trigger" aria-label={isRTL ? "القائمة" : "Menu"} aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
      {open && (
        <nav id="site-menu" className="editorial-menu" aria-label={isRTL ? "القائمة الرئيسية" : "Main navigation"}>
          {links.map(([id, label], index) => (
            <a href={`#${id}`} key={id} onClick={() => setOpen(false)}><span>{label}</span><small>0{index + 1}</small></a>
          ))}
        </nav>
      )}
    </header>
  );
}
