import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import Features6 from "@/components/features-6";
import Features9 from "@/components/features-9";
import ContentSection from "@/components/content-section";
import ContentSection2 from "@/components/content-section-2";
import StatsSection from "@/components/stats-section";
import Testimonials from "@/components/testimonials";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <Features6 />
      <ContentSection />
      <ContentSection2 />
      <StatsSection />
      <Features9 />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
