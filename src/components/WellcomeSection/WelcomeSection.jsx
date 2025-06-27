import Image from "../ui/Image";
import PersonInfo from "./PersonInfo";

function WelcomeSection() {
  return (
    <div
      id="home"
      className="sm:h-[600px] md:h-[700px] lg:h-dvh flex flex-col-reverse lg:flex-row items-center gap-10 lg:justify-between z-20 py-20"
    >
      <PersonInfo />
      <Image
        className="size-72 md:size-96 lg:size-120 xl:size-140 object-cover rounded-full overflow-hidden"
        src={"/images/mahmoud.jpg"}
        alt="mahmoud"
      />
    </div>
  );
}

export default WelcomeSection;
