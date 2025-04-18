import { SKILLS_CONTENT } from "@/app/data/data";
import Image from "next/image";

const Experiences = () => {
    return (
        <section id="Skills" className="container mx-auto px-5 py-20">
            <p className="text-s font-semibold mb-3">My Skills</p>
            <h2 className="text-3xl font-bold text-left mb-10 underline decoration-teal-700">My Expertise</h2>

            <div className="flex flex-wrap justify-center gap-4">
                {SKILLS_CONTENT.map((skill, index) => (
                    <div key={index} className="flex flex-col p-4 w-[300px] rounded-xl shadow-md bg-teal-50 hover:border-b-2 hover:border-teal-500">
                    <div className="mb-4">
                        <Image 
                        src={skill.icon} 
                        alt={skill.title} 
                        width={50} 
                        className="bg-white p-3 mb-4"
                        />
                        <h4 className="font-semibold text-base mb-2">{skill.title}</h4>
                        <p className="md:text-sm opacity-80 text-justify">{skill.desc}</p>
                    </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;
