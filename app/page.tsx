import Link from "next/link";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HeroRunnningText from "./components/HeroRunningText";
import ContactButton from "./components/ContactButton";
import CompanyOverview from "./components/CompanyOverview";
import Footer from "./components/Footer";
import ServicesHome from "./components/ServicesHome";

export default function Home() {
  return (
    <>
    <ContactButton />
    <NavBar />
    <Hero />
    <HeroRunnningText />
    <CompanyOverview />
    <ServicesHome />
    <Footer />
    </>
  );
}
