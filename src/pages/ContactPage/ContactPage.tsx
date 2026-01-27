import { CheckCircle, Clock, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Send, TwitterIcon } from "lucide-react";
import Footer from "../../components/Footer/Footer";
import { useState, type FormEvent} from "react";
import Navbar from "../../components/Navbar/Navbar";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@ecolink.cm',
      link: 'mailto:contact@ecolink.cm',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+237 123 456 789',
      link: 'tel:+237123456789',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Douala, Cameroun',
      link: '#',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Horaires',
      value: 'Lun - Ven: 8h - 18h',
      link: '#',
      color: 'from-amber-400 to-orange-500'
    }
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', link: '#', color: 'hover:bg-blue-600' },
    { icon: TwitterIcon, label: 'Twitter', link: '#', color: 'hover:bg-sky-500' },
    { icon: Instagram, label: 'Instagram', link: '#', color: 'hover:bg-pink-600' },
    { icon: Linkedin, label: 'LinkedIn', link: '#', color: 'hover:bg-blue-700' }
  ];

  return (
    <div className="w-full bg-white">
        <Navbar/>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-100 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-green-900/80 via-green-800/70 to-emerald-900/80"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-white px-8 text-center">
          <MessageCircle className="w-16 h-16 mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="group bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-linear-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Envoyez-nous un message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>

              {submitted && (
                <div className="mb-6 bg-green-100 border-2 border-green-500 text-green-700 p-4 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-semibold">Message envoyé avec succès !</span>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nom complet</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Téléphone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="+237 123 456 789"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Sujet</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="info">Demande d'information</option>
                    <option value="collector">Devenir collecteur</option>
                    <option value="partner">Partenariat</option>
                    <option value="support">Support technique</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Informations supplémentaires */}
            <div>
              <div className="bg-linear-to-br from-green-500 to-emerald-600 text-white rounded-3xl p-10 mb-8">
                <h3 className="text-3xl font-bold mb-6">Pourquoi nous contacter ?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 shrink-0 mt-1" />
                    <span>Obtenir des informations sur nos services</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 shrink-0 mt-1" />
                    <span>Devenir collecteur partenaire</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 shrink-0 mt-1" />
                    <span>Établir un partenariat stratégique</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 shrink-0 mt-1" />
                    <span>Support technique et assistance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 shrink-0 mt-1" />
                    <span>Demandes de formation</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Suivez-nous</h3>
                <p className="text-gray-600 mb-6">
                  Restez connecté avec EcolinK sur les réseaux sociaux
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className={`w-14 h-14 bg-gray-800 ${social.color} rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127162.93178107468!2d9.614656!3d4.0510563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d0d3b6fc0b%3A0x6ba5851cab7c5e64!2sDouala%2C%20Cameroon!5e0!3m2!1sen!2s!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Carte de localisation"
        ></iframe>
      </section>
        <Footer/>
    </div>
  );
};


export default ContactPage;