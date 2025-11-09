import PropertyCard from './PropertyCard';
import type { Property } from '../types';

const properties: Property[] = [
  {
    id: 567460684,
    title: 'Pronájem rodinného domu 380 m²',
    location: 'Kosořu, okres Praha-západ',
    price: '74 900 Kč/měsíc',
    bedrooms: 5,
    bathrooms: 2,
    area: 380,
    imageUrl: 'https://d18-a.sdn.cz/d_18/c_img_of_A/nO1Ur3YPjBBJ2Z0BloEylATJ/ffaa.jpeg?fl=res,400,300,3|shr,,20|jpg,90',
    type: 'Pronájem',
  },
  {
    id: 3481719628,
    title: 'Prodej rodinného domu 268 m²',
    location: 'Praha 6 - Vokovice',
    price: '35 950 000 Kč',
    bedrooms: 6,
    bathrooms: 3,
    area: 268,
    imageUrl: 'https://d18-a.sdn.cz/d_18/c_img_of_A/nO1Ur3YPjBB25f7BqNEyk92s/c8ec.jpeg?fl=res,400,300,3|shr,,20|jpg,90',
    type: 'Prodej',
  },
  {
    id: 4070581580,
    title: 'Prodej bytu - novostavba',
    location: 'Praha - Čakovice',
    price: '12 207 113 Kč',
    bedrooms: 3,
    bathrooms: 2,
    area: 95,
    imageUrl: 'https://d18-a.sdn.cz/d_18/c_img_oe_B/kOzmiQlmfoBSGGoBFBEmwCTP/1a5f.jpeg?fl=res,400,300,3|shr,,20|jpg,90',
    type: 'Prodej',
  },
  {
    id: 4,
    title: 'Historická vila s parkem',
    location: 'Praha 5 - Smíchov',
    price: '45 000 000 Kč',
    bedrooms: 7,
    bathrooms: 5,
    area: 480,
    imageUrl: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Prodej',
  },
  {
    id: 5,
    title: 'Prostorný loft v centru',
    location: 'Praha 7 - Holešovice',
    price: '9 800 000 Kč',
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    imageUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Pronájem',
  },
  {
    id: 6,
    title: 'Nový byt se zahradou',
    location: 'Praha 4 - Podolí',
    price: '15 200 000 Kč',
    bedrooms: 4,
    bathrooms: 2,
    area: 165,
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Prodej',
  },
];

const PropertyList = () => {
  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Aktuální nabídka
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vyberte si z našeho portfolia kvalitních nemovitostí v atraktivních
            lokalitách. Každá nemovitost je pečlivě vybrána pro náročné klienty.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary">Zobrazit více nemovitostí</button>
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
