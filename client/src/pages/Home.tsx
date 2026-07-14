import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import Units from "@/components/Units";
import InterestMap from "@/components/InterestMap";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Introduction />
        <Gallery />
        <Amenities />
        <Units />
        <InterestMap />
        <ContactSection />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
