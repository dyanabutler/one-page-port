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
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Main content grows to fill space, ensuring footer is at the bottom */}
      <div className="flex-grow flex">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          <About />
          <Projects setSelectedProject={setSelectedProject} />
          <Details selectedProject={selectedProject} />
        </div>
      </div>

     
      <Footer />
    </div>
  );
}
