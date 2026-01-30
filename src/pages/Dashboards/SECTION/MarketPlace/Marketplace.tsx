import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Eye, 
  MessageCircle, 
  Plus,
  TrendingUp,
  Package,
  ShoppingCart,
  Activity
} from 'lucide-react';
import CreateAdModal from './CreateAdModal';

// types/marketplace.types.ts

export type AdType = 'vente' | 'achat';

export type WasteCategory = 
  | 'Plastique'
  | 'Métaux'
  | 'Carton'
  | 'Verre'
  | 'Électronique'
  | 'Organique'
  | 'Papier'
  | 'Textile';

export interface Ad {
  id: string;
  type: AdType;
  title: string;
  description: string;
  category: WasteCategory;
  price: number;
  currency: string;
  quantity: string;
  unit: string;
  images: string[];
  location: string;
  city: string;
  createdAt: string;
  expiresAt?: string;
  seller: {
    id: string;
    name: string;
    type: 'particulier' | 'entreprise' | 'recycleur';
    rating?: number;
    verified?: boolean;
  };
  stats: {
    views: number;
    contacts: number;
  };
  status: 'active' | 'pending' | 'closed' | 'expired';
}

export interface MarketplaceStats {
  activeAds: number;
  salesOffers: number;
  purchaseRequests: number;
  monthlyTransactions: number;
}

export interface SearchFilters {
  query: string;
  type: 'all' | AdType;
  category: 'all' | WasteCategory;
  priceRange?: {
    min: number;
    max: number;
  };
  location?: string;
}

