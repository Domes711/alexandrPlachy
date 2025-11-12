import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AgentProfile from "./components/AgentProfile";
import Footer from "./components/Footer";
import PoptavkaModal, { type ServiceType } from "./components/PoptavkaModal";
import GDPRModal from "./components/GDPRModal";
import TermsModal from "./components/TermsModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGDPRModalOpen, setIsGDPRModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [serviceType, setServiceType] = useState<ServiceType>("meeting");

  const handleOpenModal = (service: ServiceType) => {
    setServiceType(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenGDPRModal = () => {
    setIsGDPRModalOpen(true);
  };

  const handleCloseGDPRModal = () => {
    setIsGDPRModalOpen(false);
  };

  const handleOpenTermsModal = () => {
    setIsTermsModalOpen(true);
  };

  const handleCloseTermsModal = () => {
    setIsTermsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header onOpenModal={handleOpenModal} />
      <Hero onOpenModal={handleOpenModal} />
      <Services onOpenModal={handleOpenModal} />
      <AgentProfile onOpenModal={handleOpenModal} />
      <Footer
        onOpenGDPRModal={handleOpenGDPRModal}
        onOpenTermsModal={handleOpenTermsModal}
      />
      <PoptavkaModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        serviceType={serviceType}
      />
      <GDPRModal isOpen={isGDPRModalOpen} onClose={handleCloseGDPRModal} />
      <TermsModal isOpen={isTermsModalOpen} onClose={handleCloseTermsModal} />
    </div>
  );
}

export default App;
