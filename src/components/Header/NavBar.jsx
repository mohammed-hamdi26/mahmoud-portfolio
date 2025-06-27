import { useState } from "react";
import NavBarItem from "./NavBarItem";

function NavBar() {
  const [url, setUrl] = useState(window.location.hash || "#home");

  return (
    <nav className="flex gap-10 capitalize text-lg">
      <NavBarItem title="home" url={url} onClick={() => setUrl("#home")} />
      <NavBarItem title="about" url={url} onClick={() => setUrl("#about")} />
      <NavBarItem
        title="projects"
        url={url}
        onClick={() => setUrl("#projects")}
      />
      <NavBarItem title="videos" url={url} onClick={() => setUrl("#videos")} />
      {/* <a href="#about" className={`${isActive("#about")}`}>
        about
      </a>
      <a href="#projects" className={`${isActive("#projects")}`}>
        projects
      </a>
      <a href="#videos" className={`${isActive("#videos")}`}>
        videos
      </a> */}
    </nav>
  );
}

export default NavBar;
