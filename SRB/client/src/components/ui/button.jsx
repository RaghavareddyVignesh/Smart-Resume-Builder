export function Button({ children, onClick, size = "lg", className = "" }) {
  const sizeClasses = {
    sm: "px-5 py-2 text-base",
    md: "px-6 py-2.5 text-lg",
    lg: "px-7 py-3 text-xl",
  };

  return (
    <button
      onClick={onClick}
      className={`backdrop-blur-md bg-white/20 text-white rounded-full shadow-md ${sizeClasses[size]} ${className} 
        transition duration-300 ease-in-out 
        hover:shadow-[0_0_25px_#0F766E] 
        hover:bg-white/30 
        active:scale-95`}
    >
      {children}
    </button>
  );
}
