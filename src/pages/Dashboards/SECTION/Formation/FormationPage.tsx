import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Star, CheckCircle } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  modules: string[];
  certificat: boolean;
  category: string;
}

const FormationDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Tous les cours');

  const categories = [
    'Tous les cours',
    'Recyclage',
    'Biogaz',
    'Compostage',
    'Sensibilisation'
  ];

  const courses: Course[] = [
    {
      id: 1,
      title: 'Introduction au Recyclage des Plastiques',
      description: 'Apprenez les bases du recyclage des plastiques et comment trier efficacement vos déchets plastiques.',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
      rating: 4.8,
      reviews: 167,
      modules: [
        'Types de plastiques',
        'Processus de recyclage',
        'Tri sélectif efficace'
      ],
      certificat: true,
      category: 'Recyclage'
    },
    {
      id: 2,
      title: 'Production de Biogaz à partir de Déchets Organiques',
      description: 'Découvrez comment transformer vos déchets organiques en énergie renouvelable avec le biogaz.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
      rating: 4.9,
      reviews: 203,
      modules: [
        "Principe de la méthanisation",
        "Construction d'un digesteur",
        "Maintenance et sécurité"
      ],
      certificat: true,
      category: 'Biogaz'
    },
    {
      id: 3,
      title: 'Compostage Domestique Efficace',
      description: 'Maîtrisez l\'art du compostage pour réduire vos déchets et enrichir votre jardin naturellement.',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80',
      rating: 4.7,
      reviews: 184,
      modules: [
        'Matières compostables',
        'Techniques de compostage',
        'Utilisation du compost'
      ],
      certificat: true,
      category: 'Compostage'
    },
    {
      id: 4,
      title: 'Sensibilisation Communautaire',
      description: 'Apprenez à sensibiliser votre communauté aux enjeux environnementaux et à la gestion des déchets.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
      rating: 4.6,
      reviews: 145,
      modules: [
        'Communication efficace',
        'Organisation d\'événements',
        'Mobilisation citoyenne'
      ],
      certificat: false,
      category: 'Sensibilisation'
    },
    {
      id: 5,
      title: 'Recyclage des Métaux et Électroniques',
      description: 'Découvrez comment recycler les métaux et les déchets électroniques de manière responsable.',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80',
      rating: 4.8,
      reviews: 192,
      modules: [
        'Identification des métaux',
        'Démantèlement sécurisé',
        'Valorisation des composants'
      ],
      certificat: true,
      category: 'Recyclage'
    },
    {
      id: 6,
      title: 'Économie Circulaire au Cameroun',
      description: 'Comprenez les principes de l\'économie circulaire et comment les appliquer dans votre contexte local.',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80',
      rating: 4.9,
      reviews: 218,
      modules: [
        'Principes de base',
        'Études de cas locales',
        'Création de valeur'
      ],
      certificat: true,
      category: 'Sensibilisation'
    }
  ];

  const filteredCourses = activeCategory === 'Tous les cours' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  const handleCourseClick = (courseId: number) => {
      navigate(courseId.toString());
    /* navigate(`/formations/${courseId}`); */
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-b border-green-100">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1600&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="bg-linear-to-br from-green-600 to-emerald-600 p-4 rounded-2xl shadow-lg">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-linear-to-r from-green-700 via-emerald-600 to-green-800 bg-clip-text text-transparent">
              Formation
            </h1>
          </div>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            Développez vos compétences en gestion des déchets et contribuez à un avenir durable
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-green-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <span className="text-sm font-medium text-gray-500 whitespace-nowrap mr-2">
              {filteredCourses.length} {filteredCourses.length > 1 ? 'cours' : 'cours'}
            </span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-linear-to-r from-green-500 to-emerald-500 text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => handleCourseClick(course.id)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden bg-linear-to-br from-green-100 to-emerald-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                {course.certificat && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <CheckCircle className="w-3 h-3" />
                    Certificat inclus
                  </div>
                )}
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-900">{course.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm">({course.reviews})</span>
                </div>

                {/* Modules */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Modules :</p>
                  <ul className="space-y-1">
                    {course.modules.map((module, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="text-green-500 mt-0.5">•</span>
                        <span>{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCourseClick(course.id);
                  }}
                  className="w-full bg-linear-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  <span>Commencez</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default FormationDashboard;