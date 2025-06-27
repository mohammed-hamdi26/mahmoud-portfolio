function Link({ href, children }) {
  return (
    <a
      className="flex items-center w-fit gap-2 relative border-text border-2 py-4 px-4  rounded-md text-text font-bold transition-colors duration-300 hover:text-background hover:bg-text  "
      href={href}
      target="_blank"
    >
      {/* <span className="absolute top-1.5 left-1.5 w-full   h-full -z-10 rounded-md  bg-light-yellow transition-all duration-300 ease-out"></span> */}
      {children}
    </a>
  );
}

export default Link;
