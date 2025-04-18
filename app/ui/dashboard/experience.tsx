import { EXPERIENCES_CONTENT } from "@/app/data/data";

const Experiences = () => {
    return (
        <section id="Experiences" className="container mx-auto px-5 py-20">
            <p className="text-s font-semibold mb-3">Related Experience</p>
            <h2 className="text-3xl font-bold text-left mb-10 underline decoration-teal-700">My Experiences</h2>
            
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {EXPERIENCES_CONTENT.map((exp, index) => (
            <div key={index} className="relative border-2 border-teal-500 p-6 mb-3 rounded-xl shadow-md max-w-3xl mx-auto">
                    <div className="relative">
                        {/* Isi pengalaman */}
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-gray-600 text-sm">{exp.date} | {exp.location}</p>
                        <p className="text-gray-700 font-medium mt-1 mb-3">{exp.role}</p>
                        <ul className="text-gray-600 mt-2 mb-6 list-disc list-outside pl-5 text-justify space-y-1">
                            {exp.desc.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>

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
            </div>
        </section>
    );
};

export default Experiences;
