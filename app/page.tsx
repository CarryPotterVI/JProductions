import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { TechStack } from "@/components/sections/tech-stack";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      <Hero />
      <About />^
      <TechStack />
      <Testimonials />
    </div>
  );
}