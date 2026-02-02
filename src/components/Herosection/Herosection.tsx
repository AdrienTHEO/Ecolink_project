import React from 'react';
import { useNavigate } from 'react-router-dom';
const Hero: React.FC = () => {

  const Navigate=useNavigate();


  return (
    <section className="relative w-full">
      {/* Bannière Verte Supérieure (selon ta 2ème capture) */}
      <div className="w-full bg-[#27ae60] py-20 flex flex-col items-center justify-center text-white space-y-8">
        <div className="flex items-center space-x-4">
          <img src="/HomeFirst/logoT.png" alt="Logo Blanc" className="w-20 h-20 md:w-28 md:h-28" />
          <h1 className="text-6xl md:text-8xl font-bold">Ecolink</h1>
        </div>
        
        <div className="flex space-x-6">
          <button onClick={()=>{ Navigate('/auth')}} className="px-8 py-3 bg-gray-200 text-gray-800 rounded-lg text-xl font-medium hover:bg-white transition">
            Connexion
          </button>
          <button onClick={()=>{ Navigate('/auth')}}  className="px-8 py-3 bg-[#333333] text-white rounded-lg text-xl font-medium hover:bg-black transition">
            S'inscrire
          </button>
        </div>
      </div>

      {/* Zone des visuels (selon ta 1ère capture) */}
      <div className="bg-[#27ae60] w-full pb-20 px-6 flex flex-col items-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-16">

            <img 
              src="/HomeFirst/HomeI.png" 
              alt="Main Phone" 
              className="h-full w-full"
            />
           
        </div>
      </div>
    </section>
  );
};

export default Hero;