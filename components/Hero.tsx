"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export default function Hero() {
  const { isRTL } = useLanguage();
  const target = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const Arrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  return (
    <section id="hero" className="editorial-hero" ref={target}>
      <motion.div className="hero-art" style={reduceMotion ? undefined : { y }}>
        <Image src="/images/editorial/hero.webp" alt="" fill preload sizes="100vw" />
      </motion.div>
      <div className="hero-vignette" />
      <div className="hero-grid editorial-shell">
        <div className="hero-manifesto">
          <div className="hero-index" dir="ltr">01<span>+</span><small>DESIGN / DEVELOP / DELIVER</small></div>
          <p className="eyebrow light">{isRTL ? "كويت ويبس — استوديو الحلول الرقمية" : "Q8WEBS — DIGITAL SOLUTIONS STUDIO"}</p>
          <h1>{isRTL ? <>فكرة جريئة.<br /><em>حضور مختلف.</em></> : <>BOLD IDEAS.<br /><em>DIGITAL IMPACT.</em></>}</h1>
          <p className="hero-description">{isRTL ? "نصمّم مواقع ونطوّر تطبيقات تحكي قصتك. نجمع الفن والبرمجة لنصنع حضوراً يشبهك، ويترك أثره." : "We design websites and build apps that tell your story. Where thoughtful design meets purposeful engineering."}</p>
          <a href="#contact" className="editorial-button">{isRTL ? "خلّنا نصنع مشروعك" : "Let’s create your project"}<Arrow size={17} /></a>
        </div>
        <div className="hero-side-caption" dir="ltr"><span>WEB EXPERIENCES</span><i /><span>MOBILE APPLICATIONS</span><i /><span>MADE IN KUWAIT</span></div>
      </div>
      <div className="hero-foot editorial-shell"><a href="#services"><ArrowDown size={15} />{isRTL ? "اكتشف عالمنا" : "EXPLORE OUR WORLD"}</a><span dir="ltr">EST. IN KUWAIT / BUILT FOR YOU</span></div>
      <div className="torn-edge" aria-hidden="true" />
    </section>
  );
}
