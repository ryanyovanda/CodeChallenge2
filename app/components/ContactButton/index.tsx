import Image from "next/image";
import Contact from "/public/whatsapp.webp";
import Link from "next/link";

const ContactButton = () =>{
return(
    <>
    <div className="fixed p-5 flex z-10 object-right-bottom bottom-0 right-0 transition-all duration-300 hover:brightness-50">
    <Link href="https://api.whatsapp.com/send?phone=6288218449694&text=Halo%20Vanda%20Studio%2C%20saya%20mendapatkan%20informasi%20mengenai%20Vanda%20Studio%20melalui%20website%2C%20saya%20ingin%20tau%20lebih%20detail"
    target="_blank">
    <Image 
    className="w-16"
    src={Contact} 
    alt="Contact Button">
    </Image>
    </Link>
    </div>
    </>
)
}

export default ContactButton;