import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Testimony from "@/app/components/Testimony";
import ContactButton from "@/app/components/ContactButton";
import OurServices from "@/app/components/OurServices";
import Pricelist from "@/app/components/ServicePage";

const Services = () => {
    return(
        <>
        <ContactButton />
        <NavBar />
        <OurServices />
        <Pricelist />
        <Testimony />
        <Footer />
        </>
    )
}

export default Services;