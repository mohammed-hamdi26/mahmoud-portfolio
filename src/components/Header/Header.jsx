import NavBar from "./NavBar";
import SocialMedias from "./SocialMedias";

function Header() {
  return (
    <header className="hidden sm:flex justify-between items-center py-6 text-white sticky top-2.5 w-full z-20 bg-[#37698C] px-10 shadow-md rounded-lg">
      <p className="text-2xl font-semibold capitalize text-white">mahmoud</p>
      <NavBar />
      <SocialMedias />
    </header>
  );
}

export default Header;
