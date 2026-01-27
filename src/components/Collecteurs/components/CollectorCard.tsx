
import { MapPin, CheckCircle, Star, Package, Recycle, ArrowRight } from 'lucide-react';

interface Collector {
  avatar: string;
  name: string;
  realName: string;
  location: string;
  verified: boolean;
  specialty: string;
  rating: number;
  collections: number;
}

interface CollectorCardProps {
  collector: Collector;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const CollectorCard = ({ collector, onHover, onLeave }: CollectorCardProps) => {
  return (
    <div
      className="group relative bg-linear-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="absolute inset-0 bg-linear-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative p-6">
        
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <img
              src={collector.avatar}
              alt={collector.name}
              className="w-20 h-20 rounded-2xl object-cover ring-4 ring-white shadow-lg"
            />
            {collector.verified && (
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center ring-4 ring-white">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-bold text-gray-900">{collector.name}</h3>
            </div>
            <p className="text-sm text-gray-600 font-medium">{collector.realName}</p>
            <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
              <MapPin className="w-4 h-4" />
              <span>{collector.location}</span>
            </div>
          </div>
        </div>


        <div className="mb-4">
          <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            <Recycle className="w-4 h-4" />
            {collector.specialty}
          </span>
        </div>


        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-2xl font-bold text-gray-900">{collector.rating}</span>
            </div>
            <p className="text-xs text-gray-600">Note moyenne</p>
          </div>

          <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <Package className="w-4 h-4 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">{collector.collections}</span>
            </div>
            <p className="text-xs text-gray-600">Collectes</p>
          </div>
        </div>

        <button className="w-full bg-linear-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
          Contacter
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default CollectorCard;