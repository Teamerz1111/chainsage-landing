import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Personas from "@/components/sections/personas";
import WhyImportant from "@/components/sections/why-important";
import HowItWorks from "@/components/sections/how-it-works";
import Features from "@/components/sections/features";
import LiveAlerts from "@/components/sections/live-alerts";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-cyber-black text-gray-900 dark:text-white transition-colors duration-300">
      <Navigation />
      <Hero />
      <Personas />
      <WhyImportant />
      <HowItWorks />
      <Features />
      <LiveAlerts />
      <Team />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
