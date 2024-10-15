import BgParalax from"../../public/bgparalax.webp"
import Image from "next/image";
import { config } from "../../config";

const ServicesHome = () =>{
    return(
        <>
        <div className="relative flex flex-col md:px-[60px] xs:px-[4px] py-28 text-white">
        <div
          className="absolute inset-0 bg-center bg-cover h-full w-full z-[-1] md:bg-fixed"
          style={{ backgroundImage: `url(${BgParalax.src})` }}
        >
        </div>
            <div className="flex xs:flex-col md:flex-row justify-between items-center xs:items-start border-b py-6 md:px-20 xs:px-6 border-[#727272] gap-6">
                <div className="flex justify-between flex-col xs:justify-start">
                <div><h1 className="text-xl text-[#727272]">(WHAT WE OFFER)</h1></div>
                <div><h2 className="xs:text-4xl md:text-7xl font-bold">Why Vanda Studio</h2></div>
                </div>
                <div>
                    <div className="border rounded-full p-4 text-sm">VIEW ALL CAPABILITIES ●</div>
                </div>
            </div>
            {config.agency.services.map((service) => (
          <div key={service.id} className="flex xs:flex-col md:flex-row justify-between px-6 border-b py-10 border-[#727272] gap-6">
            <div className="flex xs:flex-col md:flex-row gap-5 md:w-2/3 xs:w-full transition-transform duration-300 hover:translate-x-6">
              <div className="flex items-center ">
                <div className="flex justify-center border rounded-full h-6 w-10 text-[#727272] border-[#727272] items-center text-sm">
                  <h1>{service.id}</h1>
                </div>
              </div>
              <div className="flex items-center text-4xl font-bold ">
                <h2>{service.title}</h2>
              </div>
            </div>
            <div className="flex md:w-2/3 xs:w-full text-xl">
              <p>{service.description}</p>
            </div>
          </div>
        ))}
         </div>
        </>
    )
}

export default ServicesHome;