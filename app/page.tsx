import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HeroRunnningText from "./components/HeroRunningText";
import ContactButton from "./components/ContactButton";
import Footer from "./components/Footer";
import ServicesHome from "./components/ServicesHome";
import OurServices from "./components/OurServices";
import Testimony from "./components/Testimony";
import CompanyOverview from "./components/CompanyOverview";


export default function Home() {
  return (
    <>
    <ContactButton />
    <NavBar />
    <Hero />
    <HeroRunnningText />
    <CompanyOverview />
    <ServicesHome />
    <OurServices />
    <Testimony />
    <Footer />
    </>
  );
}
