import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AgentProfile from "./components/AgentProfile";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <AgentProfile />
      <Footer />
    </div>
  );
}

export default App;
