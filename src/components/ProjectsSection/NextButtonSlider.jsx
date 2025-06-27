import { useSwiper } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";

function NextButtonSlider() {
  const swiper = useSwiper();

  return (
    <button
      className=" absolute size-12 bg-white  text-text  bottom-0 md:top-1/2 -right-5 -translate-x-1/2  text-7xl   z-10 rounded-full flex justify-between items-center cursor-pointer "
      onClick={() => swiper.slideNext()}
    >
      <IoIosArrowForward className="text-2xl mx-auto" />
    </button>
  );
}

export default NextButtonSlider;
