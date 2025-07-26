export default function Button({
  children,
  type = "button",
  bgColor = "bg-[#FFFFFF]",
  textColor = "text-white",
  className = "",
  disableScale = false,
  ...props
}) {
  return (
    <button
      className={`px-1 py-2 rounded-lg border border-transparent ${
        disableScale
          ? ""
          : "transition-transform duration-200 hover:scale-105 hover:border-white"
      } ${bgColor} ${textColor} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}