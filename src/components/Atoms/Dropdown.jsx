import { useState, useRef, useEffect } from "react";
import Button from "./Button";

export default function Dropdown({
  label = "Dropdown",
  iconLeft = null,
  l_gap = 'gap-5',
  iconRight = null,
  options = [],
  onSelect = () => {},
  className = "",
  buttonClass = "",
  push_below = "z-10 absolute top-full left-0",
  closeOnMouseLeave = false,
  textClass = "font-medium text-[14px] leading-[20px] text-[#031B15]"
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLeave = () => {
    if (closeOnMouseLeave) setOpen(false);
  };

  // Close on outside the click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`w-full flex flex-col items-center relative ${className}`}
      onMouseLeave={handleLeave}
      ref={dropdownRef}
      onClick={() => setOpen(!open)}
    >
      <Button
        disableScale
        className={`w-full px-3 py-2 flex items-center justify-between hover:cursor-pointer ${buttonClass}`}
      >
        <div className={`flex items-center ${l_gap}`}>
          {iconLeft && <img src={iconLeft} alt="left icon" />}
          <p className={textClass}>
            {label}
          </p>
        </div>
        {iconRight && <img src={iconRight} alt="right icon" />}
      </Button>

      {open && (
        <div className={`w-full mt-2 bg-white rounded shadow ${push_below}`}>
          {options.map((option, idx) => (
            <div
              key={idx}
              onClick={() => {
                onSelect(option);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-[#DFEAE8] hover:text-[#027056] cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
