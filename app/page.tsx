import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyQ8Webs from "@/components/WhyQ8Webs";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-900">
      {/* Header Navigation */}
      <Header />
      
      {/* Premium Light-Theme Hero */}
      <Hero />
      
      {/* Main Content Sections */}
      <div className="relative z-30 bg-[#f8fafc]">
        <Services />
        <WhyQ8Webs />
        <Portfolio />
        <Process />
        <ContactCTA />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
