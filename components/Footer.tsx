"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#f8fafc] border-t border-slate-100 py-12 text-center md:text-right">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo and Info */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center justify-center md:justify-start gap-2">
            <Logo size="sm" />
          </Link>
          <p className="text-slate-500 text-sm max-w-xs font-semibold leading-relaxed">
            حلول مواقع وتطبيقات إلكترونية احترافية مخصصة في الكويت والخليج.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm font-bold text-slate-600">
          <Link href="#" className="hover:text-sky-500 transition-colors">الرئيسية</Link>
          <Link href="#services" className="hover:text-sky-500 transition-colors">خدماتنا</Link>
          <Link href="#portfolio" className="hover:text-sky-500 transition-colors">أعمالنا</Link>
          <Link href="#why-us" className="hover:text-sky-500 transition-colors">من نحن</Link>
          <Link href="#contact" className="hover:text-sky-500 transition-colors">تواصل معنا</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 text-sm text-slate-600 font-semibold">
          <a href="tel:55512344" className="hover:text-slate-900 transition-colors" dir="ltr">
            +965 55512344
          </a>
          <a href="mailto:info@q8webs.com" className="hover:text-slate-900 transition-colors">
            info@q8webs.com
          </a>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-slate-100 text-xs text-slate-400 font-semibold">
        © {new Date().getFullYear()} Q8WEBS. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
