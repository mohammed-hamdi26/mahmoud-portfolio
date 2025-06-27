import Header from "./components/Header/Header";
import ProjectsContainer from "./components/ProjectsSection/ProjectsContainer";
import Section from "./components/ui/Section";
import VideosContainer from "./components/Videos/VideosContainer";
import WelcomeSection from "./components/WellcomeSection/WelcomeSection";
import AnimatedBackground from "./components/ui/AnimatedBackground";
import NavBarInMobile from "./components/Header/NavBarInMobile";
import MenuBar from "./components/ui/MenuBar";
import { useState } from "react";

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
        description={
          "Mahmoud is from New Cairo, Egypt, where he worked as a Flutter developer. I have\n3-years of experience in the Software Development field. ✌ He is a Problem\nsolver, geek, Hard worker, and passionate about learning and teaching the\nlatest technologies. 👨🏻‍💻 He can learn any technology in a short time and use\nit for big projects. Passionate in (Training, Public Speaking) and have some\nexperience with Leadership according to the projects and teams he has\nlead. Skilled in Mobile development, Flutter, Dart. He is seeking to create\nmobile apps that serve millions of people with awesome UI/UX to help in\ntheir life and make it more efficient and easier. ✨"
        }
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
