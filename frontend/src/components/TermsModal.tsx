import { useEffect } from "react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Podmínky použití
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Úvod */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">1.</span> Úvodní ustanovení
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tyto podmínky použití upravují používání webových stránek
                provozovaných{" "}
                <span className="font-semibold text-secondary">
                  Alexandr Plachý
                </span>
                , se sídlem v České republice (dále jen "poskytovatel").
              </p>
              <p className="text-gray-700 leading-relaxed">
                Používáním těchto webových stránek vyjadřujete souhlas s těmito
                podmínkami použití. Pokud s podmínkami nesouhlasíte, webové
                stránky nepoužívejte.
              </p>
            </section>

            {/* Vymezení pojmů */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">2.</span> Vymezení pojmů
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Poskytovatel</strong> - Alexandr Plachý, provozovatel
                  webových stránek a poskytovatel realitních služeb
                </li>
                <li>
                  <strong>Uživatel</strong> - návštěvník nebo klient využívající
                  webové stránky nebo služby poskytovatele
                </li>
                <li>
                  <strong>Služby</strong> - realitní služby včetně
                  zprostředkování prodeje, pronájmu, výkupu nemovitostí a
                  související poradenství
                </li>
                <li>
                  <strong>Webové stránky</strong> - internetové stránky
                  dostupné na doméně provozovatele
                </li>
              </ul>
            </section>

            {/* Poskytované služby */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">3.</span> Poskytované služby
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Poskytovatel nabízí následující služby:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Zprostředkování prodeje nemovitostí</strong> -
                  kompletní servis od ocenění po předání klíčů
                </li>
                <li>
                  <strong>Zprostředkování pronájmu</strong> - hledání nájemníků
                  a správa nemovitostí
                </li>
                <li>
                  <strong>Výkup nemovitostí</strong> - rychlé řešení prodeje
                  nemovitosti
                </li>
                <li>
                  <strong>Právní poradenství</strong> - konzultace v oblasti
                  nemovitostního práva
                </li>
                <li>
                  <strong>Advokátní úschova</strong> - bezpečné uchování
                  finančních prostředků
                </li>
                <li>
                  <strong>Financování</strong> - pomoc se zajištěním hypotéky
                  nebo úvěru
                </li>
              </ul>
            </section>

            {/* Práva a povinnosti uživatele */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">4.</span> Práva a povinnosti
                uživatele
              </h2>
              <div className="bg-secondary/5 border-l-4 border-secondary p-4 rounded-lg mb-4">
                <p className="text-gray-700 font-semibold mb-2">
                  Uživatel má právo:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Požadovat poskytnutí informací o nabízených službách</li>
                  <li>Kdykoli odstoupit od smluvního vztahu</li>
                  <li>Požadovat ochranu osobních údajů dle GDPR</li>
                  <li>Podávat připomínky a stížnosti na kvalitu služeb</li>
                </ul>
              </div>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-lg">
                <p className="text-gray-700 font-semibold mb-2">
                  Uživatel je povinen:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Poskytovat pravdivé a aktuální informace</li>
                  <li>
                    Nepoužívat webové stránky k nezákonným nebo neetickým účelům
                  </li>
                  <li>Respektovat autorská práva k obsahu webových stránek</li>
                  <li>
                    Neposkytovat třetím stranám přístupové údaje (pokud existují)
                  </li>
                </ul>
              </div>
            </section>

            {/* Smluvní vztah */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">5.</span> Smluvní vztah
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Smluvní vztah mezi poskytovatelem a uživatelem vzniká:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Podpisem <strong>zprostředkovatelské smlouvy</strong> na
                  prodej nebo pronájem nemovitosti
                </li>
                <li>
                  Uzavřením <strong>smlouvy o poskytování služeb</strong> v
                  oblasti právního poradenství nebo financování
                </li>
                <li>
                  Písemným nebo emailovým <strong>potvrzením objednávky</strong>{" "}
                  služby
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Podmínky konkrétní smlouvy jsou stanoveny v samostatném
                smluvním dokumentu a mají přednost před těmito všeobecnými
                podmínkami.
              </p>
            </section>

            {/* Ceny a platební podmínky */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">6.</span> Ceny a platební
                podmínky
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Všechny ceny služeb jsou sjednávány individuálně a jsou uvedeny
                v konkrétní smlouvě nebo nabídce.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Provize za zprostředkování</strong> - stanovena
                  procentem z prodejní nebo nájemní ceny
                </li>
                <li>
                  <strong>Poplatky za služby</strong> - pevná částka nebo hodinová
                  sazba dle typu služby
                </li>
                <li>
                  <strong>Platební podmínky</strong> - obvykle splatnost do 14
                  dnů od vystavení faktury
                </li>
                <li>
                  <strong>Provize při prodeji</strong> - splatná při podpisu
                  kupní smlouvy nebo při předání nemovitosti
                </li>
              </ul>
            </section>

            {/* Odpovědnost */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">7.</span> Omezení odpovědnosti
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Poskytovatel nenese odpovědnost za:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Nepravdivé nebo neúplné informace poskytnuté uživatelem
                </li>
                <li>
                  Škody vzniklé v důsledku nesprávného užívání webových stránek
                </li>
                <li>
                  Dočasnou nedostupnost webových stránek z důvodu údržby nebo
                  technických problémů
                </li>
                <li>
                  Jednání třetích stran (kupující, prodávající, nájemci) mimo
                  rámec zprostředkovatelské činnosti
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Poskytovatel postupuje při zprostředkování s odbornou péčí a v
                souladu se zákonem č. 39/2020 Sb., o realitním zprostředkování.
              </p>
            </section>

            {/* Autorská práva */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">8.</span> Autorská práva
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Veškerý obsah webových stránek včetně textů, fotografií, grafiky
                a designu je chráněn autorským právem a je majetkem
                poskytovatele nebo třetích stran, které poskytly souhlas k
                použití.
              </p>
              <div className="bg-secondary/5 border-l-4 border-secondary p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-secondary">Zakázáno:</strong>{" "}
                  Kopírování, šíření, úprava nebo jakékoli jiné použití obsahu
                  bez písemného souhlasu poskytovatele.
                </p>
              </div>
            </section>

            {/* Reklamace */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">9.</span> Reklamace a stížnosti
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                V případě nespokojenosti se službami může uživatel podat
                reklamaci:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Písemně</strong> - na adresu poskytovatele
                </li>
                <li>
                  <strong>Emailem</strong> - plachy@j-mreality.cz
                </li>
                <li>
                  <strong>Telefonicky</strong> - +420 608 657 995
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Poskytovatel se zavazuje vyřídit reklamaci do{" "}
                <span className="font-semibold text-secondary">30 dnů</span> od
                jejího doručení a informovat uživatele o způsobu vyřízení.
              </p>
            </section>

            {/* Závěrečná ustanovení */}
            <section className="mb-4">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary/30">
                <span className="text-secondary">10.</span> Závěrečná ustanovení
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tyto podmínky použití nabývají účinnosti dnem{" "}
                <span className="font-semibold text-secondary">
                  1. ledna 2025
                </span>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Poskytovatel si vyhrazuje právo tyto podmínky změnit. Aktuální
                znění je vždy dostupné na webových stránkách.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Vztahy těmito podmínkami neupravené se řídí právním řádem České
                republiky, zejména{" "}
                <span className="font-semibold text-secondary">
                  občanským zákoníkem (zákon č. 89/2012 Sb.)
                </span>{" "}
                a{" "}
                <span className="font-semibold text-secondary">
                  zákonem o realitním zprostředkování (zákon č. 39/2020 Sb.)
                </span>
                .
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
