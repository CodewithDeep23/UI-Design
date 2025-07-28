import { ArrowUp, ChartLine, help, Vector5, Vector5W } from "../assets";
import { Arrow, Button, Checkbox, Dropdown, Frame, SkuSelector } from "./index";
import Card from "./Atoms/Card";
import OfftakeCard from "./Atoms/OfftakeCard";

const skuList = [
  { id: 1, label: "Protein Bar 100g", height: "h-[48px]" },
  { id: 2, label: "Choco Bar 100g", height: "h-[93px]" },
  { id: 3, label: "SKU 3", height: "h-[48px]" },
  { id: 4, label: "SKU 4", height: "h-[48px]" },
];

const cityList = [
  { id: 1, label: "Delhi", height: "h-[48px]" },
  { id: 2, label: "Bengaluru", height: "h-[93px]" },
  { id: 3, label: "SKU 3", height: "h-[48px]" },
  { id: 4, label: "SKU 4", height: "h-[48px]" },
]

export default function Content() {
  const handleSelect = (value) => {
    console.log("Selected:", value);
  };
  return (
    <div className="p-5 flex flex-col w-full h-auto items-start justify-center overflow-x-auto gap-10">
      {/* First Content */}
      <div className="flex flex-row w-full h-[292px] items-start justify-center">
        <div className="w-full h-full flex flex-row items-center justify-between gap-1">
          {/* BOX 1 */}
          <Card title="Sales (MRP)" vector={help} />

          {/* BOX 2 */}
          <Card title="Total Quantity Sold" vector={help} />

          {/* Box 3 */}
          <OfftakeCard vector={help} />
        </div>
      </div>
      {/* Second Content */}
      <div className="flex flex-col w-full h-auto items-start justify-center gap-4">
        <div className="w-full py-1 h-auto flex flex-row justify-between gap-1">
          <div className="flex w-auto flex-col">
            <p className="text-[20px] leading-[24px] tracking-[-0.03em] text-[#031B15] text-left flex items-center font-bold">
              SKU level data
            </p>
            <p className="text-[14px] leading-[18px] text-[#4F4D55] text-left flex items-center font-normal">
              Analytics for all your SKUs
            </p>
          </div>
          <div className="flex w-auto items-center">
            <Dropdown
              label="Filter(1)"
              iconRight={Vector5W}
              options={["Filter1", "Filter2", "Filter3"]}
              onSelect={handleSelect}
              l_gap="gap-3"
              className="cursor-pointer flex flex-row w-auto h-[40px] gap-3 justify-center bg-[#027056] items-center px-1 py-1.5 rounded-[10px] ring-[1px] ring-inset ring-[#EBEBEB] shadow-md"
              buttonClass="gap-3"
              textClass="font-medium text-[14px] leading-[20px] text-[#FFFFFF]"
            />
          </div>
        </div>
        <Frame skuList={skuList}/>
      </div>
      {/* Third Content */}
      <div className="flex flex-col w-full h-auto items-start justify-center gap-4">
        <div className="w-full py-1 h-auto flex flex-row justify-between gap-1">
          <div className="flex w-auto flex-col">
            <p className="text-[20px] leading-[24px] tracking-[-0.03em] text-[#031B15] text-left flex items-center font-bold">
              City level data
            </p>
            <p className="text-[14px] leading-[18px] text-[#4F4D55] text-left flex items-center font-normal">
              Analytics for all your cities
            </p>
          </div>
          <div className="flex w-auto items-center">
            <Dropdown
              label="Filter(1)"
              iconRight={Vector5W}
              options={["Filter1", "Filter2", "Filter3"]}
              onSelect={handleSelect}
              l_gap="gap-3"
              className="cursor-pointer flex flex-row w-auto h-[40px] gap-3 justify-center bg-[#027056] items-center px-1 py-1.5 rounded-[10px] ring-[1px] ring-inset ring-[#EBEBEB] shadow-md"
              buttonClass="gap-3"
              textClass="font-medium text-[14px] leading-[20px] text-[#FFFFFF]"
            />
          </div>
        </div>
        <Frame skuList={cityList}/>
      </div>
    </div>
  );
}