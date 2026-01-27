import FormationHero from '../../components/Formations/FormationHero/FormationHero';
import WasteCategories from '../../components/Formations/WasteCategories/WasteCategories';
import RecyclingGuide from '../../components/Formations/RecyclingGuide/RecyclingGuide';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const FormationPage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
        <Navbar/>
      <FormationHero />
      <WasteCategories />
      <RecyclingGuide />
      <Footer/>
    </div>
  );
};

export default FormationPage;