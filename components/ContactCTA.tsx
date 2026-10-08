"use client";
import { useState } from "react";
import { ArrowUpLeft, ArrowUpRight, Check } from "lucide-react";
import { useLanguage } from "./LanguageContext";
export default function ContactCTA() {
  const { isRTL } = useLanguage();
  const [selected, setSelected] = useState(0);
  const services = isRTL ? ["موقع إلكتروني", "تطبيق جوال", "متجر إلكتروني", "نظام مخصص"] : ["Website", "Mobile app", "Online store", "Custom platform"];
  const message = isRTL ? `مرحباً كويت ويبس، عندي فكرة مشروع ${services[selected]} وأبي نتكلم عن التفاصيل.` : `Hello Q8WEBS, I would like to discuss a project: ${services[selected]} and would love to discuss it.`;
  const Arrow = isRTL ? ArrowUpLeft : ArrowUpRight;
  return <section id="contact" className="contact-section section-space"><div className="site-shell contact-layout"><div><p className="eyebrow"><span className="status-dot" />{isRTL ? "الفكرة منك، والبداية معانا" : "YOUR IDEA. OUR NEXT CHAPTER."}</p><h2>{isRTL ? <>خلّ فكرتك<br /><em>تشوف النور.</em></> : <>Let’s make<br /><em>something matter.</em></>}</h2><p>{isRTL ? "كل مشروع مميز يبدأ بمحادثة بسيطة. قول لنا شنو في بالك." : "Every great project starts with a conversation. Tell us what you have in mind."}</p><a className="contact-email" href="mailto:info@q8webs.com">info@q8webs.com<Arrow size={22} /></a></div><div className="contact-panel"><span className="contact-question">{isRTL ? "شنو ودك نبني؟" : "What would you like to build?"}</span><div className="contact-options" role="group" aria-label={isRTL ? "نوع المشروع" : "Project type"}>{services.map((service, i) => <button key={service} aria-pressed={i === selected} onClick={() => setSelected(i)}>{service}{i === selected && <Check size={16} />}</button>)}</div><a href={`https://wa.me/96555512344?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="button-primary contact-submit">{isRTL ? "نبدأ المحادثة على واتساب" : "Let’s talk on WhatsApp"}<Arrow size={20} /></a><div className="contact-note"><span dir="ltr">+965 5551 2344</span><span>{isRTL ? "الكويت والخليج" : "KUWAIT & THE GULF"}</span></div></div></div></section>;
}
