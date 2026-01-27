import { useState } from 'react';
import { Check, Sparkles, TrendingUp, Award, Users, Shield, Zap } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const SubscriptionPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

  const plans = [
    {
      id: 'basic',
      name: 'Basique',
      color: 'gray',
      gradient: 'from-gray-50 to-white',
      borderColor: 'border-gray-200',
      priceMonthly: 0,
      priceYearly: 0,
      popular: false,
      description: 'Pour les particuliers',
      features: [
        'Accès à la géolocalisation',
        'Scanner IA de déchets',
        '5 collectes par mois',
        'Système de points verts',
        'Support par email',
        'Formations de base'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      color: 'green',
      gradient: 'from-green-500 to-emerald-600',
      borderColor: 'border-green-500',
      priceMonthly: 2500,
      priceYearly: 25000,
      popular: true,
      description: 'Pour les entreprises',
      features: [
        'Collectes illimitées',
        'Scanner IA avancé',
        'Priorité sur les collecteurs',
        'Tableau de bord analytique',
        'Support prioritaire 24/7',
        'Formations certifiantes',
        'Rapports mensuels détaillés',
        'API pour intégration'
      ]
    },
    {
      id: 'enterprise',
      name: 'Entreprise',
      color: 'blue',
      gradient: 'from-gray-50 to-white',
      borderColor: 'border-gray-200',
      priceMonthly: 5000,
      priceYearly: 50000,
      popular: false,
      description: 'Pour les grandes organisations',
      features: [
        'Tout du plan Premium',
        'Gestion multi-sites',
        'Compte manager dédié',
        'Formations sur site',
        'Personnalisation complète',
        'Intégration ERP/CRM',
        'SLA garanti 99.9%',
        'Consultation stratégique'
      ]
    }
  ];

  const advantages = [
    {
      icon: TrendingUp,
      title: 'Optimisez vos coûts',
      description: 'Réduisez vos dépenses en gestion des déchets jusqu\'à 40% grâce à notre système intelligent'
    },
    {
      icon: Award,
      title: 'Gagnez des récompenses',
      description: 'Cumulez des points verts échangeables contre des avantages et réductions'
    },
    {
      icon: Users,
      title: 'Réseau de professionnels',
      description: 'Accédez à un réseau vérifié de collecteurs et recycleurs certifiés'
    },
    {
      icon: Shield,
      title: 'Conformité garantie',
      description: 'Respectez les normes environnementales avec nos rapports automatiques'
    },
    {
      icon: Zap,
      title: 'Collecte rapide',
      description: 'Intervention sous 24h avec notre système de planification intelligent'
    },
    {
      icon: Sparkles,
      title: 'Impact mesurable',
      description: 'Suivez votre impact environnemental avec des statistiques en temps réel'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">

      <Navbar/>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-green-600 via-green-500 to-emerald-600 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Plans & Tarifs</h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Choisissez le plan adapté à vos besoins et contribuez à un environnement plus propre
          </p>
          
          {/* Toggle Mensuel/Annuel */}
          <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-2">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-white text-green-600 shadow-lg'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                billingCycle === 'yearly'
                  ? 'bg-white text-green-600 shadow-lg'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Annuel
              <span className="absolute -top-2 -right-2 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-1 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans de tarification */}
      <section className="py-20 px-8 md:px-16 lg:px-24 -mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-linear-to-br ${
                  plan.popular ? plan.gradient : 'from-white to-gray-50'
                } rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  plan.popular ? 'scale-105 border-4 border-green-400' : 'border-2 ' + plan.borderColor
                }`}
              >
                {/* Badge "Populaire" */}
                {plan.popular && (
                  <div className="absolute top-6 right-6 bg-amber-400 text-amber-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Populaire
                  </div>
                )}

                <div className={`p-8 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {/* En-tête */}
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm ${plan.popular ? 'text-green-100' : 'text-gray-600'}`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Prix */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-semibold">FCFA</span>
                      <span className="text-5xl font-bold">
                        {billingCycle === 'monthly'
                          ? plan.priceMonthly.toLocaleString()
                          : Math.round(plan.priceYearly / 12).toLocaleString()}
                      </span>
                      <span className="text-lg">/mois</span>
                    </div>
                    {billingCycle === 'yearly' && plan.priceYearly > 0 && (
                      <p className={`text-sm mt-2 ${plan.popular ? 'text-green-100' : 'text-gray-600'}`}>
                        Facturé {plan.priceYearly.toLocaleString()} FCFA/an
                      </p>
                    )}
                    {plan.priceMonthly === 0 && (
                      <p className={`text-lg font-semibold mt-2 ${plan.popular ? 'text-white' : 'text-green-600'}`}>
                        Gratuit pour toujours
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className={`shrink-0 w-6 h-6 rounded-full ${
                          plan.popular ? 'bg-white/20' : 'bg-green-100'
                        } flex items-center justify-center mt-0.5`}>
                          <Check className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-green-600'}`} />
                        </div>
                        <span className={`${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Bouton CTA */}
                  <button
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg ${
                      plan.popular
                        ? 'bg-white text-green-600 hover:bg-green-50'
                        : 'bg-linear-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                    }`}
                  >
                    S'abonner
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi s'abonner ? */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi s'abonner à EcolinK ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rejoignez des milliers d'utilisateurs qui transforment leur gestion des déchets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group bg-linear-to-br from-gray-50 to-white border-2 border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-linear-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section FAQ / Garantie */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-linear-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Essayez sans risque
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Tous nos plans payants incluent une <strong>garantie satisfait ou remboursé de 30 jours</strong>. 
            Si EcolinK ne répond pas à vos attentes, nous vous remboursons intégralement, sans question.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <Check className="w-5 h-5 text-green-600" />
              <span className="font-semibold">Sans engagement</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <Check className="w-5 h-5 text-green-600" />
              <span className="font-semibold">Annulation à tout moment</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <Check className="w-5 h-5 text-green-600" />
              <span className="font-semibold">Support dédié</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-8 bg-linear-to-br from-gray-900 to-gray-800 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Rejoignez EcolinK dès aujourd'hui et participez à la révolution de la gestion des déchets au Cameroun
          </p>
          <button className="px-10 py-5 bg-linear-to-r from-green-500 to-emerald-600 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 shadow-xl">
            Commencer gratuitement
          </button>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default SubscriptionPage;