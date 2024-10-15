import Link from "next/link";
import Image from "next/image";
import LogoWhite from "../../public/logo white.png";

const Footer = () =>{
    return(
        <>
        <div className="bg-[#232323] w-full px-[60px] flex flex-col text-white">
        <div className="flex flex-row gap-2"> 
            <div><Image className="h-[70px] w-auto" src={LogoWhite} alt="Logo"></Image></div>
            <div className="w-80"><p className="text-white uppercase">Crafting success story together with US.</p></div>
        </div>
        <div><h1>GET IN TOUCH @</h1></div>
        <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
            <div> hello@narrativ.agency </div> <div> +62 818 0884 5584 </div>
            </div>
            <div className="flex gap-2">
                <Link href="#">Instagram</Link>
                <Link href="#">Linkedin</Link>
            </div>
        </div>
        </div>
        <div className="border-t text-white bg-[#232323] px-[60px]">
            <div className="flex flex-row justify-between"></div>
                <div>Narrativ Digital Agency™ 2024. All Rights Reserved</div>
            </div>
        
        </>
    )
}

export default Footer