import { motion } from "motion/react";
import { useEffect, useRef } from "react";
function Section({ title, description, children }) {
  const ref = useRef(null);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const element = ref.current;
  //     const fromTop = element.getBoundingClientRect().top + window.scrollY;

  //     const elementBottom =
  //       element.getBoundingClientRect().bottom + window.scrollY;
  //     const bodyHeight = document.body.scrollHeight;

  //     const fromBottom = elementBottom;

  //     // if (title === "projects") {
  //     //   console.log("Distance from top of body:", Number(fromTop));
  //     //   console.log("Distance from bottom of body:", Number(fromBottom));
  //     // }
  //     // console.log(window.scrollY);

  //     if (ref.current) {
  //       if (window.scrollY >= fromTop - 100 && window.scrollY <= fromBottom) {
  //         console.log(`Scrolled to section: ${title}`);
  //         window.location.hash = `#${title.toLowerCase()}`;
  //         // console.log(`Scrolled to section: ${title}`);
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      id={title.toLowerCase()}
      ref={ref}
      className="relative z-10"
    >
      <h2 className="text-text text-5xl md:text-8xl font-extrabold mb-10">
        {title}.
      </h2>
      {description && (
        <p className="text-description text-lg md:text-2xl mb-32">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}

export default Section;
