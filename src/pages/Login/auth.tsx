import React, { useState } from 'react';
import { User, Mail, Phone, Key } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userType, setUserType] = useState('menage');
  const navigate = useNavigate();

  const toggleAuth = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row font-sans bg-white">
      
      {/* --- SECTION GAUCHE (Branding) --- */}
      <div className="hidden w-full md:w-1/2 bg-[#4CAF50] md:flex flex-col items-center justify-center p-8 md:p-12 text-white relative">
        <div className="max-w-2xl flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10 text-center md:text-left">
          <div className="relative w-48 sm:w-64 md:w-80">
             <img src="/HomeFirst/m1.png" alt="Ecolink App" className="w-full h-auto drop-shadow-2xl" />
          </div>
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 md:w-14 md:h-14">
                <img src="/HomeFirst/logoT.png" alt="Ecolink Logo" className="w-full h-auto" /> 
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Ecolink</h1>
            </div>
            <p className="text-lg md:text-xl italic font-light opacity-90">
              Ecolink, une économie circulaire assurée
            </p>
          </div>
        </div>
      </div>

      {/* --- SECTION DROITE (Authentification) --- */}
      <div className="w-full md:w-1/2 bg-white flex flex-col items-center p-6 md:p-12">
        
        {/* Onglets */}
        <div className="w-full max-w-md flex mb-10 relative pt-10">
          <button onClick={() => setIsLogin(true)} className={`flex-1 py-2 text-2xl font-semibold transition-all ${isLogin ? 'text-black' : 'text-gray-300'}`}>
            Connexion
          </button>
          <button onClick={() => setIsLogin(false)} className={`flex-1 py-2 text-2xl font-semibold transition-all ${!isLogin ? 'text-black' : 'text-gray-300'}`}>
            Inscription
          </button>
          <div className="absolute bottom-0 h-1 bg-[#4CAF50] transition-all duration-500 rounded-full" 
               style={{ width: '40%', left: isLogin ? '5%' : '55%' }} />
        </div>

        {/* Conteneur Coulissant */}
        <div className="w-full max-w-md overflow-hidden">
          <div className={`flex w-[200%] transition-transform duration-700 ease-in-out items-start ${isLogin ? '-translate-x-1/2' : 'translate-x-0'}`}>
            
            {/* --- COLONNE INSCRIPTION --- */}
            <div className="w-1/2 pr-6 space-y-4">
              {[
                { label: 'Nom', icon: <User size={18}/>, type: 'text', placeholder: 'Votre nom' },
                { label: 'Prénom', icon: <User size={18}/>, type: 'text', placeholder: 'Votre prénom' },
                { label: 'Tel', icon: <Phone size={18}/>, type: 'tel', placeholder: 'Ex: 0655443322' },
                { label: 'E-mail', icon: <Mail size={18}/>, type: 'email', placeholder: 'exemple@mail.com' },
                { label: 'Mot de Passe', icon: <Key size={18}/>, type: 'password', placeholder: 'Minimum 8 caractères' },
              ].map((field, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center space-x-3 text-gray-700 ml-2">
                    {field.icon} <span className="font-medium text-sm">{field.label}</span>
                  </div>
                  <input type={field.type} placeholder={field.placeholder} className="w-full px-4 py-3 rounded-2xl border-2 border-gray-100 focus:border-[#4CAF50] outline-none transition bg-gray-50" />
                </div>
              ))}

              <div className="flex justify-between items-center py-4">
                {['Ménage', 'Collecteur', 'Entreprise'].map((type) => (
                  <label key={type} className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="userType" checked={userType === type.toLowerCase()} onChange={() => setUserType(type.toLowerCase())} className="w-4 h-4 accent-[#4CAF50]" />
                    <span className={`text-sm ${userType === type.toLowerCase() ? 'text-[#4CAF50] font-bold' : 'text-gray-500'}`}>{type}</span>
                  </label>
                ))}
              </div>

              {/* Bouton Inscription spécifique */}
              <div className="pt-4 space-y-4">
                <button onClick={() => navigate('/dashboard')} className="w-full py-4 bg-gradient-to-r from-[#4CAF50] to-[#81C784] text-white text-xl font-bold rounded-3xl shadow-lg hover:scale-[1.02] transition-transform">
                  Inscription
                </button>
                <p onClick={toggleAuth} className="text-center text-sm text-gray-400 cursor-pointer hover:text-[#4CAF50]">Déjà inscrit ? Se connecter</p>
              </div>
            </div>

            {/* --- COLONNE CONNEXION --- */}
            <div className="w-1/2 pl-6 space-y-8 pt-4"> {/* Plus d'espace ici (space-y-8) */}
               <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-gray-700 ml-2">
                      <Mail size={18}/> <span className="font-medium">E-mail</span>
                    </div>
                    <input type="email" placeholder="votre@email.com" className="w-full px-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#4CAF50] outline-none transition bg-gray-50" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-gray-700 ml-2">
                      <Key size={18}/> <span className="font-medium">Mot de Passe</span>
                    </div>
                    <input type="password" placeholder="Votre mot de passe" className="w-full px-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#4CAF50] outline-none transition bg-gray-50" />
                    <p className="text-right text-xs text-gray-400 underline cursor-pointer hover:text-[#4CAF50] mt-2">Mot de passe oublié ?</p>
                  </div>
               </div>

               {/* Bouton Connexion spécifique - Il sera beaucoup plus haut car il suit le contenu */}
               <div className="space-y-4">
                  <button onClick={() => navigate('/dashboard')} className="w-full py-4 bg-gradient-to-r from-[#4CAF50] to-[#81C784] text-white text-xl font-bold rounded-3xl shadow-lg hover:scale-[1.02] transition-transform">
                    Connexion
                  </button>
                  <p onClick={toggleAuth} className="text-center text-sm text-gray-400 cursor-pointer hover:text-[#4CAF50]">Pas de compte ? S'inscrire</p>
               </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthPage;