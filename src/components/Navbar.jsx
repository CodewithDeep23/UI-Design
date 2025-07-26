import Button from "./Atoms/Button";
import ToggleSwitch from "./Atoms/Toggle";
import { ChartLine, Calendar, Vector5, Vector4, blinkit, Zepto, Instamart } from "../assets";
import Dropdown from "./Atoms/Dropdown";

export default function Navbar() {
  const handleSelect = (value) => {
    console.log("Selected:", value);
  };
  return (
    <div className="flex flex-col w-full h-auto items-start justify-center">
      {/* Nav 1 */}
      <div className="flex flex-row w-full h-auto items-center justify-center px-[24px] py-[12px] bg-[#ffffff] ring-[1px] ring-inset ring-[#EBEBEB] rounded-t-md">
        <div className="w-full h-auto flex flex-row items-center justify-start">
          <p className="text-[14px] leading-[18px] tracking-[-0.03em] text-[#031B15] text-left flex items-center font-medium">
            Quick Commerce
          </p>
        </div>
        <div className="flex flex-row items-center justify-end w-full h-auto gap-2">
          <Button
            textColor="text-black"
            className="cursor-pointer flex flex-row w-auto h-[40px] gap-3 justify-center items-center px-3 py-1.5 rounded-[10px] ring-[1px] ring-inset ring-[#EBEBEB]"
            bgColor="bg-[#FFFFFF]"
          >
            <img src={ChartLine} alt="" />
            <ToggleSwitch />
          </Button>
          <Button
            disableScale
            textColor="text-black"
            className="cursor-pointer flex flex-row w-full h-[40px] justify-center items-center py-1.5 rounded-[10px] ring-[1px] ring-inset ring-[#EBEBEB]"
            bgColor="bg-[#FFFFFF]"
            // bgColor="bg-blue-400"
          >
            <Dropdown
              label="Aug 01, 024 - Aug 03, 2024"
              iconLeft={Calendar}
              iconRight={Vector5}
              options={["Date1", "Date2", "Date3"]}
              onSelect={handleSelect}
              className="w-auto px-0"
              l_gap="gap-3"
            />
          </Button>
        </div>
      </div>
      {/* Nav 2 */}
      <div className="flex flex-row w-full h-auto items-center justify-center px-[20px] py-[9px] bg-[#ffffff] ring-[1px] ring-inset ring-[#EBEBEB]">
        <div className="flex flex-row items-center justify-start w-full h-auto gap-2">
          <div className="flex flex-row items-center justify-start w-auto h-auto gap-2 p-1 rounded-[10px] ring-[0.5px] ring-inset ring-[#EBEBEB] bg-[#FFFFFF]">
            <Button
              textColor="text-black"
              className="cursor-pointer flex flex-row w-auto h-[40px] gap-3 justify-center items-center px-3 py-1.5 rounded-[10px] ring-[1px] ring-inset ring-[#EBEBEB]"
              // bgColor="bg-[#FFFFFF]"
              bgColor="bg-[#DFEAE8]"
              disableScale
            >
              <img src={blinkit} alt="" className="size-6" />
              <p className="text-[14px] leading-[18px] tracking-[-0.03em] text-[#027056] text-left flex items-center font-medium">
                Blinkit
              </p>
            </Button>
            <Button
              textColor="text-black"
              className="cursor-pointer flex flex-row w-auto h-[40px] gap-3 justify-center items-center px-3 py-1.5 rounded-[10px] ring-[1px] ring-inset ring-[#EBEBEB] opacity-30"
              // bgColor="bg-[#FFFFFF]"
              bgColor="bg-[#FFFFFF]"
              disableScale
            >
              <img src={Zepto} alt="" className="size-6" />
              <p className="text-[14px] leading-[18px] tracking-[-0.03em] text-[#027056] text-left flex items-center font-medium">
                Zepto
              </p>
            </Button>
            <Button
              textColor="text-black"
              className="cursor-pointer flex flex-row w-auto h-[40px] gap-3 justify-center items-center px-3 py-1.5 rounded-[10px] ring-[1px] ring-inset ring-[#EBEBEB] opacity-30"
              // bgColor="bg-[#FFFFFF]"
              bgColor="bg-[#FFFFFF]"
              disableScale
            >
              <img src={Instamart} alt="" className="size-6" />
              <p className="text-[14px] leading-[18px] tracking-[-0.03em] text-[#027056] text-left flex items-center font-medium">
                Instamart
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}