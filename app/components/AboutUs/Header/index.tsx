import Image from "next/image"

const HeaderAboutUs = () => {
    return (
        <>
            <div className="relative w-full h-40 overflow-hidden">
                <Image
                    src="/bg-aboutus.webp"
                    alt="background"
                    width={3000}
                    height={500}
                    className="object-cover w-full h-full "
                />
                <div className="absolute inset-0 flex justify-start items-center z-10">
                    <h1 className="text-white text-5xl font-bold px-6">About Us</h1>
                </div>
            </div>
        </>
    )
}

export default HeaderAboutUs
