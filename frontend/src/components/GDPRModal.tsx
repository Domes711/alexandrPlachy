import { useEffect } from "react";

interface GDPRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GDPRModal({ isOpen, onClose }: GDPRModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-4xl rounded-lg shadow-2xl z-10 animate-[fadeIn_0.3s_ease-in-out] max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-secondary/10 hover:border-secondary/20 border border-transparent transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="p-6 md:p-8 lg:p-12 overflow-y-auto max-h-[90vh]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
              <svg
                className="w-7 h-7 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Ochrana osobních údajů
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Úvod */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">1.</span> Základní ustanovení
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Alexandr Plachý, se sídlem v České republice, IČO: [IČO] (dále
                jen "správce") zpracovává osobní údaje v souladu s nařízením
                Evropského parlamentu a Rady{" "}
                <span className="font-semibold text-secondary">
                  (EU) 2016/679
                </span>{" "}
                ze dne 27. dubna 2016, o ochraně fyzických osob v souvislosti se
                zpracováním osobních údajů a o volném pohybu těchto údajů
                (obecné nařízení o ochraně osobních údajů - dále jen{" "}
                <span className="font-semibold text-secondary">"GDPR"</span>) a{" "}
                <span className="font-semibold text-secondary">
                  zákonem č. 110/2019 Sb.
                </span>
                , o zpracování osobních údajů.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Tento dokument Vás informuje o tom, jak zpracováváme Vaše osobní
                údaje, jaká máte práva a jak je můžete uplatnit.
              </p>
            </section>

            {/* Správce */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">2.</span> Správce osobních
                údajů
              </h2>
              <div className="bg-secondary/5 border-l-4 border-secondary p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong className="text-secondary">Jméno:</strong> Alexandr
                  Plachý
                </p>
                <p className="text-gray-700 mb-2">
                  <strong className="text-secondary">E-mail:</strong>{" "}
                  <a
                    href="mailto:plachy@j-mreality.cz"
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    plachy@j-mreality.cz
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong className="text-secondary">Telefon:</strong>{" "}
                  <a
                    href="tel:+420608657995"
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    +420 608 657 995
                  </a>
                </p>
              </div>
            </section>

            {/* Účel zpracování */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">3.</span> Účel zpracování
                osobních údajů
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vaše osobní údaje zpracováváme za následujícími účely:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Poskytování realitních služeb</strong> -
                  zprostředkování prodeje, pronájmu nebo výkupu nemovitostí
                </li>
                <li>
                  <strong>Komunikace</strong> - odpovědi na Vaše dotazy a
                  poskytování informací o našich službách
                </li>
                <li>
                  <strong>Plnění smlouvy</strong> - uzavírání a plnění smluv o
                  poskytování realitních služeb
                </li>
                <li>
                  <strong>Marketing</strong> - zasílání obchodních sdělení
                  (pouze se souhlasem)
                </li>
                <li>
                  <strong>Plnění právních povinností</strong> - archivace
                  dokumentů dle platných právních předpisů
                </li>
              </ul>
            </section>

            {/* Právní základ */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">4.</span> Právní základ
                zpracování
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Osobní údaje zpracováváme na základě:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Plnění smlouvy</strong> (čl. 6 odst. 1 písm. b) GDPR)
                  - pro poskytování sjednaných služeb
                </li>
                <li>
                  <strong>Oprávněný zájem</strong> (čl. 6 odst. 1 písm. f) GDPR)
                  - pro ochranu našich práv a zlepšování služeb
                </li>
                <li>
                  <strong>Souhlas</strong> (čl. 6 odst. 1 písm. a) GDPR) - pro
                  marketingové účely
                </li>
                <li>
                  <strong>Plnění právních povinností</strong> (čl. 6 odst. 1
                  písm. c) GDPR) - archivace dokumentů
                </li>
              </ul>
            </section>

            {/* Rozsah údajů */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">5.</span> Rozsah zpracovávaných
                údajů
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Zpracováváme následující osobní údaje:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Jméno a příjmení</li>
                <li>E-mailová adresa</li>
                <li>Telefonní číslo</li>
                <li>Adresa nemovitosti (při zprostředkování)</li>
                <li>Identifikační údaje (pro uzavření smlouvy)</li>
                <li>Bankovní spojení (pro finanční transakce)</li>
              </ul>
            </section>

            {/* Doba uložení */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">6.</span> Doba uložení osobních
                údajů
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Osobní údaje uchováváme po dobu:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Smluvní vztah</strong> - po dobu trvání smlouvy a 3
                  roky po jejím ukončení (záruční lhůta)
                </li>
                <li>
                  <strong>Účetní dokumenty</strong> - 10 let dle zákona o
                  účetnictví
                </li>
                <li>
                  <strong>Marketingové účely</strong> - do odvolání souhlasu,
                  max. 5 let
                </li>
                <li>
                  <strong>Poptávky</strong> - 2 roky od posledního kontaktu
                </li>
              </ul>
            </section>

            {/* Příjemci */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">7.</span> Příjemci osobních
                údajů
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vaše osobní údaje můžeme předávat:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Zpracovatelům IT služeb (hosting, e-mail)</li>
                <li>Účetním a právním poradcům</li>
                <li>Notářům a advokátům (při uzavírání smluv)</li>
                <li>Státním orgánům (na základě zákonné povinnosti)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Osobní údaje nepředáváme do třetích zemí mimo EU.
              </p>
            </section>

            {/* Práva subjektů */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">8.</span> Vaše práva
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                V souvislosti se zpracováním osobních údajů máte následující
                práva:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Právo na přístup</strong> - máte právo získat
                  informace o zpracování Vašich osobních údajů
                </li>
                <li>
                  <strong>Právo na opravu</strong> - můžete požádat o opravu
                  nesprávných údajů
                </li>
                <li>
                  <strong>Právo na výmaz</strong> - za určitých podmínek můžete
                  požádat o smazání údajů
                </li>
                <li>
                  <strong>Právo na omezení zpracování</strong> - můžete požádat
                  o dočasné omezení zpracování
                </li>
                <li>
                  <strong>Právo na přenositelnost</strong> - máte právo získat
                  své údaje ve strukturovaném formátu
                </li>
                <li>
                  <strong>Právo vznést námitku</strong> - můžete vznést námitku
                  proti zpracování
                </li>
                <li>
                  <strong>Právo odvolat souhlas</strong> - souhlas můžete
                  kdykoliv odvolat
                </li>
              </ul>
              <div className="bg-secondary/5 border-l-4 border-secondary p-4 rounded-lg mt-4">
                <p className="text-gray-700 leading-relaxed">
                  Svá práva můžete uplatnit kontaktováním správce na výše
                  uvedených kontaktech. Máte také právo podat stížnost u{" "}
                  <span className="font-semibold text-secondary">
                    Úřadu pro ochranu osobních údajů
                  </span>{" "}
                  (
                  <a
                    href="https://www.uoou.cz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors underline"
                  >
                    www.uoou.cz
                  </a>
                  ).
                </p>
              </div>
            </section>

            {/* Zabezpečení */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">9.</span> Zabezpečení osobních
                údajů
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Přijali jsme vhodná technická a organizační opatření k ochraně
                osobních údajů před neoprávněným nebo protiprávním zpracováním a
                před náhodnou ztrátou, zničením nebo poškozením. Přístup k
                osobním údajům mají pouze oprávněné osoby, které jsou vázány
                mlčenlivostí.
              </p>
            </section>

            {/* Závěr */}
            <section className="mb-4">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">10.</span> Závěrečná ustanovení
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Tyto zásady ochrany osobních údajů jsou platné od 1. ledna 2025.
                Správce si vyhrazuje právo tyto zásady aktualizovat. Aktuální
                verze je vždy dostupná na našich webových stránkách.
              </p>
            </section>
          </div>

          {/* Close Button */}
          <div className="mt-8 flex justify-center">
            <button onClick={onClose} className="btn-primary px-12">
              Zavřít
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
