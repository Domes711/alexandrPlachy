import type { ServiceType } from "./PoptavkaModal";

interface ServicesProps {
  onOpenModal: (serviceType: ServiceType) => void;
}

const Services = ({ onOpenModal }: ServicesProps) => {
  const services: Array<{
    title: string;
    description: string;
    image: string;
    buttonText: string;
    serviceType: ServiceType;
  }> = [
    {
      title: "Prodej",
      description:
        "Kompletní služby při prodeji vaší nemovitosti. Zajistíme profesionální ocenění, marketing a celý proces prodeje až po předání klíčů.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      buttonText: "Sjednat prodej",
      serviceType: "sale",
    },
    {
      title: "Pronájem",
      description:
        "Pomůžeme vám najít spolehlivé nájemníky. Zajistíme kompletní administrativu, právní ošetření smluv a pravidelnou kontrolu nemovitosti.",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      buttonText: "Sjednat pronájem",
      serviceType: "rent",
    },
    {
      title: "Výkup",
      description:
        "Zastupujeme skupinu investorů. Rychlý a bezproblémový výkup nemovitostí. Nabízíme férovou cenu a vyřízení veškerých formalit do 30 dnů.",
      image:
        "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      buttonText: "Sjednat výkup",
      serviceType: "buyout",
    },
    {
      title: "Právní služby",
      description:
        "Komplexní právní poradenství v oblasti nemovitostí. Zajišťujeme kontrolu smluv, řešení sporů a zastoupení při jednáních.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      buttonText: "Sjednat právní služby",
      serviceType: "legal",
    },
    {
      title: "Advokátní úschova",
      description:
        "Bezpečné uchování finančních prostředků při transakci. Garantujeme ochranu zájmů obou stran a bezpečný převod vlastnictví.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      buttonText: "Sjednat advokátní úschovu",
      serviceType: "escrow",
    },
    {
      title: "Financování",
      description:
        "Pomůžeme vám zajistit optimální hypotéku nebo úvěr na nemovitost. Poradíme s výběrem banky a zajistíme nejlepší podmínky financování.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      buttonText: "Sjednat financování",
      serviceType: "financing",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Nabídka služeb
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Poskytujeme komplexní realitní služby šité na míru vašim potřebám. S
            námi je každá transakce bezpečná a profesionální.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-96"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${service.image}')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-200 mb-6 text-sm md:text-base">
                  {service.description}
                </p>
                <button
                  onClick={() => onOpenModal(service.serviceType)}
                  className="btn-primary w-full bg-secondary hover:bg-secondary/90 text-center"
                >
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
