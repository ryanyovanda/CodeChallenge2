import { STUDIO_TEAM } from "@/constant/studioteam";
import Image from "next/image";

const People = () => {
    return (
        <>
            <div className="md:mx-[60px] py-6">
                <div className="text-5xl font-bold mb-4"><h1>Our Teams</h1></div>
                <div className="flex flex-wrap gap-4 justify-center"> 
                    {STUDIO_TEAM.map((service, index) => (
                        <div key={index} className="flex flex-col items-start p-4 border rounded shadow">
                            <div className="overflow-hidden rounded-xl">
                                <Image
                                    className="transition duration-500 grayscale hover:grayscale-0"
                                    src={service.image}
                                    alt={service.alt}
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <h1 className="text-lg font-semibold">{service.name}</h1> 
                            <p className="text-sm text-gray-600">{service.role}</p>
                            <p className="text-sm text-gray-500">{service.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default People;
