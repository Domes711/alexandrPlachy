interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center mt-16"
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://storage.googleapis.com/milena-a/dron.mp4"
          type="video/mp4"
        />
      </video>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl m-2 lg:text-7xl font-bold mb-6 leading-tight whitespace-nowrap">
          <span className="text-secondary">Bezpečně</span> • Bezstarostě
          <span className="text-secondary"> • Bezplatně</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Neprezentujeme sebe, prezentujeme vaši nemovitost. <br />
          Férově, bez zbytečně velkých provizí.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <button onClick={onOpenModal} className="btn-primary text-lg">
            Chci prodat
          </button>
          <button
            onClick={onOpenModal}
            className="btn-secondary text-lg bg-white bg-opacity-20 backdrop-blur-sm border-white hover:bg-white text-primary"
          >
            Chci pronajmout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-secondary">
              400+
            </div>
            <div className="text-sm md:text-base text-gray-300 mt-2">
              Pronajatých nemovitostí
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-secondary">
              100+
            </div>
            <div className="text-sm md:text-base text-gray-300 mt-2">
              Prodaných nemovitostí
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-secondary">
              98%
            </div>
            <div className="text-sm md:text-base text-gray-300 mt-2">
              Zprostředkovaných prodejů
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
