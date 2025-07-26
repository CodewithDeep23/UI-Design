import { useState } from "react";

export default function Dropdown({
  label = "Dropdown",
  iconLeft = null,
  l_gap = 'gap-5',
  iconRight = null,
  options = [],
  onSelect = () => {},
  className = "",
  buttonClass = "",
  push_below = "z-10 absolute top-full left-0"
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`w-full flex flex-col items-center relative ${className}`}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full px-3 py-2 flex items-center justify-between hover:cursor-pointer ${buttonClass}`}
      >
        <div className={`flex items-center ${l_gap}`}>
          {iconLeft && <img src={iconLeft} alt="left icon" />}
          <p className="font-medium text-[14px] leading-[20px] text-[#031B15]">
            {label}
          </p>
        </div>
        {iconRight && <img src={iconRight} alt="right icon" />}
      </button>

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
