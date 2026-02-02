import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeF from "./pages/HomeF/HomeF";
import Home from "./pages/Home/Home";
import AuthPage from "./pages/Login/auth";
import FormationPage from "./pages/Formation/Formation";
import SubscriptionPage from "./pages/SubscriptionPage/SubscriptionPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import HomeDashboard from "./pages/Dashboards/HomeDashboard/HomeDashboard";
import HeroDashboard from "./pages/Dashboards/SECTION/HeroDasboard/HeroDasboard";
import FormationDashboard from "./pages/Dashboards/SECTION/Formation/FormationPage";
import CourseDetail from "./pages/Dashboards/SECTION/Formation/CourseDetail";
import Marketplace from "./pages/Dashboards/SECTION/MarketPlace/Marketplace";
import CarteInteractive from "./pages/Dashboards/SECTION/Carte interactif/CarteInteractive";
import CollecteursPage from "./pages/Dashboards/SECTION/CollecteurPage/CollecteursPage";
import ProfilePage from "./pages/Profil/Profil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeF />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/form" element={<FormationPage />} /> 
        <Route path="/sub" element={<SubscriptionPage />} />
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/contact" element={<ContactPage />} /> 
        

        <Route path="/dashboard" element={<HomeDashboard />}>
                <Route index element={<HeroDashboard/> } />
                <Route path="formations" element={< FormationDashboard />} />
                <Route path="formations/:courseId" element={<CourseDetail />} />
                <Route path="marketplace" element={<Marketplace />} />
                <Route path="map" element={<CarteInteractive/>} />
                <Route path="collectors" element={<CollecteursPage/>} />
                <Route path="profil" element={<ProfilePage />} />
       </Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
