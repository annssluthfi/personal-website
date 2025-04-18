interface NavItem {
    to: string
    page: string
}

export const NAV_ITEMS: Array<NavItem> = [
    {
        to: "Home",
        page: "Home",
    },
    {
        to: "Skills",
        page: "Skills",
    },
    {
        to: "Experiences",
        page: "Experiences",
    },
    {
        to: "Projects",
        page: "Projects",
    },
];


import profileImage from "@/public/personal-photo-brown.jpeg";

export const HOME_CONTENT = {
    img: profileImage,
    title: "Hello, My Name is Annisa!",
    caption: "I am a fresh graduate from Sriwijaya University with a GPA of 3.89 (cumlaude). I have a passion for Fullstack Web Development and Web Design. I have experience in developing web-based applications using technologies such as HTML, CSS, JavaScript, Laravel, Flask, CodeIgniter, and databases like MySQL. I am enthusiastic about learning the latest technologies and ready to contribute to a dynamic team."
};

import Paratrans from "@/public/ParaTrans.jpg"
import Dreamer from "@/public/dreamer_home_photo.jpg"
import NoImage from "@/public/no-image.jpg"

export const PROJECT_CONTENT = [
    {
        img: Paratrans,
        title: "ParaTrans - Paraphrase Generation",
        desc: "This is a paraphrase generation website built using the Transformer method and the Flask framework in Python. In this project, I analyze the workings of the Transformer architecture and implement it to generate Indonesian paraphrases, integrating it with the Flask framework.",
        technology: ["Python", "Tensorflow", "Flask"],
        drive: "https://drive.google.com/drive/u/3/folders/1wqW-byq29HNyCOTuJlZfBSoDBk8g-6sg "
    },
    {
        img: Dreamer,
        title: "Dreamer",
        desc: "This website was my team project on one month internship at PT. Telkom Indonesia. We created a website that useful to make content planner for Digital Marketing division.",
        technology: ["Laravel 8", "HTML", "CSS"],
        github: "https://github.com/annssluthfi/ContentPlanner-Dreamer",
    },
    {
        img: NoImage,
        title: "Hospital Information System",
        desc: "This is a hospital information system that displays patient and doctor data. The project was developed in a team as a final assignment for the Hospital Information Systems course..",
        technology: ["PHP", "Bootstrap", "HTML/CSS"],
        github: "https://github.com/annssluthfi/Hospital-Information-System-Website.git",
    },
    {
        img: NoImage,
        title: "Expert System for Flu Based on Symptoms",
        desc: "This is an expert system website for detecting flu based on symptoms, using data provided by an ENT specialist. The project was developed in a team as the final assignment for the Expert Systems course.",
        technology: ["Javascript", "HTML", "CSS"],
        github: "https://github.com/annssluthfi/Expert-System-for-Flu-Detection-Based-on-Symptoms.git"
    },
]

export const EXPERIENCES_CONTENT = [
    {
        title: "Freelance Web Developer",
        date: "Jan 2025 - Present",
        location: "Afterskulz",
        role: "Back-End Web Developer",
        desc: ["Built information management system using Laravel dan Filament as part of a team ",
            "Developed various features such as attendance tracking, data charts, data configuration, etc.",
        ],
        skill: ["Laravel", "Filament"]
    },
    {
        title: "Fullstack Web Developer Academy PT. Nurul Fikri Cipta Inovasi",
        date: "Feb 2024 - June 2024",
        location: "Independent Study Program of Kampus Merdeka",
        role: "Fullstack Web Developer",
        desc: ["Learned HTML/CSS, JavaScript, MySQL, GitHub, REST API, and Laravel 10 through hands-on projects and collaborative team-based learning.",
            "Final project: Developed a Fundraising website using Laravel 10, implementing user authentication, donation transactions (midtrans) and admin dashboard for fundraising management. ",
        ],
        skill: ["Laravel", "Javacript", "HTML/CSS"]
    },
    {
        title: "Software Engineer ID/X Partners x Rakamin Academy",
        date: "Jun 2023",
        location: "Project Based Virtual Intern ",
        role: " Back-End Developer",
        desc: ["Completed an individual project-based internship, designed and implemented a RESTful API with CRUD operations to manage customer data, and conducted API testing and debugging using Postman.",
            "Final project: Create REST API with ASP.NET Core Web API, NET 6.0 with C# program language",
        ],
        skill: ["C#", "ASP.Net Core"]
    },
    {
        title: "Member of Back-End Development",
        date: "Jan 2025 - Present",
        location: "Google Developer Student Club Sriwijaya University",
        role: "Member",
        desc: ["Learned back-end development with Golang, focusing on API development and system design while collaborating on programming challenges. ",
            "Final project: Built a URL Shortener API using Golang and GORM as the ORM (Object-Relational Mapping) framework.",
        ],
        skill: ["Golang", "GORM"]
    },
]

import ml from "@/public/icons/machine-learning.svg";
import uiux from "@/public/icons/ui-ux.svg";
import web from "@/public/icons/web.svg";

export const SKILLS_CONTENT = [
    {
        icon: web,
        title: "Front-End Development",
        desc: "I craft responsive and interactive user interfaces using modern web technologies such as HTML, CSS, JavaScript, React.js, and Next.js."
    },
    {
        icon: web,
        title: "Back-End Development",
        desc: "I build and maintain robust server-side applications, ensuring seamless performance and efficiency using PHP (Laravel, CodeIgniter), Python, Golang, and Java."
    },
    {
        icon: uiux,
        title: "UI/UX Design",
        desc: "I design intuitive, user-centered interfaces that balance aesthetics and usability. From wireframes and prototypes to user research and design systems, I create meaningful digital experiences."
    },
    {
        icon: ml,
        title: "Machine Learning",
        desc: "I develop intelligent systems that learn from data and make informed predictions or decisions. My expertise includes Natural Language Processing (NLP) like Paraphrase Generator or Classification."
    }
]



