import Image from "next/image";
import ImageHero from "../../public/hero.png";
import Arrow from "../../public/arrow-down-right-svgrepo-com.svg"
import Link from "next/link";

const Hero = () =>{
    return(
        <>
        <div className="flex xs:px-4 md:px-[60px] py-4 h-auto flex-row justify-between">
            <div className="flex xs:w-screen md:w-2/5 py4 font-bold tracking-tight flex-col ">
                <div className="xs:text-5xl py-10 lg:text-[80px] pr-20">
                    <span className="text-[#232323]">Where Your Marketing Needs</span>
                    <span className="text-[#9e9e9e]"> Meet Our Expertise </span>
                </div>
                <div>
                    <Image src={Arrow} width={100} alt="Arrow"></Image>
                </div>
                <div className="flex xs:flex-col md:flex-row gap-6 py-5 border-b-[1px] border-[#232323] md:items-end">
                    <div className="flex flex-col w-1/2 gap-6 text-[#232323]">
                        <div className="flex flex-row justify-between">
                            <div><p>Location</p></div>
                            <div><p>Bandung <br/> Indonesia</p></div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div><p>Born in</p></div>
                            <div><p>June 2024</p></div>
                        </div>
                    </div>
                    <div className="">
                        <p>We are Vanda Studio that specializes in providing a wide range of media services</p>
                    </div>
                </div>
                <div className="w-full py-6 flex flex-row gap-4">
                    <div className="bg-transparent border-[1px] border-[#232323] rounded-3xl h-auto w-auto px-6 py-1 flex items-center justify-center hover:bg-white hover:border-white">
                        <Link href="/">Strategy</Link>
                    </div>
                    <div className="bg-transparent border-[1px] border-[#232323] rounded-3xl h-auto w-auto px-6 py-1 flex items-center justify-center hover:bg-white hover:border-white">
                        <Link href="/">Marketing</Link>
                    </div>
                    <div className="bg-transparent border-[1px] border-[#232323] rounded-3xl h-auto w-auto px-6 py-1 flex items-center justify-center hover:bg-white hover:border-white">
                        <Link href="/">Implementation</Link>
                </div>
              </div>
            </div>
            <div className=" w-scren h-auto justify-end ">
                <Image 
                className="hidden sm:block w-full h-auto "
                src={ImageHero}
                alt="Hero"/></div>
            
        </div> 
        </>
    )
}

export default Hero;