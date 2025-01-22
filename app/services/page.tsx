import { Process } from "@/components/sections/process";
import { Pricing } from "@/components/sections/pricing/index";
import { ServicesGrid } from "@/components/sections/services/services-grid";

export default function Services() {
  return (
    <div className="relative overflow-hidden">
      {/* Services Section */}
      <section id="services" className="relative min-h-[50vh] overflow-hidden py-24">
        <div className="fixed inset-0 bg-gradient-to-br from-orange-400/30 via-background/50 to-orange-600/30" />
        
        <div className="container max-w-6xl mx-auto px-6 sm:px-8 relative">
          <h1 className="mb-16 text-center text-4xl font-bold uppercase tracking-wider">Meine Leistungen</h1>
          <ServicesGrid />
        </div>
      </section>

      {/* Process Section */}
      <Process />

      {/* Pricing Section */}
      <Pricing />
    </div>
  );
}