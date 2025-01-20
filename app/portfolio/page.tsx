import { Projects } from "@/components/sections/projects";

export default function Portfolio() {
  return (
    <div className="container max-w-7xl mx-auto py-24">
      <h1 className="mb-16 text-center text-4xl font-bold uppercase tracking-wider">
        Latest Projects
      </h1>
      <Projects />
    </div>
  );
}