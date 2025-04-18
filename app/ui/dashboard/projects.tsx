import Image from "next/image";
import { PROJECT_CONTENT } from "@/app/data/data";
import { FaGithub } from "react-icons/fa";
import { SiGoogledrive } from "react-icons/si";

const Projects = () => {
    return (
        <section id="Projects" className="container mx-auto px-5 py-20">
            <p className="text-s font-semibold mb-3">Recent Projects</p>
            <h2 className="text-3xl font-bold text-left mb-10 underline decoration-teal-700">My Projects</h2>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                {PROJECT_CONTENT.map((exp, index) => (
                    <div 
                        key={index} 
                        className="bg-white px-5 py-8 shadow-xl rounded-xl hover:shadow-xl hover:rounded-xl hover:border hover:border-teal-500 transition flex flex-col md:flex-row items-center md:items-start gap-4"
                    >
                        {/* Gambar */}
                        <Image 
                            src={exp.img} 
                            alt={exp.title} 
                            width={300} 
                            height={200} 
                            className="w-full md:w-[250px] h-auto object-cover rounded-md"
                        />
                        
                        {/* Konten */}
                        <div className="md:ml-8 flex flex-col flex-1 pr-2">
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <p className="text-sm text-gray-600 mt-2 text-justify">{exp.desc}</p>

                            {/* Teknologi sebagai tag */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {exp.technology.map((tech, idx) => (
                                    <span key={idx} className="bg-teal-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Link GitHub & Google Drive */}
                            <div className="mt-auto flex items-center space-x-4 pt-4">
                                {exp.github && (
                                    <a href={exp.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition">
                                        <FaGithub size={24} />
                                    </a>
                                )}
                                {exp.drive && (
                                    <a href={exp.drive} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-yellow-500 transition">
                                        <SiGoogledrive size={24} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
