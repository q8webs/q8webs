import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EditorialExperience from "@/components/EditorialExperience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="editorial-site">
      <Header />
      <main id="main-content">
        <Hero />
        <EditorialExperience />
      </main>
      <Footer />
    </div>
  );
}
