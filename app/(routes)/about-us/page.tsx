import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import ContactButton from "@/app/components/ContactButton";
import HeaderAboutUs from "@/app/components/AboutUs/Header";
import Culture from "@/app/components/AboutUs/Culture";
import CompanyHistory from "@/app/components/AboutUs/History";

const Services = () => {
    return(
        <>
        <NavBar />
        <ContactButton />
        <HeaderAboutUs />
        <Culture />
        <CompanyHistory />
        <Footer />
        </>
    )
}

export default Services;