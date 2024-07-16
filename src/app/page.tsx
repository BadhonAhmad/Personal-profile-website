import About from "./sections/About";
import Facts from "./sections/Facts";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Resume from "./sections/Resume";
// import profileImg from "./public/profile-img.jpg";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Facts/>
        <Skills/>
        <Resume/>
      </main>
    </>
  );
}