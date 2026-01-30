import React, { useState } from 'react';
import { X, ShoppingBag, Search, Check, Upload, ArrowRight, ArrowLeft } from 'lucide-react';


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

interface CreateAdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateAdFormData) => void;
}

const CreateAdModal: React.FC<CreateAdModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<Partial<CreateAdFormData>>({
    type: 'vente',
    images: []
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const categories: WasteCategory[] = [
    'Plastique',
    'Métaux',
    'Carton',
    'Verre',
    'Électronique',
    'Organique',
    'Papier',
    'Textile'
  ];

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep((step + 1) as 1 | 2 | 3);
  };

  const handleBack = () => {
    if (step > 1) setStep((step - 1) as 1 | 2 | 3);
  };

  const handleSubmit = () => {
    if (formData.type && formData.title && formData.description) {
      onSubmit(formData as CreateAdFormData);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        setStep(1);
        setFormData({ type: 'vente', images: [] });
      }, 2000);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData({ ...formData, images: [...(formData.images || []), ...files] });
  };

  const progress = (step / 3) * 100;

  // Success Modal
  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center animate-scale-in">
          <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Check className="w-12 h-12 text-green-600" strokeWidth={3} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Votre annonce a été publiée</h3>
          <p className="text-gray-600">Vous recevrez bientôt des contacts sur la Marketplace</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-green-500 to-emerald-500 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Créer une annonce</h2>
            <p className="text-green-100 text-sm">Étape {step} sur 3</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-100 h-2">
          <div
            className="h-full bg-linear-to-r from-green-500 to-emerald-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Step 1: Type d'annonce */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Type d'annonce</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setFormData({ ...formData, type: 'vente' })}
                    className={`relative p-6 rounded-xl border-2 transition-all ${
                      formData.type === 'vente'
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className={`p-4 rounded-full ${
                        formData.type === 'vente' ? 'bg-green-500' : 'bg-gray-200'
                      }`}>
                        <ShoppingBag className={`w-8 h-8 ${
                          formData.type === 'vente' ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-gray-900">Je vends</p>
                        <p className="text-sm text-gray-600">J'ai des déchets à vendre</p>
                      </div>
                    </div>
                    {formData.type === 'vente' && (
                      <div className="absolute top-3 right-3">
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                    )}
                  </button>

                  <button
                    onClick={() => setFormData({ ...formData, type: 'achat' })}
                    className={`relative p-6 rounded-xl border-2 transition-all ${
                      formData.type === 'achat'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className={`p-4 rounded-full ${
                        formData.type === 'achat' ? 'bg-blue-500' : 'bg-gray-200'
                      }`}>
                        <Search className={`w-8 h-8 ${
                          formData.type === 'achat' ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-gray-900">Je cherche</p>
                        <p className="text-sm text-gray-600">Je veux acheter des déchets</p>
                      </div>
                    </div>
                    {formData.type === 'achat' && (
                      <div className="absolute top-3 right-3">
                        <Check className="w-5 h-5 text-blue-500" />
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Détails de l'annonce */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Titre de l'annonce *
                </label>
                <input
                  type="text"
                  placeholder="Ex : Bouteilles plastiques PET - Lot de 500kg..."
                  value={formData.title || ''}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Catégorie *
                </label>
                <select
                  value={formData.category || ''}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as WasteCategory })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Sélectionner une catégorie</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Description *
                </label>
                <textarea
                  rows={4}
                  placeholder="Décrivez en détail vos déchets, leur état, condition de collecte..."
                  value={formData.description || ''}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Prix (FCFA) *
                  </label>
                  <input
                    type="number"
                    placeholder="Ex: 30000"
                    value={formData.price || ''}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Quantité *
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 500kg"
                    value={formData.quantity || ''}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Contact et Photos */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    placeholder="+237 6XX XXX XXX"
                    value={formData.phone || ''}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email || ''}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Photos
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-500 transition-colors">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="photo-upload"
                  />
                  <label htmlFor="photo-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600 font-medium">Cliquez pour ajouter des photos</p>
                    <p className="text-sm text-gray-500 mt-1">PNG, JPG jusqu'à 10MB</p>
                  </label>
                  
                  {formData.images && formData.images.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                      {formData.images.map((file: File, idx: number) => (
                        <div key={idx} className="relative">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Upload ${idx + 1}`}
                            className="w-20 h-20 object-cover rounded-lg border-2 border-green-500"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              step === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Précédent
          </button>

          {step < 3 ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg"
            >
              Suivant
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg"
            >
              Publier l'annonce
              <Check className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CreateAdModal;