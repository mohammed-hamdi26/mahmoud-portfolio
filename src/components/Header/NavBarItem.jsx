function NavBarItem({ title, url, onClick }) {
  const isActive = (href) => {
    return url.includes(href) ? "text-background font-bold" : "text-text";
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
