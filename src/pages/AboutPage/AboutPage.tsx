
import { 
  Leaf, Users, Target, Award, TrendingUp, Globe, 
  Lightbulb, Heart, Shield, Zap
} from 'lucide-react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';


// ============================================
// PAGE À PROPOS
// ============================================
const AboutPage = () => {
  const stats = [
    { value: '12,450+', label: 'Tonnes recyclées', icon: TrendingUp },
    { value: '8,340+', label: 'Utilisateurs actifs', icon: Users },
    { value: '450+', label: 'Collecteurs partenaires', icon: Award },
    { value: '15', label: 'Villes couvertes', icon: Globe }
  ];

  const values = [
    {
      icon: Leaf,
      title: 'Environnement',
      description: 'Nous plaçons la protection de l\'environnement au cœur de notre mission',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous utilisons l\'IA et les technologies pour révolutionner la gestion des déchets',
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Communauté',
      description: 'Nous créons des liens entre citoyens, collecteurs et recycleurs',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Fiabilité',
      description: 'Nous garantissons un service de qualité avec des partenaires vérifiés',
      color: 'from-blue-400 to-cyan-500'
    }
  ];

  const team = [
    {
      name: 'StrideNov',
      role: 'Startup fondatrice',
      description: 'Une équipe de jeunes ingénieurs passionnés par l\'innovation technologique et l\'environnement',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600'
    }
  ];

  const milestones = [
    { year: '2024', title: 'Création', description: 'Lancement du projet EcolinK par StrideNov' },
    { year: '2025', title: 'Phase pilote', description: 'Déploiement à Douala et expansion progressive' },
    { year: '2025', title: 'B2B', description: 'Communication sur la solution au pres des menages' },
    { year: '2026', title: 'Expansion', description: 'Couverture nationale et partenariats stratégiques' }
  ];

  return (
    <div className="w-full bg-white">
        <Navbar/>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-150 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-green-900/80 via-green-800/70 to-emerald-900/80"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-white px-8 text-center">
           <div className="relative mx-auto w-64 md:w-80">
             <img 
               src="/HomeFirst/logoT.png" 
               alt="Ecolink App" 
               className="w-full h-auto drop-shadow-2xl"
             />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">À propos d'EcolinK</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl leading-relaxed">
            Une solution intelligente et inclusive pour transformer la gestion des déchets au Cameroun
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
                <Target className="w-5 h-5" />
                <span className="font-semibold">Notre Mission</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Connecter les acteurs du recyclage
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                EcolinK est une plateforme numérique qui met en relation les ménages, les entreprises, 
                les collecteurs indépendants et les recycleurs pour optimiser la gestion des déchets au Cameroun.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Grâce à l'intelligence artificielle, la géolocalisation et la gamification, nous rendons 
                le recyclage accessible, simple et gratifiant pour tous.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800"
                alt="Recyclage"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-500 text-white p-8 rounded-2xl shadow-xl">
                <Zap className="w-12 h-12 mb-3" />
                <p className="text-2xl font-bold">IA Intégrée</p>
                <p className="text-green-100">Reconnaissance automatique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-linear-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre impact en chiffres
            </h2>
            <p className="text-xl text-gray-600">
              Des résultats concrets pour un Cameroun plus propre
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <stat.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos valeurs
            </h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident notre action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-linear-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre parcours
            </h2>
            <p className="text-xl text-gray-600">
              De l'idée à la réalité
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="shrink-0 w-24 text-3xl font-bold text-green-600">{milestone.year}</div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre équipe
            </h2>
            <p className="text-xl text-gray-600">
              Des jeunes ingénieurs passionnés et engagés
            </p>
          </div>

          {team.map((member, index) => (
            <div key={index} className="bg-linear-to-br from-green-50 to-emerald-50 rounded-3xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-96 object-cover"
                />
                <div className="p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-xl text-green-600 font-semibold mb-6">{member.role}</p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">{member.description}</p>
                  <div className="text-gray-600">
                    <p className="mb-2">✓ Développement mobile & web</p>
                    <p className="mb-2">✓ Intelligence artificielle</p>
                    <p className="mb-2">✓ Design & Communication</p>
                    <p>✓ Méthodologie Agile</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
};


export default AboutPage;