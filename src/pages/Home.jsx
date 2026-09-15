import Hero from "../components/Hero";
import HomeProjects from "../components/HomeProjects";
import Skills from "../components/Skills";
import StoryMaps from "../components/StoryMaps";
import SolarPotentialProject from "../components/SolarPotentialProject";

function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <HomeProjects />
      <SolarPotentialProject />
      <StoryMaps />
    </main>
  );
}

export default Home;
