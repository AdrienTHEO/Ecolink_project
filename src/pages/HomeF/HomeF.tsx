import React from 'react';
import { ArrowRight } from 'lucide-react'; 
import {  useNavigate} from 'react-router-dom';


  
const HomeF: React.FC = () => {

const Navigate = useNavigate();
  return (
    <div className="p-9 relative min-h-screen w-full bg-[#27ae60] flex flex-col items-center justify-center overflow-hidden  font-sans">
      
      {/* Container Principal */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
        
        {/* Section Gauche: Les Téléphones (Visualisation de la solution numérique) */}
        <div className="relative w-full max-w-125 flex justify-center items-end h-900 md:h-125">
          {/* Grand Téléphone - Splash Screen  */}
          <div className="relative z-10  w-64 md:w-80 transition-transform hover:scale-105 duration-500">
            <img 
              src="/HomeFirst/m1.png" 
              alt="Ecolink Splash Screen" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* Petit Téléphone - Marketplace [cite: 144] */}
          <div className="absolute -right-4 md:-right-8 bottom-4 z-20 w-32 md:w-40 transition-transform hover:-translate-y-4 duration-500">
            <img 
              src="/HomeFirst/m2.png"  
              alt="Ecolink Marketplace" 
              className="w-full h-auto drop-shadow-2xl rounded-4xl"
            />
          </div>
        </div>

        {/* Section Droite: Identité Visuelle et Appel à l'action */}
        <div className="flex flex-col items-center md:items-start text-white space-y-12 max-w-lg">
          
          {/* Bloc Logo + Titre  */}
          <div className="flex items-center space-x-4"> 
            <div className="w-16 h-16 md:w-24 md:h-24">
              <img 
                src="/HomeFirst/logoT.png"  
                alt="Ecolink Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Ecolink
            </h1>
          </div>

          {/* Message et Bouton d'action [cite: 42, 214] */}
          <div className="flex flex-col items-center md:items-end w-full">
            <button className="group flex items-center gap-6 transition-all"      onClick={() => { Navigate('/home');}}>  
              <span className="text-2xl md:text-3xl font-semibold tracking-wide group-hover:mr-2 duration-300">
                Faites vos premiers pas
              </span>
              <div className="p-3 bg-white rounded-full text-[#27ae60] shadow-lg group-hover:scale-110 transition-transform duration-300">
                 <ArrowRight size={32} strokeWidth={3} />
              </div>
            </button>
          </div>
        </div>

      </div>

      {/* Signature du projet StrideNov [cite: 213, 217] */}
      <div className="absolute bottom-8 right-12 text-white/70 text-sm font-light tracking-widest uppercase">
        Ecolink - Startup Stridenov
      </div>
    </div>
  );
};

export default HomeF;