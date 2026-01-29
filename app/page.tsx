import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CustomerSupportSection from "@/components/CustomerSupportSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AccuracySection from "@/components/AccuracySection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CustomerSupportSection />
      <HowItWorksSection />
      <AccuracySection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
