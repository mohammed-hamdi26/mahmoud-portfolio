import { IoMenu } from "react-icons/io5";

export default function MenuBar({ setIsMenuOpen }) {
  return (
    <div className="sm:hidden absolute left-2 top-2 cursor-pointer">
      <IoMenu
        className="text-4xl text-white "
        onClick={() => setIsMenuOpen(true)}
      />
    </div>
  );
}
