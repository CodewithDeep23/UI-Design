import { useState } from "react";

export default function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className="sr-only peer"
      />
      <div className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
        peer-checked:after:translate-x-[12px] rtl:peer-checked:after:-translate-x-[12px] 
        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 
        after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600">
      </div>
    </label>
  );
}
