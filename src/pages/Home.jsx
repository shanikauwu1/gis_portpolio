import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import StoryMaps from "../components/StoryMaps";
import SolarPotentialProject from "../components/SolarPotentialProject";

function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <SolarPotentialProject />
      <StoryMaps />
    </main>
  );
}

export default Home;
