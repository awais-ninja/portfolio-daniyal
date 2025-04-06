"use client";

import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import CV from "../components/CV";
import Modal from "../components/Modal";
import PortfolioDetails from "../components/PortfolioDetails";

export default function Home() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  const handlePortfolioClick = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setIsPortfolioModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <Hero setIsCVModalOpen={setIsCVModalOpen} />

      <About />

      <Skills />

      <Experience />

      <Portfolio handlePortfolioClick={handlePortfolioClick} />

      <Contact />

      {/* CV Modal */}
      <Modal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)}>
        <CV />
      </Modal>

      {/* Portfolio Modal */}
      <Modal
        isOpen={isPortfolioModalOpen}
        onClose={() => setIsPortfolioModalOpen(false)}
      >
        {selectedPortfolio && <PortfolioDetails project={selectedPortfolio} />}
      </Modal>
    </div>
  );
}
