function Image({ src, className }) {
  return (
    <div className={`relative ${className}`}>
      <img className="absolute w-full h-full object-cover" src={src} />
    </div>
  );
}

export default Image;
