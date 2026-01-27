import React from 'react';
import { Recycle, Users, Leaf, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Recycle, value: "12,450", label: "Tonnes recyclées", color: "from-green-400 to-emerald-500" },
  { icon: Users, value: "8,340", label: "Utilisateurs actifs", color: "from-blue-400 to-cyan-500" },
  { icon: Leaf, value: "25,680", label: "Collectes réussies", color: "from-green-500 to-teal-500" },
  { icon: TrendingUp, value: "89%", label: "Taux de recyclage", color: "from-amber-400 to-orange-500" }
];

const Stats = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 bg-linear-to-br from-green-600 via-green-500 to-emerald-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Notre impact environnemental</h2>
          <p className="text-xl text-green-100">Ensemble, nous construisons un Cameroun plus propre</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className={`w-16 h-16 bg-linear-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-green-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;