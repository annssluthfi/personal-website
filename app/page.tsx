import Image from "next/image";
import Home from "@/app/ui/dashboard/home"
import Experience from "./ui/dashboard/experience";
import Projects from "./ui/dashboard/projects";

export default function HomePage() {
  return (
    <>
      <Home/>
      <Experience/>
      <Projects/>
    </>
  );
}
