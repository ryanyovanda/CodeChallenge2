import Image from "next/image";
import ImageHero from "../../public/hero.png";
import Arrow from "../../public/arrow-down-right-svgrepo-com.svg"

const Hero = () =>{
    return(
        <>
        <div className="flex xs:px-4 md:px-[60px] flex-row flex-grow justify-between align-top min-h-[711px] max-h-[1048px] ">
            <div className="flex shrink grow-0 h-48 xs:w-screen md:w-[50%] py4 sm:block w-2vw font-bold tracking-tight flex-col ">
                <div className="xs:text-5xl py-10 lg:text-[80px] lg:leading-tight">
                    <span className="">Where Your Marketing Needs</span>
                    <span className="text-white"> Meet Our Expertise </span></div>
                    <div>
                    <Image src={Arrow} width={100} alt="Arrow"></Image>
                    </div>
            </div>
            <div className="hidden md:flex justify-end">
                <Image 
                src={ImageHero} 
                width={1300}
                height={100}
                alt="Hero"/></div>
            
        </div>
        </>
    )
}

export default Hero;