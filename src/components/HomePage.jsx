"use client";

import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Details from "@/components/Details";
import Footer from "./Footer";
import { useState } from "react";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="flex flex-col min-h-screen text-muted-foreground">
      <Header />
      <div className="flex flex-1  ">
        <div className="grid grid-cols-1 md:grid-cols-3 text-muted-foreground w-full border-t">
          <About />
          <Projects setSelectedProject={setSelectedProject} />
          <Details selectedProject={selectedProject} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
