import { PRICELIST } from "@/constant/pricelist";
import Image from "next/image";
import Link from "next/link";

const Pricelist = () => {
  return (
    <>
      <div className="flex xs:flex-col md:flex-row gap-8 px-4 py-8">
        {PRICELIST.map((service, index) => (
          <div
            key={index}
            className="flex flex-col  bg-white border border-gray-300 rounded-lg p-4 shadow-md"
          >
            <div className="mb-4">
              <Image
                src={service.image}
                alt={service.alt}
                width={1024}  
                height={700} 
                className="rounded-lg"
              />
            </div>
            <div>
            <div className="">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                {service.servicename}
              </h1>
              <p className="text-gray-600 mb-2">{service.description}</p>

            </div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div>
                <p className="text-lg text-gray-900 font-semibold">{service.price}</p>
                </div>
                <div className="border py-2 px-6 rounded-full text-white bg-[#232323] hover:bg-transparent hover:text-[#232323]">
                <Link href={service.link} target="_blank">
                    BUY NOW
                </Link>
                </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pricelist;
