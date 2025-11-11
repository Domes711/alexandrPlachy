import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AgentProfile from "./components/AgentProfile";
import Footer from "./components/Footer";
import PoptavkaModal from "./components/PoptavkaModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header onOpenModal={handleOpenModal} />
      <Hero onOpenModal={handleOpenModal} />
      <Services onOpenModal={handleOpenModal} />
      <AgentProfile onOpenModal={handleOpenModal} />
      <Footer />
      <PoptavkaModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
