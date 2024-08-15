"use client";
import { useState } from "react";
import { navItems } from "@/data/index";
import Hero from "@/components/Hero";
import FloatingNav from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import Sidebar from "@/components/ui/Sidebar";
import Parallax from "@/components/ui/Parallax";
import Contact from "@/components/Contact";

export default function Home() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [isContactInfoOpen, setContactInfoOpen] = useState(false);

  const toggleNavbar = () => {
    if (isContactInfoOpen) {
      setContactInfoOpen(false);
    }
    setNavbarOpen(!isNavbarOpen);
  };

  const toggleContactInfo = () => {
    if (isNavbarOpen) {
      setNavbarOpen(false);
    }
    setContactInfoOpen(!isContactInfoOpen);
  };

  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip w-full">
      <div className="max-w-7xl">
        <FloatingNav
          navItems={navItems}
          isNavbarOpen={isNavbarOpen}
          toggleNavbar={toggleNavbar}
        />
        <Sidebar
          isContactInfoOpen={isContactInfoOpen}
          toggleContactInfo={toggleContactInfo}
        />
        <Hero />
        <Grid />
      </div>
      <div className="w-full">
        <Parallax type="services" />
      </div>
      <div className="max-w-7xl">
        <TechStack />
        <RecentProjects />
        <Clients />
        <Experience />
        <Process />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
