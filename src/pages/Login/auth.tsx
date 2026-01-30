import React, { useState } from 'react';
import { User, Mail, Phone, Key } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false); // Mis à false pour montrer l'inscription par défaut comme sur ton image
  const [userType, setUserType] = useState('menage');

  const toggleAuth = () => setIsLogin(!isLogin);
  const Navigate = useNavigate();


  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row font-sans">
      
      {/* --- SECTION GAUCHE (Image / Slogan) --- */}
<div className="w-full md:w-1/2 bg-[#4CAF50] flex flex-col items-center justify-center p-8 md:p-12 text-white relative">
  
  {/* Conteneur de contenu : Colonne sur mobile, Ligne sur desktop */}
  <div className="max-w-2xl flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10 text-center md:text-left">
    
    {/* Emplacement Photo / Mockup Téléphone */} 
    <div className="relative w-48 sm:w-64 md:w-80 transition-all duration-500">
       <img 
         src="/HomeFirst/m1.png" 
         alt="Ecolink App" 
         className="w-full h-auto drop-shadow-2xl"
       />
    </div>
    
        {/* Logo et Slogan */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
              <img 
                src="/HomeFirst/logoT.png" 
                alt="Ecolink Logo" 
                className="w-full h-auto drop-shadow-lg"
              /> 
            </div>
            {/* Taille de texte responsive : 3xl sur mobile, 5xl sur desktop */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Ecolink
            </h1>
          </div>
          
          <p className="text-lg md:text-xl italic font-light opacity-90 max-w-70 md:max-w-none">
            Ecolink, une économie circulaire assurée
          </p>
        </div>

      </div>
    </div>

      {/* --- SECTION DROITE (Formulaires) --- */}
      <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
        
        {/* Navigation Onglets (Connexion / Inscription) */}
        <div className="w-full max-w-md flex mb-12 relative">
          <button 
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 text-2xl font-semibold transition-all duration-300 ${isLogin ? 'text-black' : 'text-gray-400'}`}
          >
            Connexion
          </button>
          <button 
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 text-2xl font-semibold transition-all duration-300 ${!isLogin ? 'text-black' : 'text-gray-400'}`}
          >
            Inscription
          </button>
          {/* Barre de soulignement animée */}
          <div className={`absolute bottom-0 h-1 bg-[#4CAF50] transition-all duration-500 ease-in-out rounded-full`} 
               style={{ width: '40%', left: isLogin ? '5%' : '55%' }} />
        </div>

        {/* Container Formulaire avec Slide */}
        <div className="w-full max-w-md overflow-hidden">
          <div className={`flex w-[200%] transition-transform duration-700 ease-in-out ${isLogin ? '-translate-x-1/2' : 'translate-x-0'}`}>
            
            {/* --- FORMULAIRE INSCRIPTION (Visible selon ton image) --- */}
            <div className="w-1/2 pr-4 space-y-5">
              {[
                { label: 'Nom', icon: <User size={20}/>, type: 'text' },
                { label: 'Prénom', icon: <User size={20}/>, type: 'text' },
                { label: 'Tel', icon: <Phone size={20}/>, type: 'tel' },
                { label: 'E-mail', icon: <Mail size={20}/>, type: 'email' },
                { label: 'Mot de Passe', icon: <Key size={20}/>, type: 'password' },
              ].map((field, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center space-x-3 text-gray-700 ml-2">
                    {field.icon}
                    <span className="font-medium">{field.label}</span>
                  </div>
                  <input 
                    type={field.type}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-[#4CAF50]/30 focus:border-[#4CAF50] outline-none transition shadow-sm"
                  />
                </div>
              ))}

              {/* Sélecteur Type d'utilisateur */}
              <div className="flex justify-between items-center py-4 px-2">
                {['Ménage', 'Collecteur', 'Entreprise'].map((type) => (
                  <label key={type} className="flex items-center space-x-2 cursor-pointer group">
                    <span className={`text-lg ${userType === type.toLowerCase() ? 'text-[#4CAF50] font-bold' : 'text-gray-500'}`}>
                      {type}
                    </span>
                    <input 
                      type="radio" 
                      name="userType"
                      checked={userType === type.toLowerCase()}
                      onChange={() => setUserType(type.toLowerCase())}
                      className="w-5 h-5 accent-[#4CAF50] cursor-pointer"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* --- FORMULAIRE CONNEXION --- */}
            <div className="w-1/2 pl-4 flex flex-col justify-center space-y-8">
               <div className="space-y-6">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3 text-gray-700 ml-2">
                      <Mail size={20}/> <span className="font-medium">E-mail</span>
                    </div>
                    <input type="email" className="w-full px-4 py-3 rounded-2xl border-2 border-[#4CAF50]/30 focus:border-[#4CAF50] outline-none transition shadow-sm" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3 text-gray-700 ml-2">
                      <Key size={20}/> <span className="font-medium">Mot de Passe</span>
                    </div>
                    <input type="password" className="w-full px-4 py-3 rounded-2xl border-2 border-[#4CAF50]/30 focus:border-[#4CAF50] outline-none transition shadow-sm" />
                  </div>
               </div>
               <p className="text-center text-xs text-gray-400 underline cursor-pointer">Mot de passe oublié ?</p>
            </div>

          </div>
        </div>

        {/* --- PIED DE FORMULAIRE (Boutons) --- */}
        <div className="w-full max-w-md mt-10 flex flex-col items-center space-y-4">
          <button onClick={()=>{
            Navigate('/dashboard')
          }} 
          className="w-full py-4 bg-linear-to-r from-[#4CAF50] to-[#81C784] text-white text-xl font-bold rounded-3xl shadow-lg hover:scale-105 transition-transform active:scale-95">
            {isLogin ? 'Connexion' : 'Inscription'}
          </button>
          
          <button 
            onClick={toggleAuth}
            className="text-sm text-gray-500 hover:text-[#4CAF50] transition underline"
          >
            {isLogin ? "S'inscrire" : "Se connecter"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default AuthPage;