import {  useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate =useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigate = (path: string) => {
   navigate(`${path}`);
    console.log('Navigate to:', path);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Accueil', path: '/home', active: true },
    { name: 'Formations', path: '/form', active: false },
    { name: 'Abonnements', path: '/sub', active: false },
    { name: 'Contact', path: '/contact', active: false },
    { name: 'À propos', path: '/about', active: false }
  ];

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo à gauche */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigate('/home')}>
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:block">EcolinK</span>
          </div>

          {/* Liens centraux - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`font-medium transition-all duration-300 ${
                  link.active
                    ? 'bg-green-500 text-white px-4 py-2 rounded-lg'
                    : 'text-gray-700 hover:text-green-500 px-2 py-2'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Boutons d'action - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleNavigate('/auth')}
              className="px-5 py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:border-green-500 transition-all duration-300"
            >
              Connexion
            </button>
            <button
              onClick={() => handleNavigate('/auth')}
              className="px-5 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition-all duration-300 hover:scale-105 shadow-lg"
            >
              S'inscrire
            </button>
          </div>

          {/* Bouton Menu Burger - Mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Menu Mobile - Slide from top */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
            {/* Liens de navigation mobile */}
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    link.active
                      ? 'bg-green-500 text-white'
                      : 'text-gray-700 hover:bg-white hover:text-green-500'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Séparateur */}
            <div className="border-t border-gray-200 my-4"></div>

            {/* Boutons d'action mobile */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  handleNavigate('/auth');
                  setIsMenuOpen(false);
                }}
                className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-white transition-all duration-300"
              >
                Connexion
              </button>
              <button
                onClick={() => {
                  handleNavigate('/auth');
                  setIsMenuOpen(false);
                }}
                className="w-full px-5 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition-all duration-300"
              >
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;