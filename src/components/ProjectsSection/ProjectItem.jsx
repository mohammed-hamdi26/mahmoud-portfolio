import { SwiperSlide } from "swiper/react";
import Image from "../ui/Image";
import Link from "../ui/Link";
import { CgWebsite } from "react-icons/cg";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

function ProjectItem({ project }) {
  const { src, title, description } = project;
  const [showMore, setShowMore] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const descRef = useRef(null);

  useEffect(() => {
    if (descRef.current) {
      setIsTruncated(
        descRef.current.scrollHeight > descRef.current.clientHeight
      );
    }
  }, [description]);

  return (
    <div>
      <Image
        src={src}
        className="w-full h-60 mb-8 rounded-lg overflow-hidden "
      />
      <h3 className="text-2xl font-bold text-text mb-2.5 capitalize ">
        {title}
      </h3>
      <p
        ref={descRef}
        className={`text-description text-xl leading-8 mb-4 transition-all duration-300 ${
          showMore ? "line-clamp-none" : "line-clamp-3"
        }`}
        style={{
          display: "-webkit-box",
          WebkitLineClamp: showMore ? "unset" : 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {description}
      </p>
      {isTruncated && (
        <button
          className="text-text underline mb-4 cursor-pointer"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      )}
      <div className="flex gap-2.5">
        {project.website_link && (
          <Link href={project.website_link}>website Link {<CgWebsite />}</Link>
        )}
        {project.app_store_link && (
          <Link href={project.app_store_link}>
            App Store Link {<FaAppStore />}
          </Link>
        )}
        {project.play_store_link && (
          <Link href={project.play_store_link}>
            Play Store Link {<FaGooglePlay />}
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProjectItem;
