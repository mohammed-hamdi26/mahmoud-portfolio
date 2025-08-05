import { useState } from "react";
import Header from "./components/Header/Header";
import NavBarInMobile from "./components/Header/NavBarInMobile";
import ProjectsContainer from "./components/ProjectsSection/ProjectsContainer";
import AnimatedBackground from "./components/ui/AnimatedBackground";
import MenuBar from "./components/ui/MenuBar";
import Section from "./components/ui/Section";
import VideosContainer from "./components/Videos/VideosContainer";
import WelcomeSection from "./components/WellcomeSection/WelcomeSection";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="bg-background pb-24 px-6 md:px-24 font-display space-y-4"
      style={{ position: "relative", zIndex: 1 }}
    >
      <AnimatedBackground />
      <Header />
      <MenuBar setIsMenuOpen={setIsMenuOpen} />
      <NavBarInMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <WelcomeSection />
      <Section
        title={"about"}
        description={`We are a passionate team of developers and designers dedicated to building innovative software solutions. Our mission is to transform your ideas into powerful, scalable, and user-friendly products that drive business growth.
With a focus on UI/UX design, mobile app development, and reliable hosting services, we provide end-to-end solutions tailored to meet your unique needs. We believe in collaboration, transparency, and delivering excellence in every project we undertake. `}
      />
      <Section title={"projects"}>
        <ProjectsContainer />
      </Section>
      <Section title={"Videos"}>
        <VideosContainer />
      </Section>
    </div>
  );
}

export default App;
