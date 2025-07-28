import React, { useState } from "react";
import Checkboxes from "./Checkbox";
import { ChartLine } from "../../assets";

export default function SkuSelector({ skuList = [] }) {
  // const [selected, setSelected] = useState({});
  const [selected, setSelected] = useState(() => {
    const saved = localStorage.getItem("skuSelections");
    return saved ? JSON.parse(saved) : {};
  })

  // const toggleSelection = (id) => {
  //   setSelected((prev) => ({
  //     ...prev,
  //     [id]: !prev[id],
  //   }));
  // };
  const toggleSelection = (id) => {
    setSelected((prev) => {
      const newSelected = { ...prev };
      const currentlySelected = Object.entries(newSelected)
        .filter(([_, value]) => value)
        .map(([key]) => key);
  
      if (newSelected[id]) {
        if (currentlySelected.length <= 2) return prev;
        newSelected[id] = false;
      } else {
        newSelected[id] = true;
      }
  
      // Save to localStorage
      localStorage.setItem("skuSelections", JSON.stringify(newSelected));
  
      return newSelected;
    });
  };
  

  const getBgColor = (id) => (selected[id] ? "bg-[#F8F8F8]" : "bg-[#FCFCFC]");

  return (
    <div className="max-w-[10.875rem] bg-red-100 w-[174px] h-[382px] max-h-[23.875rem] flex flex-col items-start">
      <div className="bg-[#FFFFFF] h-[97px] w-full px-3 rounded-tl-[10px] border border-[#F1F1F1]">
        <div className="w-full h-full flex items-center">
          <p className="flex items-center gap-2 text-[#013025] font-semibold leading-[16px] text-[15px] tracking-[-0.02px]">
            <img src={ChartLine} alt="" className="h-5 w-5 object-contain" />
            SKU Name
          </p>
        </div>
      </div>

      {skuList.map((sku) => (
        <div
          key={sku.id}
          className={`w-full px-3 ${getBgColor(
            sku.id
          )} border border-[#F1F1F1] ${sku.height ?? "h-[48px]"}`}
        >
          <div
            className={`w-auto flex items-center h-full`}
          >
            <p className="flex items-center gap-2 text-[#0A090B] font-semibold leading-[16px] text-[15px] tracking-[-0.02px] underline">
              <Checkboxes
                checked={!!selected[sku.id]}
                onChange={() => toggleSelection(sku.id)}
              />
              {sku.label}
            </p>
          </div>
        </div>
      ))}

      <div className="h-[48px] max-h-[3rem] w-full flex flex-row bg-[#FCFCFC] border border-[#F1F1F1] rounded-bl-[10px]">
        <p className=" gap-2 w-[116px] max-w-[7.25rem] h-full flex items-center justify-center text-[#0A090B] font-bold leading-[16px] tracking-[-0.02px] text-[15px]">
          Total
        </p>
      </div>
    </div>
  );
}
