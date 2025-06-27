import { useSwiper } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";

function PreviosButtonSlider() {
  const swiper = useSwiper();

  return (
    <button
      className=" absolute size-12 bg-white  text-text  bottom-0 md:top-1/2 left-8 -translate-x-1/2  text-7xl   z-10 rounded-full flex justify-between items-center cursor-pointer "
      onClick={() => swiper.slidePrev()}
    >
      <IoIosArrowForward className="text-2xl mx-auto rotate-180" />
    </button>
  );
}

export default PreviosButtonSlider;
