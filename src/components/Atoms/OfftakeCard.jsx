import Dot from "./Dot";
import Arrow from "./Arrow";
import { chart } from "../../assets";

export default function OfftakeCard({
    title = "Top Cities",
    vector = null,
}) {
  return (
    <div className="flex flex-col w-[90%] max-w-[350px] min-w-[280px] h-full bg-white rounded-[12px] border border-[#F1F1F1] shadow-md items-start">
      {/* part 1 */}
      <div className="w-full h-full flex flex-row items-center justify-between p-3 rounded-t-[10px] ring-[1px] ring-inset ring-[#EBEBEB]">
        <div className="flex flex-row items-center justify-between">
          <p className="text-[14px] leading-[20px] tracking-[-0.026em] text-[#515153] text-left flex items-center font-semibold">
            {title}
          </p>
        </div>
        <img src={vector} alt="" />
      </div>
      {/* part 2 */}
      <div className="w-full flex flex-col items-center p-3 ring-[1px] ring-inset ring-[#EBEBEB]">
        {/* section 1 */}
        <div className="w-full flex flex-row items-center justify-center">
          <img src={chart} alt="chart" className="w-[200px] h-[100px] object-contain"/>
        </div>
      </div>
      {/* part 3 */}
      <div className="w-full flex flex-col items-center justify-between p-3 rounded-b-[12px] ring-[1px] ring-inset ring-[#EBEBEB] gap-2">
        <div className="w-full flex gap-5">
          <div className=" flex items-center gap-1 w-full">
            <Dot color="#6C4FED"/>
            <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#7D7D7E] text-left flex items-center font-normal">
              New Delhi
            </p>
          </div>
          <div className="flex flex-row w-full justify-end gap-3 items-center">
            <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#000000] text-left flex items-center font-bold">
              ₹26.5L
            </p>
            <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#7D7D7E] text-left flex items-center font-bold">
              35%
            </p>
            <div className="flex flex-row items-center w-auto">
              <Arrow color="#027056"/>
              <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#1D874F] text-left flex items-center font-bold">
                1.2%
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex gap-5">
          <div className=" flex items-center gap-1 w-full">
            <Dot color="#F31D1D"/>
            <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#7D7D7E] text-left flex items-center font-normal">
              Mumbai
            </p>
          </div>
          <div className="flex flex-row w-full justify-end gap-3 items-center">
            <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#000000] text-left flex items-center font-bold">
              ₹36.4L
            </p>
            <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#7D7D7E] text-left flex items-center font-bold">
              23%
            </p>
            <div className="flex flex-row items-center w-auto">
              <Arrow color="#F31D1D" rotate="yes"/>
              <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#F31D1D] text-left flex items-center font-bold">
                3.3%
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-5">
          <div className=" flex items-center gap-1 w-full">
            <Dot color="#F7C245"/>
            <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#7D7D7E] text-left flex items-center font-normal">
              West Bengal
            </p>
          </div>
          <div className="flex flex-row w-full justify-end gap-3 items-center">
            <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#000000] text-left flex items-center font-bold">
              ₹12.2L
            </p>
            <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#7D7D7E] text-left flex items-center font-bold">
              21%
            </p>
            <div className="flex flex-row items-center w-auto">
              <Arrow color="#F31D1D" rotate="yes"/>
              <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#F31D1D] text-left flex items-center font-bold">
                2.3%
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-5">
          <div className=" flex items-center gap-1 w-full">
            <Dot color="#7D7D7E"/>
            <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#7D7D7E] text-left flex items-center font-normal">
              Others
            </p>
          </div>
          <div className="flex flex-row w-full justify-end gap-3 items-center">
            <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#000000] text-left flex items-center font-bold">
              ₹24.3L
            </p>
            <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#7D7D7E] text-left flex items-center font-bold">
              9%
            </p>
            <div className="flex flex-row items-center w-auto">
              <Arrow color="#F31D1D" rotate="no"/>
              <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#1D874F] text-left flex items-center font-bold">
                1.09%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
