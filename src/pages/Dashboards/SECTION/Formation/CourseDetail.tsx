import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  PlayCircle,
  Download,
  Share2,
  BookOpen,
  Target,
  AlertCircle,
  MessageCircle,
  TrendingUp,
  GraduationCap,
  Leaf
} from 'lucide-react';

// types/course.types.ts

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  modules: string[];
  certificat: boolean;
  category: string;
  // Détails supplémentaires pour la page de détails
  longDescription?: string;
  duration?: string;
  level?: 'Débutant' | 'Intermédiaire' | 'Avancé';
  instructor?: {
    name: string;
    title: string;
    avatar: string;
    bio: string;
  };
  learningObjectives?: string[];
  prerequisites?: string[];
  syllabus?: {
    week: number;
    title: string;
    topics: string[];
  }[];
  testimonials?: {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

export interface CourseCategory {
  name: string;
  slug: string;
  description: string;
  icon: string;
}
// Données complètes des formations (à remplacer par un appel API)
const coursesData: Course[] = [
  {
    id: 1,
    title: 'Introduction au Recyclage des Plastiques',
    description: 'Apprenez les bases du recyclage des plastiques et comment trier efficacement vos déchets plastiques.',
    longDescription: 'Ce cours complet vous guide à travers les fondamentaux du recyclage des plastiques, depuis l\'identification des différents types de plastiques jusqu\'aux processus industriels de transformation. Vous découvrirez comment le tri sélectif peut avoir un impact significatif sur l\'environnement et l\'économie circulaire.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
    rating: 4.8,
    reviews: 167,
    duration: '6 semaines',
    level: 'Débutant',
    modules: [
      'Types de plastiques',
      'Processus de recyclage',
      'Tri sélectif efficace'
    ],
    certificat: true,
    category: 'Recyclage',
    instructor: {
      name: 'Dr. Marie Kamga',
      title: 'Experte en Gestion des Déchets',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
      bio: 'Plus de 15 ans d\'expérience dans la gestion environnementale et le recyclage au Cameroun.'
    },
    learningObjectives: [
      'Identifier les 7 types principaux de plastiques',
      'Comprendre le cycle de vie du plastique recyclé',
      'Mettre en place un système de tri efficace',
      'Connaître les débouchés du recyclage plastique'
    ],
    prerequisites: [
      'Aucun prérequis nécessaire',
      'Intérêt pour l\'environnement',
      'Accès à internet'
    ],
    syllabus: [
      {
        week: 1,
        title: 'Les bases du plastique',
        topics: ['Histoire du plastique', 'Types de plastiques', 'Symboles de recyclage']
      },
      {
        week: 2,
        title: 'Le processus de recyclage',
        topics: ['Collecte et tri', 'Lavage et broyage', 'Transformation']
      },
      {
        week: 3,
        title: 'Tri sélectif pratique',
        topics: ['Mise en place du tri', 'Erreurs à éviter', 'Optimisation']
      },
      {
        week: 4,
        title: 'Impact environnemental',
        topics: ['Pollution plastique', 'Bénéfices du recyclage', 'Économie circulaire']
      },
      {
        week: 5,
        title: 'Innovations et technologies',
        topics: ['Nouvelles méthodes', 'Recyclage chimique', 'Cas d\'étude']
      },
      {
        week: 6,
        title: 'Projet final',
        topics: ['Plan d\'action personnel', 'Présentation', 'Certification']
      }
    ],
    testimonials: [
      {
        id: 1,
        name: 'Jean-Paul Nkomo',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        rating: 5,
        comment: 'Formation très complète qui m\'a permis de lancer mon entreprise de recyclage. Les modules sont clairs et pratiques.',
        date: '2025-01-15'
      },
      {
        id: 2,
        name: 'Aïssatou Bello',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
        rating: 5,
        comment: 'Excellente formation ! J\'ai appris énormément sur le tri des plastiques. Je recommande vivement.',
        date: '2025-01-10'
      },
      {
        id: 3,
        name: 'Patrick Essomba',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
        rating: 4,
        comment: 'Très instructif et bien structuré. Les vidéos sont de qualité et l\'instructrice très pédagogue.',
        date: '2025-01-08'
      }
    ]
  },
  {
    id: 2,
    title: 'Production de Biogaz à partir de Déchets Organiques',
    description: 'Découvrez comment transformer vos déchets organiques en énergie renouvelable avec le biogaz.',
    longDescription: 'Apprenez à concevoir, construire et maintenir un système de production de biogaz domestique ou communautaire. Cette formation pratique couvre tous les aspects techniques et économiques de la méthanisation.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    rating: 4.9,
    reviews: 203,
    duration: '8 semaines',
    level: 'Intermédiaire',
    modules: [
      "Principe de la méthanisation",
      "Construction d'un digesteur",
      "Maintenance et sécurité"
    ],
    certificat: true,
    category: 'Biogaz',
    instructor: {
      name: 'Eng. Samuel Fotso',
      title: 'Ingénieur en Énergies Renouvelables',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
      bio: 'Spécialiste en biogaz avec 20+ installations réalisées au Cameroun.'
    },
    learningObjectives: [
      'Comprendre le processus de méthanisation',
      'Dimensionner un digesteur selon les besoins',
      'Construire un système de biogaz fonctionnel',
      'Assurer la maintenance et la sécurité'
    ],
    prerequisites: [
      'Notions de base en bricolage',
      'Motivation pour les énergies renouvelables'
    ],
    syllabus: [
      {
        week: 1,
        title: 'Introduction à la méthanisation',
        topics: ['Principe biologique', 'Avantages du biogaz', 'Types de digesteurs']
      },
      {
        week: 2,
        title: 'Dimensionnement',
        topics: ['Calcul des besoins', 'Choix des matériaux', 'Budget prévisionnel']
      }
    ],
    testimonials: []
  },
  {
    id: 3,
    title: 'Compostage Domestique Efficace',
    description: 'Maîtrisez l\'art du compostage pour réduire vos déchets et enrichir votre jardin naturellement.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80',
    rating: 4.7,
    reviews: 184,
    duration: '4 semaines',
    level: 'Débutant',
    modules: [
      'Matières compostables',
      'Techniques de compostage',
      'Utilisation du compost'
    ],
    certificat: true,
    category: 'Compostage',
    instructor: {
      name: 'Madeleine Tchoumba',
      title: 'Agronome et Formatrice',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      bio: 'Passionnée d\'agriculture urbaine et de permaculture depuis 10 ans.'
    },
    learningObjectives: [
      'Identifier les matières compostables',
      'Maîtriser les techniques de compostage',
      'Produire un compost de qualité',
      'Utiliser le compost efficacement'
    ],
    prerequisites: ['Aucun prérequis'],
    syllabus: [],
    testimonials: []
  },
  {
  id: 4,
  title: 'Sensibilisation Communautaire',
  description: 'Apprenez à sensibiliser votre communauté aux enjeux environnementaux et à la gestion des déchets.',
  longDescription: 'Ce cours vous donne les outils nécessaires pour concevoir et mener des campagnes de sensibilisation efficaces au sein des communautés urbaines et rurales. Vous apprendrez à mobiliser les citoyens, collaborer avec les autorités locales et mesurer l’impact de vos actions.',
  image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
  rating: 4.6,
  reviews: 145,
  duration: '5 semaines',
  level: 'Intermédiaire',
  modules: [
    'Communication efficace',
    "Organisation d'événements",
    'Mobilisation citoyenne'
  ],
  certificat: false,
  category: 'Sensibilisation',
  instructor: {
    name: 'Nathalie Ndzié',
    title: 'Chargée de Projets Environnementaux',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&q=80',
    bio: 'Plus de 12 ans d’expérience dans la mobilisation communautaire et les ONG environnementales.'
  },
  learningObjectives: [
    'Comprendre les enjeux de la sensibilisation environnementale',
    'Créer des messages clairs et impactants',
    'Organiser des actions communautaires durables',
    'Impliquer les acteurs locaux'
  ],
  prerequisites: [
    'Intérêt pour l’action communautaire',
    'Aucune compétence technique requise'
  ],
  syllabus: [
    {
      week: 1,
      title: 'Introduction à la sensibilisation',
      topics: ['Défis environnementaux', 'Rôle des communautés']
    },
    {
      week: 2,
      title: 'Techniques de communication',
      topics: ['Messages clés', 'Supports visuels', 'Réseaux sociaux']
    },
    {
      week: 3,
      title: 'Organisation d’actions',
      topics: ['Événements locaux', 'Ateliers participatifs']
    },
    {
      week: 4,
      title: 'Mobilisation citoyenne',
      topics: ['Engagement durable', 'Leadership local']
    },
    {
      week: 5,
      title: 'Projet final',
      topics: ['Plan de sensibilisation', 'Présentation']
    }
  ],
  testimonials: []
},
{
  id: 5,
  title: 'Recyclage des Métaux et Électroniques',
  description: 'Découvrez comment recycler les métaux et les déchets électroniques de manière responsable.',
  longDescription: 'Cette formation vous initie aux bonnes pratiques de collecte, de tri et de valorisation des déchets métalliques et électroniques. Vous comprendrez les risques environnementaux et sanitaires liés aux e-déchets et les opportunités économiques du recyclage.',
  image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80',
  rating: 4.8,
  reviews: 192,
  duration: '6 semaines',
  level: 'Intermédiaire',
  modules: [
    'Identification des métaux',
    'Démantèlement sécurisé',
    'Valorisation des composants'
  ],
  certificat: true,
  category: 'Recyclage',
  instructor: {
    name: 'Ing. Rodrigue Mballa',
    title: 'Ingénieur en Recyclage Industriel',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    bio: 'Expert en gestion des déchets électroniques et fondateur d’un centre de recyclage.'
  },
  learningObjectives: [
    'Identifier les métaux recyclables',
    'Démonter des équipements électroniques en sécurité',
    'Comprendre la chaîne de valorisation',
    'Réduire les impacts environnementaux'
  ],
  prerequisites: [
    'Notions de base en sécurité',
    'Intérêt pour le recyclage'
  ],
  syllabus: [
    {
      week: 1,
      title: 'Introduction aux e-déchets',
      topics: ['Types de déchets', 'Risques environnementaux']
    },
    {
      week: 2,
      title: 'Métaux recyclables',
      topics: ['Ferreux', 'Non ferreux', 'Métaux précieux']
    },
    {
      week: 3,
      title: 'Démantèlement',
      topics: ['Outils', 'Sécurité', 'Tri des composants']
    },
    {
      week: 4,
      title: 'Valorisation',
      topics: ['Revente', 'Réutilisation', 'Transformation']
    },
    {
      week: 5,
      title: 'Cadre réglementaire',
      topics: ['Normes locales', 'Responsabilité environnementale']
    },
    {
      week: 6,
      title: 'Projet pratique',
      topics: ['Étude de cas', 'Certification']
    }
  ],
  testimonials: []
},
{
  id: 6,
  title: 'Économie Circulaire au Cameroun',
  description: 'Comprenez les principes de l’économie circulaire et comment les appliquer dans votre contexte local.',
  longDescription: 'Ce cours explore les modèles d’économie circulaire adaptés aux réalités camerounaises. Vous découvrirez comment transformer les déchets en ressources, créer de la valeur locale et développer des projets durables.',
  image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80',
  rating: 4.9,
  reviews: 218,
  duration: '7 semaines',
  level: 'Avancé',
  modules: [
    'Principes de base',
    'Études de cas locales',
    'Création de valeur'
  ],
  certificat: true,
  category: 'Sensibilisation',
  instructor: {
    name: 'Pr. Alain Ndzi',
    title: 'Économiste Environnemental',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&q=80',
    bio: 'Chercheur et consultant en économie circulaire et développement durable.'
  },
  learningObjectives: [
    'Comprendre les principes de l’économie circulaire',
    'Identifier des opportunités locales',
    'Créer des projets à impact',
    'Favoriser le développement durable'
  ],
  prerequisites: [
    'Connaissances de base en environnement',
    'Intérêt pour l’entrepreneuriat durable'
  ],
  syllabus: [
    {
      week: 1,
      title: 'Introduction à l’économie circulaire',
      topics: ['Concepts clés', 'Différences avec l’économie linéaire']
    },
    {
      week: 2,
      title: 'Contexte camerounais',
      topics: ['Défis locaux', 'Opportunités']
    },
    {
      week: 3,
      title: 'Études de cas',
      topics: ['Initiatives locales', 'Startups vertes']
    },
    {
      week: 4,
      title: 'Modèles économiques',
      topics: ['Chaînes de valeur', 'Innovation']
    },
    {
      week: 5,
      title: 'Financement',
      topics: ['Subventions', 'Partenariats']
    },
    {
      week: 6,
      title: 'Mise en œuvre',
      topics: ['Planification', 'Indicateurs d’impact']
    },
    {
      week: 7,
      title: 'Projet final',
      topics: ['Projet circulaire', 'Présentation']
    }
  ],
  testimonials: []
}, 
];

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'syllabus' | 'reviews'>('overview');
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    // Simuler le chargement des données
    const foundCourse = coursesData.find(c => c.id === Number(courseId));
    if (foundCourse) {
      setCourse(foundCourse);
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [courseId]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement du cours...</p>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    setIsEnrolled(true);
    // Logique d'inscription
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-green-50 to-emerald-50">
      {/* Navigation */}
      <div className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Retour aux formations</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-green-900 via-emerald-800 to-green-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Category Badge */}
              <div className="flex items-center gap-3">
                <span className="bg-green-400/20 text-green-100 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-green-400/30">
                  {course.category}
                </span>
                <span className="bg-yellow-400/20 text-yellow-100 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-400/30 flex items-center gap-1">
                  <Leaf className="w-4 h-4" />
                  {course.level}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {course.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-green-100 leading-relaxed">
                {course.longDescription || course.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-green-100">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-green-200">({course.reviews} avis)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{course.reviews + 234} étudiants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                {course.certificat && (
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span>Certificat inclus</span>
                  </div>
                )}
              </div>

              {/* Instructor */}
              {course.instructor && (
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-white/30"
                  />
                  <div>
                    <p className="text-sm text-green-200">Formateur</p>
                    <p className="font-semibold text-lg">{course.instructor.name}</p>
                    <p className="text-sm text-green-200">{course.instructor.title}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Enrollment Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden sticky top-24">
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  {!isEnrolled && (
                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-green-600 p-4 rounded-full shadow-lg hover:scale-110 transition-all">
                      <PlayCircle className="w-8 h-8" />
                    </button>
                  )}
                </div>

                {/* Enrollment Info */}
                <div className="p-6 space-y-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gray-900">Gratuit</p>
                    <p className="text-sm text-gray-600">Formation sponsorisée</p>
                  </div>

                  {!isEnrolled ? (
                    <button
                      onClick={handleEnroll}
                      className="w-full bg-linear-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      S'inscrire maintenant
                    </button>
                  ) : (
                    <button className="w-full bg-linear-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg">
                      Continuer la formation
                    </button>
                  )}

                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <span>Accès illimité à vie</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <span>Certificat de réussite</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <span>Support communautaire</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <span>Ressources téléchargeables</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm">Partager</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Download className="w-4 h-4" />
                      <span className="text-sm">Sauvegarder</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="flex border-b border-gray-200">
                {[
                  { id: 'overview', label: 'Vue d\'ensemble', icon: BookOpen },
                  { id: 'syllabus', label: 'Programme', icon: Target },
                  { id: 'reviews', label: 'Avis', icon: MessageCircle }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-green-50 text-green-600 border-b-2 border-green-500'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="p-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    {/* Learning Objectives */}
                    {course.learningObjectives && course.learningObjectives.length > 0 && (
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Target className="w-6 h-6 text-green-500" />
                          Ce que vous allez apprendre
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {course.learningObjectives.map((objective, index) => (
                            <div key={index} className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                              <span className="text-gray-700">{objective}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Prerequisites */}
                    {course.prerequisites && course.prerequisites.length > 0 && (
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <AlertCircle className="w-6 h-6 text-blue-500" />
                          Prérequis
                        </h3>
                        <ul className="space-y-2">
                          {course.prerequisites.map((prerequisite, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-700">
                              <span className="text-green-500 mt-1">•</span>
                              <span>{prerequisite}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Instructor Bio */}
                    {course.instructor && (
                      <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <GraduationCap className="w-6 h-6 text-green-500" />
                          À propos du formateur
                        </h3>
                        <div className="flex items-start gap-4">
                          <img
                            src={course.instructor.avatar}
                            alt={course.instructor.name}
                            className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-lg"
                          />
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900">{course.instructor.name}</h4>
                            <p className="text-green-600 font-medium mb-2">{course.instructor.title}</p>
                            <p className="text-gray-700">{course.instructor.bio}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Syllabus Tab */}
                {activeTab === 'syllabus' && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Programme du cours</h3>
                    {course.syllabus && course.syllabus.length > 0 ? (
                      <div className="space-y-4">
                        {course.syllabus.map((week, index) => (
                          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:border-green-300 transition-colors">
                            <div className="bg-linear-to-r from-green-50 to-emerald-50 p-4 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                                  {week.week}
                                </div>
                                <div>
                                  <p className="text-sm text-green-600 font-medium">Semaine {week.week}</p>
                                  <h4 className="font-bold text-gray-900">{week.title}</h4>
                                </div>
                              </div>
                            </div>
                            <div className="p-4 bg-white">
                              <ul className="space-y-2">
                                {week.topics.map((topic, topicIndex) => (
                                  <li key={topicIndex} className="flex items-center gap-3 text-gray-700">
                                    <PlayCircle className="w-4 h-4 text-green-500" />
                                    <span>{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600 text-center py-8">Le programme détaillé sera bientôt disponible.</p>
                    )}
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-gray-900">Avis des étudiants</h3>
                      <div className="flex items-center gap-2">
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        <span className="text-2xl font-bold">{course.rating}</span>
                        <span className="text-gray-600">/ 5</span>
                      </div>
                    </div>

                    {course.testimonials && course.testimonials.length > 0 ? (
                      <div className="space-y-4">
                        {course.testimonials.map((testimonial) => (
                          <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                            <div className="flex items-start gap-4">
                              <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                  <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`w-4 h-4 ${
                                          i < testimonial.rating
                                            ? 'fill-yellow-400 text-yellow-400'
                                            : 'text-gray-300'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-gray-700 mb-2">{testimonial.comment}</p>
                                <p className="text-sm text-gray-500">
                                  {new Date(testimonial.date).toLocaleDateString('fr-FR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600 text-center py-8">Aucun avis pour le moment. Soyez le premier à laisser un avis !</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Related Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Stats Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Statistiques</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <TrendingUp className="w-5 h-5" />
                    <span>Taux de réussite</span>
                  </div>
                  <span className="font-bold text-green-600">94%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5" />
                    <span>Inscrits</span>
                  </div>
                  <span className="font-bold">{course.reviews + 234}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5" />
                    <span>Durée</span>
                  </div>
                  <span className="font-bold">{course.duration}</span>
                </div>
              </div>
            </div>

            {/* Modules Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Modules du cours</h3>
              <ul className="space-y-3">
                {course.modules.map((module, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <div className="bg-green-100 text-green-600 w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm font-bold">
                      {index + 1}
                    </div>
                    <span>{module}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-linear-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
              <Leaf className="w-12 h-12 mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-2">Rejoignez la révolution verte</h3>
              <p className="text-green-100 mb-4">
                Faites partie de la communauté EcolinK et contribuez à un Cameroun plus propre.
              </p>
              <button className="w-full bg-white text-green-600 font-bold py-3 rounded-lg hover:bg-green-50 transition-colors">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;