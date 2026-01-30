import React from 'react';
import HeroDashboardComponent from '../../../../components/DASHBOARD COMPONENTS/HeroDashboard';


const HeroDashboard: React.FC = () => {

  return (
    <section className="relative w-full">
      {/* Bannière Verte Supérieure (selon ta 2ème capture) */}
        <HeroDashboardComponent />
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

export default HeroDashboard;