import { MessageCircle, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-white/5 border border-white/10 p-12 md:p-20 rounded-[2rem] backdrop-blur-xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            خل مشروعك الرقمي <span className="text-primary">يبدأ بشكل أقوى</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            سواء تحتاج موقع، تطبيق، متجر، أو نظام خاص — Q8Web جاهزة تبني لك تجربة رقمية احترافية.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/96555512344"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full sm:w-auto justify-center px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-background font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(56,189,248,0.3)]"
            >
              <MessageCircle size={24} />
              <span>واتساب: 55512344</span>
            </a>
            
            <a
              href="mailto:info@q8web.com"
              className="flex items-center gap-3 w-full sm:w-auto justify-center px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-lg transition-all hover:scale-105 active:scale-95"
            >
              <Mail size={24} />
              <span dir="ltr">info@q8web.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
