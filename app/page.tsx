// import Image from "next/image";
import Home from "@/app/ui/dashboard/home"
import Experience from "./ui/dashboard/experience";
import Projects from "./ui/dashboard/projects";
import Skills from "./ui/dashboard/skills";

export default function HomePage() {
  return (
    <>
      <Home/>
      <Skills/>
      <Experience/>
      <Projects/>
    </>
  );
}
