import NavBar from "./NavBar";
import SocialMedias from "./SocialMedias";

function Header() {
  return (
    <header className="hidden sm:flex justify-between items-center py-6 text-background sticky top-2.5 w-full z-20 bg-white px-10 shadow-md rounded-lg">
      <p className="text-2xl font-semibold capitalize text-background">
        mahmoud
      </p>
      <NavBar />
      <SocialMedias />
    </header>
  );
}

export default Header;
