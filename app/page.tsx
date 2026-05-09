import Q8WebHeroSequence from "@/components/Q8WebHeroSequence";
import Services from "@/components/Services";
import WhyQ8Web from "@/components/WhyQ8Web";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <div className="bg-[#050505]">
      {/* Scroll-Linked 3D Image Sequence Hero */}
      <Q8WebHeroSequence />
      
      {/* Main Content Sections */}
      <div className="relative z-30 bg-[#050505]">
        <Services />
        <WhyQ8Web />
        <Portfolio />
        <Process />
        <ContactCTA />
      </div>
    </div>
  );
}
