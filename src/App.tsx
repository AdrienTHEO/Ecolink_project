import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeF from "./pages/HomeF/HomeF";
import Home from "./pages/Home/Home";
import AuthPage from "./pages/Login/auth";
import FormationPage from "./pages/Formation/Formation";
import SubscriptionPage from "./pages/SubscriptionPage/SubscriptionPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
