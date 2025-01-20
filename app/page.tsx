import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      <Hero />
      <About />
      <Testimonials />
    </div>
  );
}