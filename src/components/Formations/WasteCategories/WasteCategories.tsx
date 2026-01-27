import { ArrowRight } from "lucide-react";

const WasteCategories = () => {
  const categories = [
    {
      id: 'bois',
      name: 'BOIS',
      color: 'bg-amber-700',
      icon: '♻️',
      description: 'Meubles, planches, palettes'
    },
    {
      id: 'metal',
      name: 'MÉTAL',
      color: 'bg-red-600',
      icon: '🔧',
      description: 'Canettes, outils, ferraille'
    },
    {
      id: 'papier',
      name: 'PAPIER',
      color: 'bg-blue-500',
      icon: '📄',
      description: 'Journaux, cartons, magazines'
    },
    {
      id: 'plastique',
      name: 'PLASTIQUE',
      color: 'bg-yellow-500',
      icon: '🍾',
      description: 'Bouteilles, sacs, emballages'
    },
    {
      id: 'verre',
      name: 'VERRE',
      color: 'bg-green-600',
      icon: '🍷',
      description: 'Bouteilles, bocaux, vitres'
    },
    {
      id: 'ordures',
      name: 'ORDURES',
      color: 'bg-gray-800',
      icon: '🗑️',
      description: 'Déchets non recyclables'
    }
  ];

  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {/* Catégories d'icônes */}
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer"
            >
              <div className={`${category.color} aspect-square rounded-2xl p-6 flex flex-col items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                <div className="text-5xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-bold text-center">{category.name}</h3>
              </div>
              <p className="text-center text-sm text-gray-600 mt-3 px-2">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Image des poubelles colorées */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1628863353691-0071c8c1874c?w=1400"
            alt="Poubelles de recyclage colorées"
            className="w-full h-auto object-cover"
          />
          <div className="bg-white p-6 flex items-center justify-end gap-2 text-green-600 font-medium">
            <span>Découvrir</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};


export default WasteCategories ;