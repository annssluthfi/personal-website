import { EXPERIENCES_CONTENT } from "@/app/data/data";

const Experiences = () => {
    return (
        <section id="Experiences" className="container mx-auto px-5 py-20">
            <h2 className="text-3xl font-bold text-center mb-10">My Experiences</h2>
            
            {EXPERIENCES_CONTENT.map((exp, index) => (
            <div key={index} className="relative border-2 border-teal-500 p-6 mb-3 rounded-xl shadow-md max-w-3xl mx-auto">
                    <div className="mb-8 relative">
                        {/* Isi pengalaman */}
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-gray-600 text-sm">{exp.date} | {exp.location}</p>
                        <p className="text-gray-700 font-medium mt-1">{exp.role}</p>
                        <p className="text-gray-600 mt-2">{exp.desc}</p>

                        {/* Skill tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                            {exp.skill.map((tech, idx) => (
                                <span key={idx} className="bg-teal-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
            </div>
            ))}
        </section>
    );
};

export default Experiences;
