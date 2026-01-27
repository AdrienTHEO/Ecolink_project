import { ArrowRight, GraduationCap } from "lucide-react";

const FormationHero = () => {
  return (
    <section className="relative h-[60vh] min-h-125 overflow-hidden">
      {/* Image de fond avec overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Contenu */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-8">
        <div className="flex items-center gap-4 mb-8">
          <GraduationCap className="w-20 h-20 md:w-24 md:h-24" strokeWidth={1.5} />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">Formations</h1>
        </div>
        
        <button className="group flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
          Suivre
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default FormationHero;