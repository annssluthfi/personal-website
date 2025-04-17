import Image from "next/image";
import { HOME_CONTENT } from "@/app/data/data";

const Home = () => {
    return (
        <section id="Home" className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-16 max-w-3xl px-5 py-20">
            {/* Gambar */}
            <Image 
                src={HOME_CONTENT.img} 
                alt={HOME_CONTENT.title} 
                width={220} 
                height={270} 
                className="w-40 h-40 md:w-56 md:h-64 rounded-full object-cover shadow-lg"
            />
            
            {/* Teks */}
            <div className="max-w-md text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold mb-3 underline decoration-teal-700">{HOME_CONTENT.title}</h1>
                <p className="text-base md:text-lg text-justify font-normal leading-relaxed">
                    {HOME_CONTENT.caption}
                </p>
            </div>
        </section>
    );
};

export default Home;