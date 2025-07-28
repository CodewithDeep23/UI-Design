import Arrow from "./Arrow";
import Dot from "./Dot";
import { line1, line2, line3, line4, line5 } from "../../assets";

export default function Card({
  title = "Sales (MRP)",
  vector = null,
  ArrowColor = "#027056",
  rotate = null,
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
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between">
            <p className="text-[24px] leading-[32px] tracking-[-0.026em] text-[#031B15] text-left flex items-center font-bold">
              125.49
            </p>
          </div>
          <div className="flex flex-col items-center justify-end w-full">
            <div className="w-full flex flex-row items-center justify-end">
              <Arrow color={ArrowColor} rotate={rotate} />
              <p className="text-[15px] leading-[16px] tracking-[-0.026em] text-[#1D874F] text-left flex items-center font-bold">
                2.4%
              </p>
            </div>
            <p className="w-full text-[13px] leading-[16px] tracking-[-0.026em] text-[#031B15] text-left flex items-center justify-end font-normal">
              vs 119.69 last month
            </p>
          </div>
        </div>
        {/* section 2 */}
        <div className="mt-5 flex flex-col items-start">
          {/* Y-axis and chart */}
          <div className="flex flex-row items-start justify-start w-full">
            <div className="flex flex-col gap-y-3 pr-2 w-[30px]">
              {["6", "4.5", "3", "1.5"].map((val, idx) => (
                <p
                  key={idx}
                  className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center font-semibold"
                >
                  {val}
                </p>
              ))}
            </div>
            <div className="relative w-full max-w-[250px] h-[90px]">
              <img src={line1} alt="" className="absolute top-0 left-0" />
              <img src={line2} alt="" className="absolute top-0 left-0" />
              <img src={line3} alt="" className="absolute top-0 left-0" />
              <img src={line4} alt="" className="absolute top-0 left-0" />
              <img src={line5} alt="" className="absolute top-0 left-0" />
            </div>
          </div>

          {/* X-axis */}
          <div className="mt-1 w-[283px] flex flex-row justify-between pl-[30px]">
            {["09", "10", "11", "12", "13", "14", "15"].map((label, idx) => (
              <p
                key={idx}
                className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center font-semibold"
              >
                {label}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* part 3 */}
      <div className="w-full flex flex-col items-center justify-between p-3 rounded-b-[12px] ring-[1px] ring-inset ring-[#EBEBEB]">
        <div className="w-full flex pl-10 gap-5">
          <div className="w-auto flex items-center gap-1">
            <Dot />
            <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#7D7D7E] text-left flex items-center font-normal">
              This Month
            </p>
          </div>
          <div className="w-auto flex items-center gap-1">
            <Dot color="#E25D33" />
            <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#7D7D7E] text-left flex items-center font-normal">
              Last Month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}