import { TESTIMONIES } from "@/constant/testimonies";
import Image from "next/image";


const Testimony = () => {
    return (
        <>
            <div className="pb-16">
                <div className="flex justify-center xs:text-5xl md:text-7xl font-bold my-9 xs:px-6 md:px-0"><h1>What they say about us?</h1></div>
                <div className="flex xs:flex-col md:flex-row justify-evenly px-6 gap-6">
                    {TESTIMONIES.map((service, index) => (
                        <div key={index} className="flex flex-col bg-[#e1e1e1] justify-center items-center p-10 rounded-3xl transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-opacity-90 hover:ring-4 hover:ring-gray-200 hover:ring-opacity-50"
                        >
                            <div >
                                {service.image && (
                                    <Image 
                                        className="rounded-xl"
                                        src={service.image}
                                        alt={service.alt}
                                        width={150}
                                        height={150}
                                    />
                                )}
                            </div>
                            <div className="font-bold text-3xl">
                                <h1>{service.name}</h1>
                            </div>
                            <div className="text-[#777777] mb-6">
                                <h2>{service.company}</h2>
                            </div>
                            <div>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Testimony;
