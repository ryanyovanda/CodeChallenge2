import { COMPANY_HISTORY } from "@/constant/companyhistory";

const CompanyHistory = () => {
    return (
        <>
            <div className="md:mx-[60px] mx-4 py-6">
                <div className="text-5xl font-bold text-center"><h1>Our Story</h1></div>
                {COMPANY_HISTORY.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row bg-slate-50 rounded-xl transition pop-up transform my-4 p-4 md:my-9"
                    >
                        <div className="flex justify-center text-6xl md:text-9xl m-2 font-bold">
                            <h1>{service.year}</h1>
                        </div>
                        <div className="flex w-full m-2 font-normal items-center text-xl md:text-3xl">
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CompanyHistory;
