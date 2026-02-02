import React from 'react';

interface CollectorDetailsProps {
  collector: {
    id: string;
    name: string;
    profileImage: string;
    rating: number;
    verified: boolean;
    status: 'Disponible' | 'Occupé' | 'Indisponible';
    description: string;
    location: string;
    vehicle: string;
    specialties: string[];
    stats: {
      collections: number;
      experience: string;
    };
    tarif: string;
    contact: string;
    workSchedule: {
      hours: string;
      days: string;
    };
    reviews: Array<{
      id: string;
      author: string;
      rating: number;
      comment: string;
      date: string;
    }>;
    clientStats: {
      totalClients: number;
      averageResponseTime: string;
      successRate: string;
    };
  };
  onClose: () => void;
}

const CollectorDetailsModal: React.FC<CollectorDetailsProps> = ({ collector, onClose }) => {
  const getStatusBadgeClasses = (status: string) => {
    switch (status) {
      case 'Disponible':
        return 'bg-emerald-100 text-emerald-700';
      case 'Occupé':
        return 'bg-gray-200 text-gray-700';
      case 'Indisponible':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      {/* Container élargi à max-w-6xl pour un aspect horizontal */}
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        
        {/* Header Compact */}
        <div className="bg-white border-b border-gray-100 p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
              {collector.profileImage}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-gray-900">{collector.name}</h2>
                {collector.verified && (
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
                <span className={`ml-2 px-3 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClasses(collector.status)}`}>
                  {collector.status}
                </span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-yellow-500">★</span>
                <span className="font-semibold text-gray-700">{collector.rating}/5</span>
                <span className="text-gray-400 ml-2">• {collector.location}</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-2">✕</button>
        </div>

        {/* Main Content: 3 Columns Layout */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-y-auto lg:overflow-visible">
          
          {/* Column 1: Identity & Schedule */}
          <div className="space-y-6">
            <section>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Informations</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700 p-3 bg-gray-50 rounded-xl">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">{collector.contact}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 p-3 bg-gray-50 rounded-xl">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">{collector.vehicle}</span>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Horaire</h3>
              <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4">
                <div className="flex items-center gap-2 text-emerald-700 mb-1 font-bold">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {collector.workSchedule.hours}
                </div>
                <p className="text-xs text-emerald-600/80 uppercase font-semibold">{collector.workSchedule.days}</p>
              </div>
            </section>
          </div>

          {/* Column 2: Content & Reviews (The widest part) */}
          <div className="lg:col-span-1 space-y-6">
            <section>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">À propos</h3>
              <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl">
                {collector.description}
              </p>
            </section>

            <section>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Spécialités</h3>
              <div className="flex flex-wrap gap-2">
                {collector.specialties.map((specialty, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs rounded-full font-medium shadow-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Derniers avis</h3>
              <div className="grid grid-cols-1 gap-3">
                {collector.reviews.slice(0, 2).map((review) => (
                  <div key={review.id} className="border border-gray-100 rounded-xl p-3 text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="font-bold text-gray-900">{review.author}</span>
                      <span className="text-[10px] text-gray-400">{review.date}</span>
                    </div>
                    <div className="flex text-[10px] mb-1">{renderStars(review.rating)}</div>
                    <p className="text-gray-600 line-clamp-2 italic">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Column 3: Stats & Conversion */}
          <div className="space-y-6">
             <section>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Tarification</h3>
              <div className="bg-emerald-600 rounded-2xl p-4 text-center text-white shadow-lg shadow-emerald-100">
                <div className="text-xs opacity-80 mb-1">Prix de base</div>
                <div className="text-3xl font-black">{collector.tarif}</div>
              </div>
            </section>

            <section>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Performance</h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { label: "Collectes", value: collector.clientStats.totalClients, icon: "📦" },
                  { label: "Réponse", value: collector.clientStats.averageResponseTime, icon: "⚡" },
                  { label: "Réussite", value: collector.clientStats.successRate, icon: "✅" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                    <span className="text-xs text-gray-500 flex items-center gap-2">
                      <span>{stat.icon}</span> {stat.label}
                    </span>
                    <span className="text-sm font-bold text-gray-900">{stat.value}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="flex flex-col gap-2 pt-2">
              <button className="w-full py-3 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 transition-all shadow-md shadow-emerald-100 flex items-center justify-center gap-2 text-sm">
                S'abonner au collecteur
              </button>
              <button className="w-full py-3 bg-white border-2 border-emerald-500 text-emerald-600 rounded-xl font-bold hover:bg-emerald-50 transition-all text-sm">
                Appeler
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CollectorDetailsModal;