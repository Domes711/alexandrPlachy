import agentPhoto from "../assets/photos/agent-1.png";

interface AgentProfileProps {
  onOpenModal: () => void;
}

const AgentProfile = ({ onOpenModal }: AgentProfileProps) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Agent Image */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <img
                  src={agentPhoto}
                  alt="Alexandr Plachý"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-6 bg-secondary text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm">
                  Spokojených <br />
                  klientů
                </div>
              </div>
            </div>

            {/* Agent Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                Alexandr Plachý
              </h2>
              <p className="text-xl text-secondary mb-6">Realitní makléř</p>

              <div className="prose prose-lg mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  S více než 15 lety zkušeností v realitním trhu se specializuji
                  na zprostředkování prodeje a pronájmu kvalitních nemovitostí v
                  Praze a okolí.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Mým cílem je poskytnout klientům profesionální a osobní
                  přístup, který zajistí bezproblémový průběh celé transakce.
                  Důvěra, transparentnost a individuální péče jsou základem mé
                  práce.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Telefon</div>
                    <a
                      href="tel:+420608657995"
                      className="text-lg font-medium text-primary hover:text-secondary transition-colors"
                    >
                      +420 608 657 995
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">E-mail</div>
                    <a
                      href="mailto:plachy@j-mreality.cz"
                      className="text-lg font-medium text-primary hover:text-secondary transition-colors"
                    >
                      plachy@j-mreality.cz
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Společnost</div>
                    <a
                      href="https://www.j-mreality.cz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-primary hover:text-secondary transition-colors"
                    >
                      J-M reality, finance
                    </a>
                  </div>
                </div>
              </div>

              <button onClick={onOpenModal} className="btn-primary mt-8">
                Domluvit schůzku
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentProfile;
