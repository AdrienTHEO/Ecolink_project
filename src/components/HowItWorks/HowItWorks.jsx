import React from 'react';
import { Camera, Package, MapPin, Award } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: "Scannez vos déchets",
    description: "Prenez une photo ou scannez vos déchets avec notre IA"
  },
  {
    icon: Package,
    title: "Identification automatique",
    description: "Notre IA identifie le type de déchet et propose un traitement"
  },
  {
    icon: MapPin,
    title: "Trouvez un collecteur",
    description: "Localisez le collecteur le plus proche selon vos besoins"
  },
  {
    icon: Award,
    title: "Gagnez des points",
    description: "Cumulez des points verts échangeables à chaque collecte"
  }
];

const HowItWork = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
          <p className="text-xl text-gray-600">Une solution simple en 4 étapes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-linear-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;