import About from "@/components/about";
import Contact from "@/components/contact";
import Cursor from "@/components/cursor";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />

        <Cursor />
      </main>
      <Footer />
      <ThemeToggle />
    </>
  );
}
