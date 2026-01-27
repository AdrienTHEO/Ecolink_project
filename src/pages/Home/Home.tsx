import RecomendedCollectors from "../../components/Collecteurs/Collecteurs"
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/Herosection/Herosection"
import Navbar from "../../components/Navbar/Navbar"

const Home:React.FC = () => {
  return (
    <>
        <Navbar/>
        <Hero/>

        <RecomendedCollectors/>
        <Footer/>
    </>
  )
}

export default Home