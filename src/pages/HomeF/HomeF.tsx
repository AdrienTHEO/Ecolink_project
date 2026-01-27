import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeF: React.FC = () => {
  const Navigate = useNavigate();

  return (
    // 1. Changement : p-6 (mobile) vs md:p-9 | justify-start (mobile) pour éviter de centrer dans le vide
    <div className="px-6 py-10 md:p-9 relative min-h-screen w-full bg-[#27ae60] flex flex-col items-center justify-start md:justify-center overflow-hidden font-sans">
      
      {/* Container Principal */}
      {/* 2. Changement : gap-8 au lieu de 12 pour gagner de la place sur mobile */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-24">
        
        {/* Section Gauche: Les Téléphones */}
        {/* AJOUT : md:pt-20 pour créer de l'espace en haut et md:mt-0 pour réinitialiser le mobile */}
        <div className="relative w-full max-w-125 flex justify-center items-end h-auto md:h-150 md:pt-1 mt-4 md:mt-0">
          
          {/* Grand Téléphone */}
          {/* On peut aussi ajouter md:translate-y-10 pour une précision chirurgicale */}
          <div className="relative z-10 w-56 md:w-80 transition-transform hover:scale-105 duration-500 md:translate-y-2">
            <img 
              src="/HomeFirst/m1.png" 
              alt="Ecolink Splash Screen" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* Petit Téléphone */}
          <div className="absolute -right-2 md:-right-8 bottom-18 z-20 w-28 md:w-40 transition-transform hover:-translate-y-4 duration-500 md:translate-y-12">
            <img 
              src="/HomeFirst/m2.png"  
              alt="Ecolink Marketplace" 
              className="w-full h-auto drop-shadow-2xl rounded-3xl md:rounded-4xl"
            />
          </div>
        </div>

        {/* Section Droite: Identité et CTA */}
        {/* 4. Changement : space-y-8 au lieu de 12 pour condenser le mobile */}
        <div className="flex flex-col items-center md:items-start text-white space-y-8 md:space-y-12 max-w-lg">
          
          {/* Bloc Logo + Titre  */}
          <div className="flex items-center space-x-4"> 
            <div className="w-12 h-12 md:w-24 md:h-24">
              <img 
                src="/HomeFirst/logoT.png"  
                alt="Ecolink Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
              Ecolink
            </h1>
          </div>

          {/* Message et Bouton */}
          <div className="flex flex-col items-center md:items-start w-full">
            <button 
              className="group flex items-center gap-4 md:gap-6 transition-all"      
              onClick={() => Navigate('/home')}
            >  
              <span className="text-xl md:text-3xl font-semibold tracking-wide">
                Faites vos premiers pas
              </span>
              <div className="p-2 md:p-3 bg-white rounded-full text-[#27ae60] shadow-lg group-hover:scale-110 transition-transform duration-300">
                 <ArrowRight size={24} className="md:hidden" strokeWidth={3} />
                 <ArrowRight size={32} className="hidden md:block" strokeWidth={3} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Signature */}
      {/* 5. Changement : hidden sur petit mobile ou ajustement de position */}
      <div className="absolute bottom-4 md:bottom-8 right-6 md:right-12 text-white/70 text-[10px] md:text-sm font-light tracking-widest uppercase">
        Ecolink - Startup Stridenov
      </div>
    </div>
  );
};

export default HomeF;