export interface CreateAdFormData {
  type: AdType;
  title: string;
  description: string;
  category: WasteCategory;
  price: number;
  quantity: string;
  unit: string;
  phone: string;
  email: string;
  images: File[];
}
const Marketplace: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    type: 'all',
    category: 'all'
  });

  // Stats de la marketplace
  const stats: MarketplaceStats = {
    activeAds: 5,
    salesOffers: 2,
    purchaseRequests: 3,
    monthlyTransactions: 25
  };

  // Données de démonstration
  const ads: Ad[] = [
    {
      id: '1',
      type: 'vente',
      title: 'Bouteilles plastiques PET - Lot de 500kg',
      description: 'Lot de bouteilles plastiques PET propres et triées. Qualité alimentaire, prêtes pour le recyclage. Idéal pour recycleurs et transformateurs.',
      category: 'Plastique',
      price: 30000,
      currency: 'FCFA',
      quantity: '500',
      unit: 'kg',
      images: ['https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80'],
      location: 'Douala, Bonabéri',
      city: 'Douala',
      createdAt: '2025-01-27',
      seller: {
        id: '1',
        name: 'Nameplace recycling',
        type: 'entreprise',
        rating: 4.5,
        verified: true
      },
      stats: {
        views: 75,
        contacts: 30
      },
      status: 'active'
    },
    {
      id: '2',
      type: 'achat',
      title: 'Recherche déchets métalliques - Aluminium',
      description: 'Entreprise de recyclage recherche aluminium sous toutes formes : canettes, déchets industriels, rebuts de production. Paiement immédiat, enlèvement possible.',
      category: 'Métaux',
      price: 6000,
      currency: 'FCFA/kg',
      quantity: 'Illimité',
      unit: '',
      images: ['https://images.unsplash.com/photo-1528323273322-d81458248d40?w=800&q=80'],
      location: 'Douala, Logpom',
      city: 'Douala',
      createdAt: '2025-01-28',
      seller: {
        id: '2',
        name: 'Cameroun Metal Recycling',
        type: 'recycleur',
        rating: 4.8,
        verified: true
      },
      stats: {
        views: 65,
        contacts: 200
      },
      status: 'active'
    },
    {
      id: '3',
      type: 'vente',
      title: 'Cartons d\'emballage - 200kg disponibles',
      description: 'Cartons d\'emballage usagés mais en bon état. Parfait pour recyclage ou réutilisation. Stock disponible immédiatement.',
      category: 'Carton',
      price: 25000,
      currency: 'FCFA',
      quantity: '200',
      unit: 'kg',
      images: ['https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80'],
      location: 'Douala, Yassa',
      city: 'Douala',
      createdAt: '2025-01-29',
      seller: {
        id: '3',
        name: 'Jean',
        type: 'particulier',
        rating: 4.2
      },
      stats: {
        views: 120,
        contacts: 15
      },
      status: 'active'
    }
  ];

  const filteredAds = ads.filter(ad => {
    const matchesQuery = ad.title.toLowerCase().includes(filters.query.toLowerCase()) ||
                        ad.description.toLowerCase().includes(filters.query.toLowerCase());
    const matchesType = filters.type === 'all' || ad.type === filters.type;
    const matchesCategory = filters.category === 'all' || ad.category === filters.category;
    
    return matchesQuery && matchesType && matchesCategory;
  });

  const handleCreateAd = (data: CreateAdFormData) => {
    console.log('New ad created:', data);
    // Ici vous ajouteriez la logique pour soumettre à l'API
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Bienvenue sur la Markeplace Ecolink
              </h1>
              <p className="text-gray-600 mt-1">Achetez et vendez vos déchets recyclables</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Créer une annonce
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher des annonces..."
                value={filters.query}
                onChange={(e) => setFilters({ ...filters, query: e.target.value })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Type Filter */}
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value as any })}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            >
              <option value="all">Tous les types</option>
              <option value="vente">Offres de vente</option>
              <option value="achat">Demandes d'achats</option>
            </select>

            {/* Category Filter */}
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value as any })}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            >
              <option value="all">Toutes les catégories</option>
              <option value="Plastique">Plastique</option>
              <option value="Métaux">Métaux</option>
              <option value="Carton">Carton</option>
              <option value="Verre">Verre</option>
              <option value="Électronique">Électronique</option>
              <option value="Organique">Organique</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Annonces actives</p>
                <p className="text-3xl font-bold text-green-600">{stats.activeAds}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Offres de vente</p>
                <p className="text-3xl font-bold text-blue-600">{stats.salesOffers}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Demandes d'achats</p>
                <p className="text-3xl font-bold text-purple-600">{stats.purchaseRequests}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <ShoppingCart className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Transactions ce mois</p>
                <p className="text-3xl font-bold text-orange-600">{stats.monthlyTransactions}</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <Activity className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Ads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAds.map((ad, index) => (
            <div
              key={ad.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-300 group cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
                <img
                  src={ad.images[0]}
                  alt={ad.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Type Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${
                  ad.type === 'vente' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-blue-500 text-white'
                }`}>
                  {ad.type === 'vente' ? 'Vente' : 'Achat'}
                </div>

                {/* Time Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                  Il y a {Math.floor(Math.random() * 7) + 1} jours
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                  {ad.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {ad.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    {ad.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-600">{ad.currency}</span>
                  {ad.quantity && (
                    <span className="text-sm text-gray-500">• {ad.quantity}{ad.unit}</span>
                  )}
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{ad.location}</span>
                </div>

                {/* Seller Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                      {ad.seller.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{ad.seller.name}</p>
                      <p className="text-xs text-gray-500 capitalize">{ad.seller.type}</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Eye className="w-4 h-4" />
                    <span>{ad.stats.views}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <MessageCircle className="w-4 h-4" />
                    <span>{ad.stats.contacts}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-4 bg-linear-to-r from-green-500 to-emerald-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Contacter
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAds.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Aucune annonce trouvée</h3>
            <p className="text-gray-600 mb-6">Essayez de modifier vos filtres de recherche</p>
            <button
              onClick={() => setFilters({ query: '', type: 'all', category: 'all' })}
              className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>

      {/* Create Ad Modal */}
      <CreateAdModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSubmit={handleCreateAd}
      />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Marketplace;