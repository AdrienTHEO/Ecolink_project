import { Info } from "lucide-react";

const RecyclingGuide = () => {
  const guides = [
    {
      id: 'bois',
      title: 'Bois',
      icon: '🪵',
      tips: [
        'Séparez le bois traité du bois naturel',
        'Retirez les clous et vis avant le recyclage',
        'Le bois peut être réutilisé pour du compost ou du chauffage',
        'Évitez le bois peint ou verni dans le compost'
      ]
    },
    {
      id: 'plastique',
      title: 'Plastique',
      icon: '♻️',
      tips: [
        'Rincez les contenants avant de les jeter',
        'Vérifiez le numéro de recyclage (1-7)',
        'Écrasez les bouteilles pour économiser de l\'espace',
        'Évitez de mélanger différents types de plastique'
      ]
    },
    {
      id: 'papier',
      title: 'Papier',
      icon: '📰',
      tips: [
        'Enlevez les agrafes et trombones',
        'Ne recyclez pas le papier gras ou sale',
        'Aplatissez les cartons pour gagner de la place',
        'Le papier déchiqueté doit être dans un sac transparent'
      ]
    },
    {
      id: 'verre',
      title: 'Verre',
      icon: '🥃',
      tips: [
        'Rincez les bocaux et bouteilles',
        'Retirez les bouchons et couvercles',
        'Séparez par couleur si demandé',
        'Ne mélangez pas avec la céramique ou la porcelaine'
      ]
    },
    {
      id: 'electronique',
      title: 'Électronique',
      icon: '💻',
      tips: [
        'Supprimez vos données personnelles',
        'Séparez les batteries et piles',
        'Apportez dans des points de collecte spécialisés',
        'Certains appareils peuvent être réparés ou donnés'
      ]
    }
  ];

  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comment recycler ?
          </h2>
          <p className="text-xl text-gray-600">
            Conseils et bien d'autres
          </p>
        </div>

        {/* Grille de guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="bg-linear-to-br from-gray-50 to-white border-2 border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* En-tête de la carte */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Info className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-3xl mb-1">{guide.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{guide.title}</h3>
                </div>
              </div>

              {/* Contenu - Liste de conseils */}
              <div className="space-y-4">
                {guide.tips.map((tip, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-linear-to-br from-green-500 to-emerald-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin de plus de conseils ?
          </h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Téléchargez notre guide complet de recyclage et devenez un expert en gestion des déchets
          </p>
          <button className="px-8 py-4 bg-white text-green-600 rounded-xl font-bold text-lg hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-lg">
            Télécharger le guide complet
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecyclingGuide;