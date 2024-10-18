import { STRATEGY, IMPLEMENTATION, MARKETING } from "@/constant/ourservices";
const OurServices = () => {
  return (
    <>
      <div className="font-bold">
        <div className="flex md:px-[240px] justify-center text-7xl py-6">
          <h1>Our Services</h1>
        </div>
      </div>
      <div className="bg-[#e1e1e1]">
        <div className="flex xs:px-6 xs:justify-center md:px-[255px] xs:flex-row md:flex-col ">
          <div className="flex xs:flex-col md:flex-row gap-6 justify-between">
            
            {/* Strategy Section */}
            <div>
              <div className="py-3 font-bold text-3xl">
                <h2>Strategy</h2>
              </div>
              {STRATEGY.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center  hover:bg-white rounded-full py-2 px-2 ease-in-out duration-300 transition"
                >
                  <div>
                
                  </div>
                  <div className="text-[16px] font-semibold">
                    <h1>{service.name}</h1>
                  </div>
                </div>
              ))}
            </div>

            {/* Marketing Section */}
            <div>
              <div className="py-3 font-bold text-3xl">
                <h2>Marketing</h2>
              </div>
              {MARKETING.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center gap-2 hover:bg-white rounded-full py-2 px-2  ease-in-out duration-300 transition"
                >
                  <div>
                
                  </div>
                  <div className="text-[16px] font-semibold">
                    <h1>{service.name}</h1>
                  </div>
                </div>
              ))}
            </div>

            {/* Implementation Section */}
            <div>
              <div className="py-3 font-bold text-3xl">
                <h2>Implementation</h2>
              </div>
              {IMPLEMENTATION.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center gap-2 hover:bg-white rounded-full py-2 px-2  ease-in-out duration-300 transition"
                >
                  <div>
                
                 
                  </div>
                  <div className="text-[16px] font-semibold">
                    <h1>{service.name}</h1>
                  </div>
                </div>
              ))}
            </div>
             
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
