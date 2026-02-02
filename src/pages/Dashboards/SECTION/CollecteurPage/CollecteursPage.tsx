import React, { useState } from 'react';
import CollectorDetailsModal from './CollecteursDetails';

// Types
interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

interface Collector {
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
  reviews: Review[];
  clientStats: {
    totalClients: number;
    averageResponseTime: string;
    successRate: string;
  };
}

const CollecteursPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('Tous les types');
  const [selectedZone, setSelectedZone] = useState('Toutes les zones');
  const [selectedNote, setSelectedNote] = useState('Mieux notés');
  const [selectedCollector, setSelectedCollector] = useState<Collector | null>(null);

  // Données de démonstration
  const collectors: Collector[] = [
    {
      id: '1',
      name: 'Laptop',
      profileImage: '👤',
      rating: 4.65,
      verified: true,
      status: 'Disponible',
      description: 'Collecteur expérimenté spécialisé dans les déchets recyclables. Service rapide et fiable.',
      location: 'PK17',
      vehicle: 'Tricycle',
      specialties: ['Plastique', 'Papier', 'Métal'],
      stats: {
        collections: 200,
        experience: '2 ans'
      },
      tarif: '3000 FCFA / mois',
      contact: '+237 XXXXXXXXX',
      workSchedule: {
        hours: '07:00 - 18:00',
        days: 'Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi'
      },
      reviews: [
        {
          id: '1',
          author: 'Marie K.',
          rating: 5,
          comment: 'Service excellent, très ponctuel et professionnel.',
          date: '21/06/2025'
        },
        {
          id: '2',
          author: 'Paul M.',
          rating: 4,
          comment: 'Bon service, collecte rapide.',
          date: '20/06/2025'
        }
      ],
      clientStats: {
        totalClients: 200,
        averageResponseTime: '10 min',
        successRate: '98%'
      }
    },
    {
      id: '2',
      name: 'Joan',
      profileImage: '👤',
      rating: 3.25,
      verified: true,
      status: 'Occupé',
      description: 'Collecteur expérimenté spécialisé dans les déchets plastiques. Service rapide et fiable.',
      location: 'Yassa',
      vehicle: 'MOTO',
      specialties: ['Plastique', 'Papier', 'Métal'],
      stats: {
        collections: 150,
        experience: '3 ans'
      },
      tarif: '2500 FCFA / mois',
      contact: '+237 YYYYYYYYY',
      workSchedule: {
        hours: '08:00 - 17:00',
        days: 'Lundi, Mardi, Mercredi, Jeudi, Vendredi'
      },
      reviews: [
        {
          id: '1',
          author: 'Sophie D.',
          rating: 3,
          comment: 'Service correct mais parfois en retard.',
          date: '18/06/2025'
        }
      ],
      clientStats: {
        totalClients: 150,
        averageResponseTime: '15 min',
        successRate: '85%'
      }
    },
    {
      id: '3',
      name: 'Ivan',
      profileImage: '👤',
      rating: 4.65,
      verified: true,
      status: 'Occupé',
      description: 'Collecteur expérimenté spécialisé dans les déchets plastiques. Service rapide et fiable.',
      location: 'Nkoloulou',
      vehicle: 'CATCAT',
      specialties: ['Plastique', 'Papier', 'Métal'],
      stats: {
        collections: 120,
        experience: '2 ans'
      },
      tarif: '3000 FCFA / mois',
      contact: '+237 ZZZZZZZZZ',
      workSchedule: {
        hours: '07:00 - 18:00',
        days: 'Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi'
      },
      reviews: [
        {
          id: '1',
          author: 'Jean P.',
          rating: 5,
          comment: 'Excellent collecteur, toujours à l\'heure.',
          date: '19/06/2025'
        }
      ],
      clientStats: {
        totalClients: 120,
        averageResponseTime: '8 min',
        successRate: '97%'
      }
    },
    {
      id: '4',
      name: 'Adrien',
      profileImage: '👤',
      rating: 3.25,
      verified: true,
      status: 'Disponible',
      description: 'Collecteur expérimenté spécialisé dans les déchets plastiques. Service rapide et fiable.',
      location: 'PK8',
      vehicle: 'CAMION',
      specialties: ['Plastique', 'Papier', 'Métal'],
      stats: {
        collections: 180,
        experience: '1 an'
      },
      tarif: '2800 FCFA / mois',
      contact: '+237 AAAAAAAAA',
      workSchedule: {
        hours: '09:00 - 17:00',
        days: 'Lundi, Mercredi, Vendredi'
      },
      reviews: [
        {
          id: '1',
          author: 'Claire B.',
          rating: 3,
          comment: 'Service moyen.',
          date: '17/06/2025'
        }
      ],
      clientStats: {
        totalClients: 180,
        averageResponseTime: '20 min',
        successRate: '82%'
      }
    },
    {
      id: '5',
      name: 'HABIB',
      profileImage: '👤',
      rating: 4.65,
      verified: true,
      status: 'Disponible',
      description: 'Collecteur expérimenté spécialisé dans les déchets plastiques. Service rapide et fiable.',
      location: 'LOGPOM BANGOS',
      vehicle: 'Moto',
      specialties: ['Plastique', 'Papier', 'Métal'],
      stats: {
        collections: 220,
        experience: '4 ans'
      },
      tarif: '3200 FCFA / mois',
      contact: '+237 BBBBBBBBB',
      workSchedule: {
        hours: '06:00 - 19:00',
        days: 'Tous les jours'
      },
      reviews: [
        {
          id: '1',
          author: 'Thomas L.',
          rating: 5,
          comment: 'Le meilleur collecteur de la zone!',
          date: '22/06/2025'
        }
      ],
      clientStats: {
        totalClients: 220,
        averageResponseTime: '5 min',
        successRate: '99%'
      }
    },
    {
      id: '6',
      name: 'YENGUE',
      profileImage: '👤',
      rating: 2.65,
      verified: true,
      status: 'Occupé',
      description: 'Collecteur expérimenté spécialisé dans les déchets plastiques. Service rapide et fiable.',
      location: 'BASSONG',
      vehicle: 'Voiture',
      specialties: ['Plastique', 'Papier', 'Métal'],
      stats: {
        collections: 90,
        experience: '1 an'
      },
      tarif: '2500 FCFA / mois',
      contact: '+237 CCCCCCCCC',
      workSchedule: {
        hours: '08:00 - 16:00',
        days: 'Lundi, Mardi, Jeudi'
      },
      reviews: [
        {
          id: '1',
          author: 'Amina S.',
          rating: 2,
          comment: 'Plusieurs retards constatés.',
          date: '15/06/2025'
        }
      ],
      clientStats: {
        totalClients: 90,
        averageResponseTime: '25 min',
        successRate: '75%'
      }
    }
  ];

  // Calcul des statistiques
  const totalCollectorsActive = collectors.filter(c => c.status === 'Disponible').length;
  const averageRating = (collectors.reduce((sum, c) => sum + c.rating, 0) / collectors.length).toFixed(1);
  const satisfactionRate = 90; // Pourcentage de satisfaction

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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }

        .custom-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-size: 1.25rem;
          padding-right: 2.5rem;
        }
      `}</style>

      <div className={`max-w-7xl mx-auto transition-all duration-300`}>
        {/* Filters Section */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un collecteur..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
              />
              <svg
                className="absolute left-3 top-3 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="custom-select px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm text-gray-700"
            >
              <option>Tous les types</option>
              <option>Plastique</option>
              <option>Papier</option>
              <option>Métal</option>
              <option>Verre</option>
            </select>

            {/* Zone Filter */}
            <select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="custom-select px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm text-gray-700"
            >
              <option>Toutes les zones</option>
              <option>PK17</option>
              <option>Yassa</option>
              <option>Nkoloulou</option>
              <option>Akwa</option>
            </select>

            {/* Rating Filter */}
            <select
              value={selectedNote}
              onChange={(e) => setSelectedNote(e.target.value)}
              className="custom-select px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm text-gray-700"
            >
              <option>Mieux notés</option>
              <option>Note croissante</option>
              <option>Note décroissante</option>
            </select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
            <div className="text-4xl font-bold text-emerald-500 mb-2">{totalCollectorsActive}</div>
            <div className="text-sm text-gray-600 font-medium">Collecteurs actifs</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
            <div className="text-4xl font-bold text-emerald-500 mb-2">{averageRating}/5</div>
            <div className="text-sm text-gray-600 font-medium">Note moyenne</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
            <div className="text-4xl font-bold text-emerald-500 mb-2">{satisfactionRate}%</div>
            <div className="text-sm text-gray-600 font-medium">Taux de satisfaction</div>
          </div>
        </div>

        {/* Collectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collectors.map((collector) => (
            <div
              key={collector.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                {/* Header with Avatar and Status */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                      {collector.profileImage}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-gray-900">{collector.name}</h3>
                        {collector.verified && (
                          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-yellow-500 text-sm">★</span>
                        <span className="text-sm font-semibold text-gray-900">{collector.rating}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClasses(collector.status)}`}>
                    {collector.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {collector.description}
                </p>

                {/* Location and Vehicle */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{collector.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                    <span>{collector.vehicle}</span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 font-medium mb-2">Spécialités</p>
                  <div className="flex flex-wrap gap-2">
                    {collector.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{collector.stats.collections}</div>
                    <div className="text-xs text-gray-500">Collectes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{collector.stats.experience}</div>
                    <div className="text-xs text-gray-500">Expérience</div>
                  </div>
                </div>

                {/* Tarif */}
                <div className="bg-emerald-50 rounded-lg p-3 mb-4 text-center">
                  <div className="text-sm font-bold text-emerald-700">Tarif</div>
                  <div className="text-lg font-bold text-emerald-600">{collector.tarif}</div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => setSelectedCollector(collector)}
                    className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-semibold text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Voir profil
                  </button>
                  <button className="flex-1 px-4 py-2.5 bg-emerald-500 text-white rounded-lg font-semibold text-sm hover:bg-emerald-600 transition-colors">
                    Contacter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collector Details Modal */}
        {selectedCollector && (
          <CollectorDetailsModal
            collector={selectedCollector}
            onClose={() => setSelectedCollector(null)}
          />
        )}
      </div>
    </div>
  );
};

export default CollecteursPage;