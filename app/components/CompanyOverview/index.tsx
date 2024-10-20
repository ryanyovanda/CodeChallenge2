import Image from "next/image";
import Overview1 from "/public/overview-1.webp"
import Overview2 from "/public/overview-2.webp"
import {config} from "../../config";
import Link from "next/link";


const CompanyOverview = () =>{
    return(
        <>
        <div className="flex h-auto w-full xs:px-0 md:flex-row xs:flex-col-reverse gap-5 md:px-[60px] pt-11 ">
            <div className="flex flex-col w-full">
                <div className=""><Image
                className=" w-[650px]"
                src={Overview1}
                alt="Company Overview 1">
                </Image></div>
                <div><Image
                src={Overview2}
                alt="Company Overview 2">
                </Image></div>
                </div>
            <div className="flex flex-col bg md:pt-32 xs:pt-10 gap-6 px-5">
                
            <div className="md:ml-[-48px]">
                <p>(Unleashing Potential)</p>
                <h1 className="xs:text-5xl md:text-[90px] font-bold leading-none">
                Welcome to our Digital Success Stories</h1>
            </div>
            <div className="flex leading-loose flex-col gap-6">
                <div className="font-bold text-xl">Explore our professional services designed to cater to all your requirements.</div>
                <div>
                <div className="text-xl">
                Explore our tailored professional services designed to meet all your needs. From strategy to execution, weve got you covered for impactful results and seamless experiences.</div>
                </div>
                <div>
                <div className="bg-transparent border-[1px] font-bold border-[#232323] rounded-3xl h-auto md:w-[20%] xs:w-[50%] px-6 py-1 flex items-center justify-center hover:bg-white hover:border-white">
                        <Link href="/about-us">Contact Us</Link>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
        <div className="flex xs:flex-col md:flex-row justify-evenly">
        {config.achievements.numbers.map((achievement) => (
        <div key={achievement.title} className="flex px-[60px] py-9 flex-col font-bold pop-up">
                <div className="relative items-center text-8xl w-full h-[72px] overflow-hidden border-b border-[#232323] text-center gradient">
                    <h1 className="">{achievement.total}</h1>
                </div>
                <div className="text-xl text-center">
                    <div>{achievement.title}</div>
                </div>
           
        </div>       
        ))}
        </div>
        </>
    )
}

export default CompanyOverview;