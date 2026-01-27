import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {

  const Navigate = useNavigate();
  return (
    <nav className="w-full bg-white py-4 px-6 md:px-12 flex items-center justify-between shadow-sm">
      {/* Logo à gauche */}
      <div className="flex items-center space-x-2">
        <img src="/HomeFirst/logo.png" alt="Logo" className="w-10 h-10" />
      </div>

      {/* Liens centraux */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="/home" className="bg-[#27ae60] text-white px-4 py-1.5 rounded-lg font-medium">Accueil</a>
        <a href="/form" className="text-gray-700 hover:text-[#27ae60] font-medium transition">Formations</a>
        <a href="/sub" className="text-gray-700 hover:text-[#27ae60] font-medium transition">Abonnements</a>
        <a href="/contact" className="text-gray-700 hover:text-[#27ae60] font-medium transition">Contact</a>
        <a href="/about" className="text-gray-700 hover:text-[#27ae60] font-medium transition">A propos</a>
      </div>

      {/* Boutons d'action à droite */}
      <div className="flex items-center space-x-4">
        <button className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
         onClick={() => { Navigate('/auth');}}>
          Connexion
        </button>
        <button className="px-5 py-2 bg-[#333333] text-white rounded-lg font-medium hover:bg-black transition"
        onClick={() => { Navigate('/auth');}}>
          S'inscrire
        </button>
      </div>
    </nav>
  );
};

export default Navbar;