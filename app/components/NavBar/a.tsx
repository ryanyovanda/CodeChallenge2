import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";

const NavBar = () => {
    return(
        <>
        <div className="flex flex-row px-[60px] py-[20px] w-screen justify-between border-b border-[#232323] ">
            <div className="flex align-middle "><Image src={Logo} width={169} height={50} alt="logo"/></div>
            <div className="flex align-middle justify-center space-x-4 rounded-full border-[1px] border-black p-4 py-[16px]">
                <div className=""><Link href="#">Home</Link></div>
                <div className="flex align-middle"><Link href="#">About</Link></div>
                <div className=""><Link href="#">Service</Link></div>
                <div className=""><Link href="#">Teams</Link></div>
            </div>
        </div>
        </>
    )
}

export default NavBar;