
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-gray-900 to-gray-800 text-white py-16 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full border-2 border-green-400 flex items-center justify-center bg-green-500/20">
                <Leaf className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold">Ecolink</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Plateforme intelligente de gestion des déchets au Cameroun. Connectons les ménages, collecteurs et recycleurs pour un environnement plus propre.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:contact@ecolink.cm" className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>contact@ecolink.cm</span>
              </a>
              <a href="tel:+237123456789" className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+237 123 456 789</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Douala, Cameroun</span>
              </div>
            </div>
          </div>


          <div>
            <h4 className="text-lg font-bold mb-6">Liens rapides</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Devenir collecteur</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Partenariats</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Formation</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">À propos</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm">
            © 2025 Ecolink by StrideNov. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-500 transition-all hover:scale-110">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-500 transition-all hover:scale-110">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-500 transition-all hover:scale-110">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-500 transition-all hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;