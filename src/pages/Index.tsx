
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <FAQ />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
