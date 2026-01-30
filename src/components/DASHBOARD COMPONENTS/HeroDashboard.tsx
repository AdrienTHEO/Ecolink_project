import React from 'react';
import { Camera, MapPin, TrendingUp, Leaf, Award, ArrowRight } from 'lucide-react';

const HeroDashboardComponent: React.FC = () => {
  // Ces données viendront plus tard de ton backend/state
  const stats = [
    { label: 'Déchets collectés', value: '128 kg', icon: <Leaf className="text-green-600" />, color: 'bg-green-100' },
    { label: 'Points Verts', value: '1,250', icon: <Award className="text-orange-600" />, color: 'bg-orange-100' },
    { label: 'Impact CO2', value: '-14 kg', icon: <TrendingUp className="text-blue-600" />, color: 'bg-blue-100' },
  ];

  return (
    <div className="w-full bg-gray-50 p-4 md:p-8 space-y-8">
      
      {/* --- SECTION BIENVENUE & ACTION IA --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Carte de Bienvenue (Design inspiré de ton document) */}
        <div className="lg:col-span-2 bg-linear-to-r from-[#27ae60] to-[#2ecc71] rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 space-y-4 max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold">Bonjour, JoanHack ! 👋</h2>
            <p className="text-green-50 opacity-90 text-lg">
              Prêt à transformer vos déchets en opportunités aujourd'hui ? 
              Utilisez notre IA pour identifier vos objets.
            </p>
            <button className="flex items-center space-x-2 bg-white text-[#27ae60] px-6 py-3 rounded-2xl font-bold hover:bg-green-50 transition-all shadow-md group">
              <Camera size={20} />
              <span> Regardez Nos Formations Disponible </span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Illustration abstraite en fond */}
          <div className="absolute -right-5 -bottom-5 opacity-20 transform rotate-12">
            <Leaf size={200} />
          </div>
        </div>

        {/* Carte Action Rapide : Localisation */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
              <MapPin className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Collecteur Proche</h3>
            <p className="text-gray-500 text-sm">Un collecteur est actuellement à 500m de votre position à Deido.</p>
          </div>
          <button className="w-full mt-6 py-3 border-2 border-gray-100 rounded-2xl font-semibold text-gray-700 hover:bg-gray-50 transition">
            Voir la carte
          </button>
        </div>
      </div>

      {/* --- SECTION STATISTIQUES (Impact Socio-Économique) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center space-x-4 hover:scale-105 transition-transform">
            <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- SECTION DERNIÈRES ACTIVITÉS / HISTORIQUE --- */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-800">Activités récentes</h3>
          <button className="text-[#27ae60] text-sm font-bold hover:underline">Voir tout</button>
        </div>
        <div className="divide-y divide-gray-50">
          {[1, 2].map((item) => (
            <div key={item} className="p-6 flex items-center justify-between hover:bg-gray-50 transition">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                  ♻️
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm md:text-base">Collecte de bouteilles plastiques</p>
                  <p className="text-gray-400 text-xs">Aujourd'hui à 10:45 • Akwa, Douala</p>
                </div>
              </div>
              <span className="text-green-600 font-bold">+50 pts</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HeroDashboardComponent;