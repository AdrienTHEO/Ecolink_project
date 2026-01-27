
import  { useState } from 'react';
import CollectorCard from './components/CollectorCard';


const collectors = [
  {
    id: 1,
    name: "Laptop",
    realName: "Pk17",
    location: "Douala, Akwa",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    rating: 4.9,
    collections: 1240,
    verified: true,
    specialty: "Plastique & Métal"
  },
  {
    id: 2,
    name: "Perig",
    realName: "Deido",
    location: "Douala, Deido",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    rating: 4.8,
    collections: 980,
    verified: true,
    specialty: "Organique & Verre"
  },
  {
    id: 3,
    name: "Joan",
    realName: "Yassa",
    location: "Douala, Yassa",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    rating: 5.0,
    collections: 1560,
    verified: true,
    specialty: "Électronique"
  },
  {
    id: 4,
    name: "Adrien",
    realName: "Bonamoussadi",
    location: "Douala, Bonamoussadi",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    rating: 4.7,
    collections: 856,
    verified: true,
    specialty: "Papier & Carton"
  },
  {
    id: 5,
    name: "Junior",
    realName: "Akwa",
    location: "Douala, Akwa",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    rating: 4.9,
    collections: 1120,
    verified: true,
    specialty: "Mixte"
  },
  {
    id: 6,
    name: "Ivan",
    realName: "Ndokotti",
    location: "Douala, Ndokotti",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400",
    rating: 4.6,
    collections: 743,
    verified: true,
    specialty: "Textile"
  }
];

const RecommendedCollectors = () => {
  const [hoveredCollector, setHoveredCollector] = useState<number | null>(null);

  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Collecteurs recommandés</h2>
          <p className="text-xl text-gray-600">Des professionnels vérifiés près de chez vous</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectors.map((collector) => (
            <CollectorCard
              key={collector.id}
              collector={collector}
              isHovered={hoveredCollector === collector.id}
              onHover={() => setHoveredCollector(collector.id)}
              onLeave={() => setHoveredCollector(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedCollectors;
























/* import React from 'react';
import { CheckCircle } from 'lucide-react';

const RecomendedCollectors: React.FC = () => {
  const collectors = [
    { name: "Laptop", location: "Pk17", img: "/team/laptop.png" },
    { name: "Perig", location: "Deido", img: "/team/perig.png" },
    { name: "Joan", location: "Yassa", img: "/team/joan.png" },
    { name: "Adrien", location: "Bonamoussadi", img: "/team/adrien.png" },
    { name: "Junior", location: "Akwa", img: "/team/junior.png" },
    { name: "Ivan", location: "Ndokkoti", img: "/team/ivan.png" },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Collecteurs recommandés</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collectors.map((c, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                {c.name} <CheckCircle size={18} className="text-blue-900 fill-blue-900 text-white" />
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-semibold text-gray-700">{c.location}</p>
                <p className="text-sm text-gray-500 text-italic">Description du collecteur...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecomendedCollectors; */