import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-white/5 py-12 text-center md:text-right">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo and Info */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-3xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
            <span className="text-primary">Q8</span>Web
          </Link>
          <p className="text-muted text-sm max-w-xs">
            حلول مواقع وتطبيقات احترافية في الكويت والخليج.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm font-medium text-gray-400">
          <Link href="#" className="hover:text-primary transition-colors">الرئيسية</Link>
          <Link href="#services" className="hover:text-primary transition-colors">خدماتنا</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">تواصل معنا</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 text-sm text-gray-400">
          <a href="tel:55512344" className="hover:text-white transition-colors" dir="ltr">
            +965 55512344
          </a>
          <a href="mailto:info@q8webs.com" className="hover:text-white transition-colors">
            info@q8webs.com
          </a>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-white/5 text-xs text-gray-500">
        © {new Date().getFullYear()} Q8Webs. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
