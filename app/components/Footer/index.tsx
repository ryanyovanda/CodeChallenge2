import Link from "next/link";
import Image from "next/image";
import LogoWhite from "/public/logo white.png";

const Footer = () =>{
    return(
        <>
        <div className="bg-[#232323] w-full xs:px-4 md:px-[60px] flex flex-col text-[#d5d8da] pt-[80px] pb-[50px] gap-4">
        <div className="flex xs:flex-col md:flex-row gap-5 font-semibold"> 
            <div><Image className="h-[70px] w-auto" src={LogoWhite} alt="Logo"></Image></div>
            <div className="w-80 "><p className="uppercase">Crafting success story together with US.</p></div>
        </div>
        <div className="md:text-8xl xs:text-6xl font-extrabold tracking-tighter"><h1>GET IN TOUCH @</h1></div>
        <div className="flex flex-row justify-between xs:flex-col md:flex-row gap-6">
            <div className="flex gap-6 text-4xl font-bold text-[#4b4b4b] xs:flex-col md:flex-row">
            <div className="hover:text-[#ff7d4a] transition duration-300 ease-in-out"> hello@vanda.com </div> 
            <div className="hover:text-[#ff7d4a] transition duration-300 ease-in-out"> +62 818 0884 5584 </div>
            </div>
            <div className="flex gap-2 flex-row xs:w-[30%]">
                <Link className=" bg-transparent border-[1px] border-white rounded-3xl h-auto w-auto px-6 py-1 flex items-center justify-center hover:bg-white hover:border-white" href="#">Instagram</Link>
                <Link className=" bg-transparent border-[1px] border-white rounded-3xl h-auto w-auto px-6 py-1 flex items-center justify-center hover:bg-white hover:border-white" href="#">Linkedin</Link>
            </div>
        </div>
        </div>
        <div className="border-t text-[#4b4b4b] border-[#4b4b4b] bg-[#232323] xs:px-[4px] md:px-[60px] py-4">
            <div className="flex flex-row justify-between"></div>
                <div>Narrativ Digital Agency™ 2024. All Rights Reserved</div>
            </div>
        
        </>
    )
}

export default Footer