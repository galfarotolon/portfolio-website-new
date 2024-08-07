import { navItems } from "@/data/index";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import { TechStack } from "@/components/TechStack";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import Sidebar from "@/components/ui/Sidebar";
import Parallax from "@/components/ui/Parallax";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip w-full">
      <div className="max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Sidebar />
        <Hero />
        <Grid />
      </div>
      <div className="w-full">
        <Parallax type="services" />
      </div>
      <div className="max-w-7xl">
        <RecentProjects />
        <Clients />
        <Experience />
        <Process />
        <TechStack />
        <Footer />
      </div>
    </main>
  );
}
