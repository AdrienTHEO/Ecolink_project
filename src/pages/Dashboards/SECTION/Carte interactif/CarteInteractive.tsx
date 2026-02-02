import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Types
type MarkerType = 'collector-available' | 'collector-unavailable' | 'point-active' | 'point-inactive' | 'user-location';

interface Collector {
  id: string;
  name: string;
  rating: number;
  totalCollections: number;
  specialties: string[];
  position: [number, number];
  available: boolean;
}

interface CollectionPoint {
  id: string;
  name: string;
  address: string;
  capacity: number;
  currentLoad: number;
  acceptedTypes: string[];
  schedule: string;
  position: [number, number];
  active: boolean;
}

const CarteInteractive: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'collectors' | 'points'>('all');
  const [selectedItem, setSelectedItem] = useState<{
    type: 'collector' | 'point';
    data: Collector | CollectionPoint;
  } | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  // Données de démonstration (Douala, Cameroun)
  const collectors: Collector[] = [
    {
      id: 'c1',
      name: 'Ivan',
      rating: 4.8,
      totalCollections: 120,
      specialties: ['Plastique', 'Métal'],
      position: [4.0511, 9.7679],
      available: true
    },
    {
      id: 'c2',
      name: 'Nkoulou',
      rating: 4.5,
      totalCollections: 89,
      specialties: ['Papier', 'Carton'],
      position: [4.0489, 9.7432],
      available: false
    },
    {
      id: 'c3',
      name: 'Laptop',
      rating: 4.65,
      totalCollections: 100,
      specialties: ['Plastique', 'Papier', 'Métal'],
      position: [4.0534, 9.7445],
      available: true
    }
  ];

  const collectionPoints: CollectionPoint[] = [
    {
      id: 'p1',
      name: 'Point PK14',
      address: 'Marché PK14',
      capacity: 450,
      currentLoad: 120,
      acceptedTypes: ['Plastique', 'Verre', 'Papier'],
      schedule: '08h00 - 18h00',
      position: [4.0543, 9.7598],
      active: true
    },
    {
      id: 'p2',
      name: 'Point Logbessou',
      address: 'Carrefour Logbessou',
      capacity: 160,
      currentLoad: 155,
      acceptedTypes: ['Papier', 'Carton'],
      schedule: '07h00 - 19h00',
      position: [4.0423, 9.7512],
      active: true
    },
    {
      id: 'p3',
      name: 'Point Akwa',
      address: 'Boulevard de la Liberté',
      capacity: 200,
      currentLoad: 45,
      acceptedTypes: ['Plastique', 'Métal'],
      schedule: 'Fermé',
      position: [4.0498, 9.7045],
      active: false
    },
    {
      id: 'p4',
      name: 'Point Bonanjo',
      address: 'Rue Joffre',
      capacity: 300,
      currentLoad: 200,
      acceptedTypes: ['Plastique', 'Métal', 'Papier'],
      schedule: '06h00 - 20h00',
      position: [4.0489, 9.7012],
      active: true
    }
  ];

  // Calcul des statistiques
  const stats = {
    totalPoints: collectionPoints.filter(p => p.active).length,
    totalPointsInactive: collectionPoints.filter(p => !p.active).length,
    availableCollectors: collectors.filter(c => c.available).length,
    unavailableCollectors: collectors.filter(c => !c.available).length,
    avgDistance: '1.5 km',
    avgTime: '10 min'
  };

  // Custom icons
  const createCustomIcon = (type: MarkerType) => {
    const iconConfig: Record<MarkerType, { html: string; className: string }> = {
      'collector-available': {
        html: '<div style="width: 32px; height: 32px; background: #3B82F6; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.15); display: flex; align-items: center; justify-content: center;"><div style="width: 10px; height: 10px; background: white; border-radius: 50%;"></div></div>',
        className: 'custom-marker'
      },
      'collector-unavailable': {
        html: '<div style="width: 32px; height: 32px; background: #93C5FD; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.15); display: flex; align-items: center; justify-content: center; opacity: 0.7;"><div style="width: 10px; height: 10px; background: white; border-radius: 50%;"></div></div>',
        className: 'custom-marker'
      },
      'point-active': {
        html: '<div style="width: 32px; height: 32px; background: #EF4444; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.15); display: flex; align-items: center; justify-content: center;"><div style="width: 10px; height: 10px; background: white; border-radius: 50%;"></div></div>',
        className: 'custom-marker'
      },
      'point-inactive': {
        html: '<div style="width: 32px; height: 32px; background: #9CA3AF; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.15); display: flex; align-items: center; justify-content: center;"><div style="width: 10px; height: 10px; background: white; border-radius: 50%;"></div></div>',
        className: 'custom-marker'
      },
      'user-location': {
        html: '<div style="width: 40px; height: 40px; background: #10B981; border-radius: 50%; border: 4px solid white; box-shadow: 0 4px 16px rgba(16,185,129,0.4); display: flex; align-items: center; justify-content: center; animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"><div style="width: 8px; height: 8px; background: white; border-radius: 50%;"></div></div>',
        className: 'custom-marker'
      }
    };

    return L.divIcon({
      html: iconConfig[type].html,
      className: iconConfig[type].className,
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    });
  };

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current).setView([4.0511, 9.7500], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Add markers
  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;
    const markers: L.Marker[] = [];

    // Add collection points
    if (activeFilter === 'all' || activeFilter === 'points') {
      collectionPoints.forEach(point => {
        const marker = L.marker(point.position, {
          icon: createCustomIcon(point.active ? 'point-active' : 'point-inactive')
        }).addTo(map);

        marker.on('click', () => {
          setSelectedItem({ type: 'point', data: point });
        });

        markers.push(marker);
      });
    }

    // Add collectors
    if (activeFilter === 'all' || activeFilter === 'collectors') {
      collectors.forEach(collector => {
        const marker = L.marker(collector.position, {
          icon: createCustomIcon(collector.available ? 'collector-available' : 'collector-unavailable')
        }).addTo(map);

        marker.on('click', () => {
          setSelectedItem({ type: 'collector', data: collector });
        });

        markers.push(marker);
      });
    }

    // Add user location
    if (userLocation) {
      const userMarker = L.marker(userLocation, {
        icon: createCustomIcon('user-location')
      }).addTo(map);
      markers.push(userMarker);
    }

    return () => {
      markers.forEach(marker => marker.remove());
    };
  }, [activeFilter, userLocation, collectors, collectionPoints]);

  const handleGetUserLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords: [number, number] = [position.coords.latitude, position.coords.longitude];
          setUserLocation(coords);
          if (mapRef.current) {
            mapRef.current.setView(coords, 15, { animate: true });
          }
        },
        () => {
          const fallback: [number, number] = [4.0511, 9.7500];
          setUserLocation(fallback);
          if (mapRef.current) {
            mapRef.current.setView(fallback, 13, { animate: true });
          }
        }
      );
    }
  };

  const renderSelectionCard = () => {
    if (!selectedItem) {
      return (
        <div className="bg-white rounded-2xl p-6 border border-gray-200 h-fit">
          <div className="text-center py-8">
            <div className="mb-4 text-5xl">📍</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Sélectionnez un élément</h3>
            <p className="text-sm text-gray-500">
              Cliquez sur un collecteur ou un point de collecte sur la carte pour voir les détails
            </p>
          </div>
        </div>
      );
    }

    if (selectedItem.type === 'collector') {
      const collector = selectedItem.data as Collector;
      return (
        <div className="bg-white rounded-2xl border border-blue-300 shadow-lg h-fit">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Collecteur</h3>
              <button 
                onClick={() => setSelectedItem(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors text-xl"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-base font-semibold text-gray-900 mb-1">{collector.name}</p>
                <p className="text-sm text-gray-500 mb-2">📍 PK17</p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="font-bold text-gray-900">{collector.rating}</span>
                  <span className="text-sm text-gray-500">({collector.totalCollections} collectés)</span>
                </div>
                {collector.available && (
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                    Disponible
                  </span>
                )}
              </div>

              <div>
                <p className="text-sm text-gray-600 font-medium mb-2">Spécialités</p>
                <div className="flex flex-wrap gap-2">
                  {collector.specialties.map((specialty, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>🚚</span>
                <span>Tricycle</span>
              </div>

              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition-colors">
                Contacter collecteur
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (selectedItem.type === 'point') {
      const point = selectedItem.data as CollectionPoint;
      const percentage = (point.currentLoad / point.capacity) * 100;
      
      return (
        <div className="bg-white rounded-2xl border border-blue-300 shadow-lg h-fit">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Point de collecte</h3>
              <button 
                onClick={() => setSelectedItem(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors text-xl"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-1">{point.name}</p>
                <p className="text-sm text-gray-500 mb-2">📍 {point.address}</p>
                {point.active ? (
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                    Actif
                  </span>
                ) : (
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full font-medium">
                    Non actif
                  </span>
                )}
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Capacité</span>
                  <span className="font-semibold text-gray-900">{point.currentLoad}kg / {point.capacity}kg</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all ${
                      percentage > 80 ? 'bg-red-500' : percentage > 50 ? 'bg-orange-500' : 'bg-emerald-500'
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 font-medium mb-2">Type accepté</p>
                <div className="flex flex-wrap gap-2">
                  {point.acceptedTypes.map((type, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 flex items-center gap-2">
                  <span>⏰</span>
                  <span>Horaires ouverture: {point.schedule}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }

        .custom-marker {
          background: transparent !important;
          border: none !important;
        }

        .leaflet-container {
          border-radius: 1rem;
        }
      `}</style>

      <div className="max-w-400 mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Carte interactive</h1>
          <p className="text-gray-600">
            Visualisez en temps réel les collecteurs disponibles et les points de collecte près de chez vous
          </p>
        </div>

        {/* Filters */}
        {/* On ajoute 'overflow-x-auto' pour le scroll mobile et 'whitespace-nowrap' pour éviter que le texte revienne à la ligne */}
            <div className="mb-6 flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2 text-gray-700 sticky left-0 bg-white/80 backdrop-blur-sm pr-2 z-10">
                <svg className="w-5 h-5 min-w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
            </div>
            
            <div className="flex gap-2 flex-nowrap">
                <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2.5 rounded-xl font-bold transition-all text-xs md:text-sm whitespace-nowrap shadow-sm border ${
                    activeFilter === 'all'
                    ? 'bg-emerald-500 text-white border-emerald-500'
                    : 'bg-white text-gray-600 border-gray-100 hover:bg-gray-50'
                }`}
                >
                🗺️ Tout afficher
                </button>

                <button
                onClick={() => setActiveFilter('collectors')}
                className={`px-4 py-2.5 rounded-xl font-bold transition-all text-xs md:text-sm whitespace-nowrap shadow-sm border ${
                    activeFilter === 'collectors'
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-600 border-gray-100 hover:bg-gray-50'
                }`}
                >
                👥 Collecteurs
                </button>

                <button
                onClick={() => setActiveFilter('points')}
                className={`px-4 py-2.5 rounded-xl font-bold transition-all text-xs md:text-sm whitespace-nowrap shadow-sm border ${
                    activeFilter === 'points'
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-600 border-gray-100 hover:bg-gray-50'
                }`}
                >
                📍 Points de collecte
                </button>
            </div>
            </div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
          {/* Left Section - Map with Legend */}
          <div className="relative">
            <div 
              ref={mapContainerRef} 
              className="w-full h-150 bg-white rounded-2xl shadow-sm border border-gray-200"
            />

            {/* Littoral, Douala label */}
            <div className="absolute top-4 left-4 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg text-sm font-semibold z-1000 flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Littoral, Douala
            </div>

            {/* User Location Button */}
            <button
              onClick={handleGetUserLocation}
              className="absolute top-4 right-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2.5 rounded-lg transition-all z-1000 text-sm"
            >
              Ma position
            </button>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-4 z-1000 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 text-sm">Légende</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Points de collecte actifs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-700">Points de collecte non actifs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Collecteurs disponibles</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                  <span className="text-gray-700">Collecteurs indisponibles</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">Votre position</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Info Cards */}
          <div className="space-y-6">
            {/* Selection Card */}
            {renderSelectionCard()}

            {/* Stats Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">Statistiques Locales</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Points actifs</span>
                  <span className="font-bold text-gray-900">{stats.totalPoints}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Collecteurs disponibles</span>
                  <span className="font-bold text-gray-900">{stats.availableCollectors}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Distance moyenne</span>
                  <span className="font-bold text-gray-900">{stats.avgDistance}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Temps moyen</span>
                  <span className="font-bold text-gray-900">{stats.avgTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CarteInteractive;