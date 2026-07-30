import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import QuickActions from "../components/QuickActions/QuickActions";
import About from "../components/About/About";
import ProductCategories from "../components/ProductCategories/ProductCategories";
// Brochure section is temporarily disabled until the real company profile PDF is ready — see components/Brochure/Brochure.jsx
import ShareCard from "../components/ShareCard/ShareCard";
// Social Links section is temporarily disabled until real social profile URLs are ready — see components/SocialLinks/SocialLinks.jsx
import Location from "../components/Location/Location";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import FloatingWhatsApp from "../components/CTA/FloatingWhatsApp";
import StickyMobileBar from "../components/CTA/StickyMobileBar";
import CardSkeleton from "../components/ui/CardSkeleton";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-surface">
        <CardSkeleton />
      </div>
    );
  }

  return (
    <div className="has-sticky-cta min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <QuickActions />
        <About />
        <ProductCategories />
        <ShareCard />
        <Location />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileBar />
    </div>
  );
}
