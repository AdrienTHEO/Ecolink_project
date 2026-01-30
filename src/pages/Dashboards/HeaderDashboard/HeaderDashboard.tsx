import { useState } from 'react';
import { Menu, X, Leaf, Bell, User, ChevronDown, Award } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const HeaderDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Pour gérer l'état actif dynamiquement

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Accueil', path: '/dashboard' },
    { name: 'Formations', path: '/dashboard/formations' },
    { name: 'Market Place', path: '/dashboard/marketplace' },
    { name: 'Carte Interactive', path: '/contact' },
    { name: 'Collecteurs', path: '/about' }
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. LOGO ECOLINK */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => navigate('/home')}
          >
            <div className="w-11 h-11 bg-[#27ae60] rounded-xl flex items-center justify-center shadow-lg shadow-green-200 transition-transform group-hover:scale-110">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-gray-900 tracking-tight">
              EcolinK
            </span>
          </div>

          {/* 2. NAVIGATION CENTRALE (Desktop) */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive 
                    ? 'text-[#27ae60] bg-green-50' 
                    : 'text-gray-600 hover:text-[#27ae60] hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* 3. ESPACE UTILISATEUR (Points + Notifs + Profil) */}
          <div className="hidden md:flex items-center space-x-6">
            
            {/* Badge Points Verts (Cahier des charges Ecolink) */}
            <div className="flex items-center space-x-2 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
              <Award className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-bold text-orange-700">1,250 pts</span>
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            {/* Menu Profil */}
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-3 p-1 pr-3 hover:bg-gray-50 rounded-full border border-transparent hover:border-gray-200 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-[#27ae60]/10 flex items-center justify-center border-2 border-[#27ae60]">
                  <User className="w-6 h-6 text-[#27ae60]" />
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Profil */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                  <button className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">Mon Profil</button>
                  <button className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">Mes Signalements</button>
                  <hr className="my-2 border-gray-100" />
                  <button className="w-full text-left px-4 py-2.5 text-sm text-red-600 font-semibold hover:bg-red-50">Déconnexion</button>
                </div>
              )}
            </div>
          </div>

          {/* 4. BURGER MENU (Mobile) */}
          <button onClick={toggleMenu} className="lg:hidden p-2 text-gray-700">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* 5. MENU MOBILE SLIDE */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 pb-8' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => { navigate(link.path); setIsMenuOpen(false); }}
                className="w-full text-left px-4 py-4 text-lg font-medium text-gray-700 border-b border-gray-50"
              >
                {link.name}
              </button>
            ))}
            <button className="w-full mt-4 py-4 bg-gray-900 text-white rounded-2xl font-bold">
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderDashboard;