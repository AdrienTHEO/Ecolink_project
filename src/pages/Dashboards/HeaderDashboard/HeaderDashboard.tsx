import { useState } from 'react';
import { Menu, X, Leaf, Bell, User, ChevronDown, Award, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeaderDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [hasNotifications] = useState(true);
  const Navigate = useNavigate();
  const handleNavigate = (path: string) => {
    Navigate(`${path}`);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Accueil', path: '/dashboard' },
    { name: 'Formations', path: '/dashboard/formations' },
    { name: 'Market Place', path: '/dashboard/marketplace' },
    { name: 'Carte Interactive', path: '/dashboard/map' },
    { name: 'Collecteurs', path: '/dashboard/collectors' }
  ];

  const currentPath = '/dashboard'; // Remplacez par location.pathname

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* HEADER PRINCIPALE */}
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* 1. LOGO ECOLINK */}
          <div 
            className="flex items-center space-x-2 md:space-x-3 cursor-pointer group" 
            onClick={() => handleNavigate('/home')}
          >
            <div className="w-9 h-9 md:w-11 md:h-11 bg-[#27ae60] rounded-xl flex items-center justify-center shadow-lg shadow-green-200 transition-transform group-hover:scale-110">
              <Leaf className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
              EcolinK
            </span>
          </div>

          {/* 2. NAVIGATION CENTRALE (Desktop uniquement) */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavigate(link.path)}
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

          {/* 3. SECTION DROITE */}
          <div className="flex items-center gap-2 md:gap-6">
            
            {/* POINTS VERTS - Visible sur tous les écrans */}
            <div className="flex items-center space-x-1.5 md:space-x-2 bg-orange-50 px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-orange-100">
              <Award className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500" />
              <span className="text-xs md:text-sm font-bold text-orange-700">1,250</span>
            </div>

            {/* NOTIFICATIONS - Desktop uniquement */}
            <button className="hidden md:block relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-6 h-6" />
              {hasNotifications && (
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              )}
            </button>

            {/* PROFIL - Desktop uniquement */}
            <div className="hidden md:block relative">
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
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-bold text-gray-900">Adrien Tamba</p>
                    <p className="text-xs text-gray-500">adrientamba@ecolink.cm</p>
                  </div>
                  <button 
                    onClick={() => handleNavigate('/dashboard/profil')}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Mon Profil
                  </button>
                  <button 
                    onClick={() => handleNavigate('/dashboard/signalements')}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Mes Signalements
                  </button>
                  <button 
                    onClick={() => handleNavigate('/dashboard/settings')}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Paramètres
                  </button>
                  <hr className="my-2 border-gray-100" />
                  <button 
                    onClick={() => handleNavigate('/home')}
                    className="w-full text-left px-4 py-2.5 text-sm text-red-600 font-semibold hover:bg-red-50 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Déconnexion
                  </button>
                </div>
              )}
            </div>

            {/* BURGER MENU - Mobile uniquement */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 5. MENU MOBILE SLIDE */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-150 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-1">
            
            {/* SECTION PROFIL MOBILE */}
            <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl p-4 mb-4 border border-green-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#27ae60]/10 flex items-center justify-center border-2 border-[#27ae60]">
                  <User className="w-7 h-7 text-[#27ae60]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900">Adrien Tamba</p>
                  <p className="text-xs text-gray-600">adrientamba@ecolink.cm</p>
                </div>
                {/* Notifications badge mobile */}
                <button    className="relative p-2 text-gray-600 hover:bg-white/50 rounded-full transition-colors">
                  <Bell className="w-5 h-5" />
                  {hasNotifications && (
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                  )}
                </button>
              </div>
              
              {/* Points verts en grand */}
              <div className="bg-white rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-500" />
                  <span className="text-xs text-gray-600">Points verts</span>
                </div>
                <span className="text-lg font-bold text-orange-600">1,250 pts</span>
              </div>
            </div>

            {/* NAVIGATION LINKS */}
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavigate(link.path)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl font-medium transition-all ${
                      isActive
                        ? 'bg-green-50 text-[#27ae60] font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>

            {/* ACTIONS SECONDAIRES */}
            <div className="pt-4 space-y-2 border-t border-gray-100 mt-4">
              <button 
                onClick={() => handleNavigate('/dashboard/profil')}
                className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
              >
                Mon Profil
              </button>
              <button 
                onClick={() => handleNavigate('/dashboard/signalements')}
                className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
              >
                Mes Signalements
              </button>
              <button 
                onClick={() => handleNavigate('/dashboard/settings')}
                className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
              >
                Paramètres
              </button>
            </div>

            {/* BOUTON DÉCONNEXION */}
            <button 
              onClick={() => handleNavigate('/home')}
              className="w-full mt-4 py-4 bg-linear-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:from-red-600 hover:to-red-700 transition-all shadow-lg"
            >
              <LogOut className="w-5 h-5" />
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderDashboard;