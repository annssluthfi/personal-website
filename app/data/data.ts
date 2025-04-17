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
        to: "About",
        page: "About",
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
        img: Paratrans,
        title: "ParaTrans - Paraphrase Generation",
        desc: "This is a paraphrase generation website built using the Transformer method and the Flask framework in Python. In this project, I analyze the workings of the Transformer architecture and implement it to generate Indonesian paraphrases, integrating it with the Flask framework.",
        technology: ["Pyhton", "Tensorflow", "Flask"],
    },
    {
        img: Dreamer,
        title: "Dreamer",
        desc: "This website was my team project on one month internship at PT. Telkom Indonesia. We created a website that useful to make content planner for Digital Marketing division.",
        technology: ["Laravel 8", "HTML", "CSS"],
    },
]

export const EXPERIENCES_CONTENT = [
    {
        title: "Freelance Web Developer",
        date: "Jan 2025 - Present",
        location: "Afterskulz",
        role: "Back-End Web Developer",
        desc: ["Enhanced information management system using Laravel and Filament.",
            "Work In Team",
        ],
        skill: ["Laravel", "Filament"]
    },
    {
        title: "Freelance Web Developer",
        date: "Jan 2025 - Present",
        location: "Afterskulz",
        role: "Fullstack Web Developer",
        desc: ["Enhanced information management system using Laravel and Filament.",
            "Work In Team",
        ],
        skill: ["Laravel", "Filament"]
    },
    {
        title: "Freelance Web Developer",
        date: "Jan 2025 - Present",
        location: "Afterskulz",
        role: "Fullstack Web Developer",
        desc: ["Enhanced information management system using Laravel and Filament.",
            "Work In Team",
        ],
        skill: ["Laravel", "Filament"]
    },
    {
        title: "Freelance Web Developer",
        date: "Jan 2025 - Present",
        location: "Afterskulz",
        role: "Fullstack Web Developer",
        desc: ["Enhanced information management system using Laravel and Filament.",
            "Work In Team",
        ],
        skill: ["Laravel", "Filament"]
    },
]



