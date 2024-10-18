import Image from "next/image";
const Culture = () => {
    return(
        <>
        <div className="flex xs:flex-col md:flex-row justify-between px-[60px] my-6 gap-4">
    <div>
        <div className="overflow-hidden">
            <Image
                src="/who-we-are.jpeg"
                alt="who we are"
                width={4000}
                height={500}
                className="transform transition-all duration-500 filter grayscale hover:grayscale-0"
            />
        </div>
            </div>
            <div className="flex gap-6 flex-col">
                <div className="flex justify-end text-5xl font-bold "><h1>Our Culture</h1></div>
                <div className="flex text-end text-md"><span>At Vanda Studio, we pride ourselves on fostering a dynamic and collaborative culture that inspires creativity and innovation. As a premier agency specializing in graphic design, marketing, and motion graphics, we believe that our success stems from our diverse team of passionate professionals who are dedicated to pushing boundaries and delivering exceptional results. Our work environment encourages open communication and idea sharing, empowering each team member to contribute their unique perspectives. We value adaptability and continuous learning, ensuring that we stay ahead of industry trends and provide our clients with cutting-edge solutions. At Vanda Studio, we are more than just colleagues; we are a close-knit community driven by a shared passion for creativity and a commitment to excellence.</span></div>
            </div>
        </div>
        </>
    )
}

export default Culture;