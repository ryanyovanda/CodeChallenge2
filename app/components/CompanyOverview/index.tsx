import Image from "next/image";
import Overview1 from "../../public/overview-1.webp"
import Overview2 from "../../public/overview-2.webp"
import {config} from "../../config";

const CompanyOverview = () =>{
    return(
        <>
        <div className="flex h-auto w-screen flex-row gap-5 px-[60px] flex-nowrap ">
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
            <div className="flex flex-col bg pt-32">
                
            <div className="ml-[-48px]">
                <p>(Unleashing Potential)</p>
                <h1 className="text-[90px] font-bold leading-none">
                Welcome to our Digital Success Stories</h1>
            </div>
                <div>Explore our professional services designed to cater to all your requirements.
                Explore our tailored professional services designed to meet all your needs. From strategy to execution, we’ve got you covered for impactful results and seamless experiences.</div>
            </div>
            
        </div>
        <div className="flex flex-row justify-between">
        {config.achievements.numbers.map((achievement) => (
        <div key={achievement.title} className="flex px-[60px] justify-between py-9">
                <div className="flex flex-col items-center">
                    <h1>{achievement.total}</h1>
                    <div>{achievement.title}</div>
           </div>
        </div>       
        ))}
        </div>
        </>
    )
}

export default CompanyOverview;