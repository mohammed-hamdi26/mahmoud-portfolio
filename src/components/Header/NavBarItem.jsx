function NavBarItem({ title, url, onClick }) {
  const isActive = (href) => {
    return url.includes(href) ? "text-white font-bold" : "text-gray-400";
  };
  return (
    <a
      href={`#${title}`}
      className={`${isActive(`#${title}`)}`}
      onClick={onClick}
    >
      {title}
    </a>
  );
}

export default NavBarItem;
