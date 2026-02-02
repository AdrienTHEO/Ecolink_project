import React from 'react';
import { 
  Camera, MapPin, Mail, Phone, 
  History, Settings, ChevronRight,
  User, CheckCircle2, Globe,
  LogOut, Wallet
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const user = {
    name: "Adrien Tamba",
    email: "adrien.tamba@ecolink.cm",
    phone: "+237 677 00 00 00",
    location: "PK17, Douala, Cameroun",
    bio: "Utilisateur actif EcolinK. Je contribue à la propreté de mon quartier à PK17 en signalant et collectant les déchets recyclables.",
    points: 1250,
  };
  const Navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans text-[#1A1A1B] antialiased">
      
      {/* --- SECTION IDENTITÉ (Sans bannière) --- */}
      <header className="border-b border-gray-100 bg-[#FAFAFA]/50 pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center md:items-start md:text-left md:flex-row md:gap-10">
          
          {/* Photo de Profil unique */}
          <div className="relative group">
            <div className="w-32 h-32 md:w-44 md:h-44 bg-white rounded-[3rem] shadow-2xl shadow-gray-200 overflow-hidden border border-gray-100">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Adrien" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Adrien Tamba"
              />
            </div>
            <button className="absolute -bottom-2 -right-2 p-3 bg-white text-gray-900 border border-gray-100 rounded-2xl shadow-xl hover:bg-[#27ae60] hover:text-white transition-all">
              <Camera size={20}/>
            </button>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col justify-center">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <h1 className="text-4xl font-black tracking-tight leading-none uppercase italic">{user.name}</h1>
              <CheckCircle2 size={24} className="text-[#27ae60]" />
            </div>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-y-2 gap-x-6 text-sm font-bold text-gray-400 uppercase tracking-widest">
              <span className="flex items-center gap-2"><MapPin size={16} className="text-[#27ae60]"/> {user.location}</span>
              <span className="flex items-center gap-2"><Globe size={16}/> Profil vérifié</span>
            </div>
          </div>
        </div>
      </header>

      {/* --- CONTENU PRINCIPAL --- */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Infos de base */}
          <div className="lg:col-span-5 space-y-12">
            <section>
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-300 mb-6 italic">Manifeste Personnel</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                "{user.bio}"
              </p>
            </section>

            <section className="space-y-6 pt-6 border-t border-gray-50">
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-300 italic">Contact Direct</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100/50">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-gray-400"><Mail size={18}/></div>
                  <span className="font-bold text-sm tracking-tight text-gray-700">{user.email}</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100/50">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-gray-400"><Phone size={18}/></div>
                  <span className="font-bold text-sm tracking-tight text-gray-700">{user.phone}</span>
                </div>
              </div>
            </section>
          </div>

          {/* Actions & Portefeuille */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Wallet Minimaliste */}
            <div className="bg-[#1A1A1B] p-8 rounded-[2.5rem] text-white flex items-center justify-between group overflow-hidden relative">
              <div className="relative z-10">
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Points Accumulés</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black italic tracking-tighter">{user.points}</span>
                  <span className="text-[#27ae60] font-black italic">PTS</span>
                </div>
              </div>
              <button className="relative z-10 p-5 bg-[#27ae60] text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-green-900/20">
                Retirer
              </button>
              {/* Décoration subtile en arrière-plan */}
              <Wallet className="absolute -right-4 -bottom-4 text-white/5 w-32 h-32 rotate-12" />
            </div>

            {/* Menu sans cartes séparées (Design Inline) */}
            <div className="pt-4">
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-300 mb-4 px-2 italic">Configuration</h3>
              <div className="divide-y divide-gray-100 border-y border-gray-100">
                {[
                  { label: "Informations Personnelles", icon: <User size={20}/> },
                  { label: "Historique des gains", icon: <History size={20}/> },
                  { label: "Sécurité & Confidentialité", icon: <Settings size={20}/> },
                ].map((item, i) => (
                  <button key={i} className="w-full flex items-center justify-between py-6 px-2 hover:bg-gray-50 transition-colors group">
                    <div className="flex items-center gap-5">
                      <span className="text-gray-300 group-hover:text-[#27ae60] transition-colors">{item.icon}</span>
                      <span className="text-base font-bold text-gray-700 tracking-tight">{item.label}</span>
                    </div>
                    <ChevronRight size={18} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>

            <button onClick={()=>{Navigate('/home')}} className="flex items-center gap-3 text-gray-400 hover:text-red-500 font-black text-[10px] uppercase tracking-[0.2em] px-2 transition-colors">
              <LogOut size={16}/> Déconnexion
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ProfilePage;