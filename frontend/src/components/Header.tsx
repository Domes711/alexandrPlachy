import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              ALEXANDR <span className="text-secondary">PLACHÝ</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-secondary transition-colors"
            >
              Domů
            </a>
            <a
              href="#properties"
              className="text-gray-700 hover:text-secondary transition-colors"
            >
              Nabídka
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-secondary transition-colors"
            >
              O nás
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-secondary transition-colors"
            >
              Služby
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-secondary transition-colors"
            >
              Kontakt
            </a>
          </nav>

          {/* Contact Button */}
          <button className="hidden md:block btn-primary">
            Kontaktujte nás
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <a
              href="#home"
              className="block text-gray-700 hover:text-secondary transition-colors"
            >
              Domů
            </a>
            <a
              href="#properties"
              className="block text-gray-700 hover:text-secondary transition-colors"
            >
              Nabídka
            </a>
            <a
              href="#about"
              className="block text-gray-700 hover:text-secondary transition-colors"
            >
              O nás
            </a>
            <a
              href="#services"
              className="block text-gray-700 hover:text-secondary transition-colors"
            >
              Služby
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-secondary transition-colors"
            >
              Kontakt
            </a>
            <button className="btn-primary w-full">Kontaktujte nás</button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
