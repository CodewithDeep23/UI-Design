import {
    ArrowDown,
  ArrowUp,
  dot,
  help,
  line1,
  line2,
  line3,
  line4,
  line5,
  Zepto,
} from "../assets";

export default function Content() {
  return (
    <div className="p-5 flex flex-col w-full h-auto items-start justify-center overflow-x-auto">
      <div className="flex flex-row w-full h-auto items-center justify-center bg-[#ffffff] ring-[1px] ring-inset ring-[#EBEBEB] rounded-t-md">
        <div className="w-full h-auto flex flex-row items-center justify-between gap-1">
            
            {/* BOX 1 */}
          <div className="flex flex-col w-[322.51px] h-[275.88px]">
            {/* part 1 */}
            <div className="w-full h-full flex flex-row items-center justify-between p-3 rounded-t-[10px] ring-[1px] ring-inset ring-[#EBEBEB]">
              <div className="flex flex-row items-center justify-between">
                <p className="text-[14px] leading-[20px] tracking-[-0.026em] text-[#515153] text-left flex items-center font-semibold">
                  Sales (MRP)
                </p>
              </div>
              <img src={help} alt="" />
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
                    <img src={ArrowUp} alt="" />
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
              <div className="mt-5 flex flex-row items-center justify-between">
                <div className="flex flex-col gap-y-3">
                  <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                    6
                  </p>
                  <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                    4.5
                  </p>
                  <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                    3
                  </p>
                  <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                    1.5
                  </p>
                </div>
                <div className="relative w-[283px] h-[90px]">
                  <img src={line1} alt="" className="absolute top-0 left-0" />
                  <img src={line2} alt="" className="absolute top-0 left-0" />
                  <img src={line3} alt="" className="absolute top-0 left-0" />
                  <img src={line4} alt="" className="absolute top-0 left-0" />
                  <img src={line5} alt="" className="absolute top-0 left-0" />
                </div>
              </div>
              <div className="flex flex-row gap-x-7 pl-10">
                <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                  09
                </p>
                <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                  10
                </p>
                <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                  11
                </p>
                <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                  12
                </p>
                <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                  13
                </p>
                <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                  14
                </p>
                <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                  15
                </p>
              </div>
            </div>
            {/* part 3 */}
            <div className="w-auto flex flex-col items-center justify-between p-3 rounded-b-[12px] ring-[1px] ring-inset ring-[#EBEBEB]">
              <div className="w-full flex pl-10 gap-5">
                <div className="w-auto flex items-center gap-1">
                  <img src={dot} alt="" />
                  <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#7D7D7E] text-left flex items-center font-normal">
                    This Month
                  </p>
                </div>
                <div className="w-auto flex items-center gap-1">
                  <svg
                    width="7"
                    height="6"
                    viewBox="0 0 7 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.507446"
                      width="6"
                      height="6"
                      rx="3"
                      fill="#E25D33"
                    />
                  </svg>
                  <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#7D7D7E] text-left flex items-center font-normal">
                    Last Month
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOX 2 */}
          <div className="flex flex-col w-[322.51px] h-[275.88px]">
            {/* part 1 */}
            <div className="w-full h-full flex flex-row items-center justify-between p-3 rounded-t-[10px] ring-[1px] ring-inset ring-[#EBEBEB]">
              <div className="flex flex-row items-center justify-between">
                <p className="text-[14px] leading-[20px] tracking-[-0.026em] text-[#515153] text-left flex items-center font-semibold">
                Total Quantity Sold
                </p>
              </div>
              <img src={help} alt="" />
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
                    <img src={ArrowUp} alt="" />
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
              <div className="mt-5 flex flex-row items-center justify-between">
                <div className="flex flex-col gap-y-3">
                  <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                    6
                  </p>
                  <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                    4.5
                  </p>
                  <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                    3
                  </p>
                  <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                    1.5
                  </p>
                </div>
                <div className="relative w-[283px] h-[90px]">
                  <img src={line1} alt="" className="absolute top-0 left-0" />
                  <img src={line2} alt="" className="absolute top-0 left-0" />
                  <img src={line3} alt="" className="absolute top-0 left-0" />
                  <img src={line4} alt="" className="absolute top-0 left-0" />
                  <img src={line5} alt="" className="absolute top-0 left-0" />
                </div>
              </div>
              <div className="flex flex-row gap-x-7 pl-10">
                <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                  09
                </p>
                <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                  10
                </p>
                <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                  11
                </p>
                <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                  12
                </p>
                <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                  13
                </p>
                <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                  14
                </p>
                <p className="text-[12px] leading-[16px] tracking-[-0.026em] text-[#8C9198] text-center flex items-center font-semibold">
                  15
                </p>
              </div>
            </div>
            {/* part 3 */}
            <div className="w-auto flex flex-col items-center justify-between p-3 rounded-b-[12px] ring-[1px] ring-inset ring-[#EBEBEB]">
              <div className="w-full flex pl-10 gap-5">
                <div className="w-auto flex items-center gap-1">
                  <img src={dot} alt="" />
                  <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#7D7D7E] text-left flex items-center font-normal">
                    This Month
                  </p>
                </div>
                <div className="w-auto flex items-center gap-1">
                  <svg
                    width="7"
                    height="6"
                    viewBox="0 0 7 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.507446"
                      width="6"
                      height="6"
                      rx="3"
                      fill="#E25D33"
                    />
                  </svg>
                  <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#7D7D7E] text-left flex items-center font-normal">
                    Last Month
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col w-[322.51px] h-[275.88px]">
            {/* part 1 */}
            <div className="w-full h-full flex flex-row items-center justify-between p-3 rounded-t-[10px] ring-[1px] ring-inset ring-[#EBEBEB]">
              <div className="flex flex-row items-center justify-between">
                <p className="text-[14px] leading-[20px] tracking-[-0.026em] text-[#515153] text-left flex items-center font-semibold">
                Total Quantity Sold
                </p>
              </div>
              <img src={help} alt="" />
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
                    <img src={ArrowUp} alt="" />
                    <p className="text-[15px] leading-[16px] tracking-[-0.026em] text-[#1D874F] text-left flex items-center font-bold">
                      2.4%
                    </p>
                  </div>
                  <p className="w-full text-[13px] leading-[16px] tracking-[-0.026em] text-[#031B15] text-left flex items-center justify-end font-normal">
                    vs 119.69 last month
                  </p>
                </div>
              </div>
            </div>
            {/* part 3 */}
            <div className="w-auto flex flex-col items-center justify-between p-3 rounded-b-[12px] ring-[1px] ring-inset ring-[#EBEBEB] gap-2">
              <div className="w-full flex gap-5">
                <div className=" flex items-center gap-1 w-full">
                  <img src={dot} alt="" />
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
                    <img src={ArrowDown} alt="" className="rotate-180" />
                    <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#1D874F] text-left flex items-center font-bold">
                    1.2%
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full flex gap-5">
                <div className=" flex items-center gap-1 w-full">
                  <img src={dot} alt="" />
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
                    <img src={ArrowDown} alt="" className="rotate-180" />
                    <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#1D874F] text-left flex items-center font-bold">
                    1.2%
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-5">
                <div className=" flex items-center gap-1 w-full">
                  <img src={dot} alt="" />
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
                    <img src={ArrowDown} alt="" className="rotate-180" />
                    <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#1D874F] text-left flex items-center font-bold">
                    1.2%
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-5">
                <div className=" flex items-center gap-1 w-full">
                  <img src={dot} alt="" />
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
                    <img src={ArrowDown} alt="" className="rotate-180" />
                    <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#1D874F] text-left flex items-center font-bold">
                    1.2%
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-5">
                <div className=" flex items-center gap-1 w-full">
                  <img src={dot} alt="" />
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
                    <img src={ArrowDown} alt="" className="rotate-180" />
                    <p className="text-[13px] leading-[16px] tracking-[-0.026em] text-[#1D874F] text-left flex items-center font-bold">
                    1.2%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
