export default function Button({
  children,
  type = "button",
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
      } ${textColor} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}