// "use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectItem from "./ProjectItem";

import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NextButtonSlider from "./NextButtonSlider";
import PreviosButtonSlider from "./PreviosButtonSlider";
function ProjectsContainer() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/src/data/projectsData.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
      });
  }, []);

  return (
    <Swiper
      modules={[Autoplay]}
      // navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="relative"
      style={{ padding: "0 80px" }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {projects.length > 2 && <PreviosButtonSlider />}
      {projects.map((project, index) => (
        <SwiperSlide>
          <ProjectItem key={index} project={project} />
        </SwiperSlide>
      ))}
      {projects.length > 2 && <NextButtonSlider />}
    </Swiper>
  );
}

export default ProjectsContainer;
