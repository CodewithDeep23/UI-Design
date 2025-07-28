import { ArrowUp, ChartLine, help, Vector5, Vector5W } from "../assets";
import { Arrow, Button, Checkbox, Dropdown, SkuSelector } from "./index";

import '../index.css'


export default function Frame2({skuList = []}) {
  return (
    <div className="w-full h-auto overflow-x-auto scrollbar-hide shadow-md rounded-[10px] ring-[1px] ring-inset ring-[#EBEBEB]">
      <div className="flex flex-row min-w-fit">
        {/* First Container */}
        <SkuSelector skuList={skuList} />
        {/* Second Container */}
        <div className="w-[412px] h-[382px] flex flex-col">
          {/* First */}
          <div className="w-full h-[97px] max-h-[6.0625rem] flex flex-col items-center gap-2 bg-[#FFFFFF] border border-[#F1F1F1]">
            <div className="flex flex-col w-full h-full">
              <p className=" w-full h-[48px] flex items-center justify-center text-[#013025] font-bold leading-[18px] tracking-[-0.02px] text-[15px] border-b border-[#F1F1F1]">
                Availability
              </p>
              <div className="flex-1 w-full flex flex-row border-t border-[#F1F1F1]">
                <p className="gap-2 w-[116px] max-w-[7.25rem] h-full flex items-center justify-center text-[#013025] font-semibold leading-[18px] tracking-[-0.02px] text-[15px]">
                  Sales
                  <img src={Vector5} alt="" className="mt-1" />
                </p>
                <p className="gap-2 w-[139px] max-w-[8.6875rem] h-full flex items-center justify-center text-[#013025] font-semibold leading-[18px] tracking-[-0.02px] text-[15px]">
                  Out of Stock
                  <img src={Vector5} alt="" className="mt-1" />
                </p>
                <p className="gap-2 w-[157px] max-w-[9.8125rem] h-full flex items-center justify-center text-[#013025] font-semibold leading-[18px] tracking-[-0.02px] text-[15px]">
                  Total Inventory
                  <img src={Vector5} alt="" className="mt-1" />
                </p>
              </div>
            </div>
          </div>
          {/* Second */}
          <div className="w-full max-w-[412px] h-[285px] max-h-[17.8125rem] flex flex-col">
            <div className="flex flex-col w-full h-full justify-start">
              <div className="h-[48px] max-h-[3rem] w-full flex flex-row bg-[#F7F7F7] border border-[#F1F1F1]">
                <p className=" gap-2 w-[116px] max-w-[7.25rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  ₹93,132.12
                </p>
                <p className=" gap-2 w-[139px] max-w-[8.6875rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  1.68%
                </p>
                <p className=" gap-2 w-[157px] max-w-[9.8125rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  931.9
                </p>
              </div>
              <div className="h-[93px] max-h-[5.8125rem] w-full flex flex-row items-center bg-[#F7F7F7] border border-[#F1F1F1]">
                <div className=" gap-2 w-[116px] max-w-[7.25rem] h-full flex flex-col justify-center items-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  ₹93,132.12
                  <p>₹7,012.72</p>
                  <div className="flex flex-row items-center text-[#1D874F]">
                    <Arrow />
                    2.4%
                  </div>
                </div>
                <div className=" gap-2 w-[139px] max-w-[8.6875rem] h-full flex flex-col justify-center items-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  ₹93,132.12
                  <p>₹7,012.72</p>
                  <div className="flex flex-row items-center text-[#1D874F]">
                    <Arrow />
                    2.4%
                  </div>
                </div>
                <div className=" gap-2 w-[157px] max-w-[9.8125rem] h-full flex flex-col justify-center items-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  ₹93,132.12
                  <p>₹7,012.72</p>
                  <div className="flex flex-row items-center text-[#1D874F]">
                    <Arrow />
                    2.4%
                  </div>
                </div>
              </div>
              <div className="h-[48px] max-h-[3rem] w-full flex flex-row bg-[#FCFCFC] border border-[#F1F1F1]">
                <p className=" gap-2 w-[116px] max-w-[7.25rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  ₹9313
                </p>
                <p className=" gap-2 w-[139px] max-w-[8.6875rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  1.68%
                </p>
                <p className=" gap-2 w-[157px] max-w-[9.8125rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  931.9
                </p>
              </div>
              <div className="h-[48px] max-h-[3rem] w-full flex flex-row bg-[#FCFCFC] border border-[#F1F1F1]">
                <p className=" gap-2 w-[116px] max-w-[7.25rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  ₹0
                </p>
                <p className=" gap-2 w-[139px] max-w-[8.6875rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  0
                </p>
                <p className=" gap-2 w-[157px] max-w-[9.8125rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  0
                </p>
              </div>
              <div className="h-[48px] max-h-[3rem] w-full flex flex-row bg-[#FCFCFC] border border-[#F1F1F1]">
              <p className="gap-2 w-[152px] max-w-[9.5rem] h-full flex items-center justify-center text-[#0A090B] font-bold leading-[16px] tracking-[-0.02px] text-[15px]">
                  ₹2,93,132.12
                </p>
                <p className="gap-2 w-[152px] max-w-[9.5rem] h-full flex items-center justify-center text-[#0A090B] font-bold leading-[16px] tracking-[-0.02px] text-[15px]">
                  16%
                </p>
                <p className="gap-2 w-[152px] max-w-[9.5rem] h-full flex items-center justify-center text-[#0A090B] font-bold leading-[16px] tracking-[-0.02px] text-[15px]">
                  2931
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Third Container */}
        <div className="w-[476px] h-[382px] flex flex-col">
          {/* First */}
          <div className="w-full h-[97px] max-h-[6.0625rem] flex flex-col items-center gap-2 bg-[#FFFFFF] rounded-tr-[10px] border border-[#F1F1F1]">
            <div className="flex flex-col w-full h-full">
              <p className=" w-full h-[48px] flex items-center justify-center text-[#013025] font-bold leading-[18px] tracking-[-0.02px] text-[15px] border-b border-[#F1F1F1]">
              Visibility
              </p>
              <div className="flex-1 w-full flex flex-row border-t border-[#F1F1F1]">
                <p className="gap-2 w-[152px] max-w-[9.5rem] h-full flex items-center justify-center text-[#013025] font-semibold leading-[18px] tracking-[-0.02px] text-[15px]">
                Average Rank
                  <img src={Vector5} alt="" className="mt-1" />
                </p>
                <p className="gap-2 w-[126px] max-w-[7.875rem] h-full flex items-center justify-center text-[#013025] font-semibold leading-[18px] tracking-[-0.02px] text-[15px]">
                Est. Traffic
                  <img src={Vector5} alt="" className="mt-1" />
                </p>
                <p className="gap-2 w-[166px] max-w-[10.375rem] h-full flex items-center justify-center text-[#013025] font-semibold leading-[18px] tracking-[-0.02px] text-[15px]">
                Est. Impressions
                  <img src={Vector5} alt="" className="mt-1" />
                </p>
                <p className="gap-2 w-[74px] max-w-[4.6225rem] h-full flex items-center justify-center text-[#013025] font-semibold leading-[18px] tracking-[-0.02px] text-[15px]">
                  Cli
                  <img src={Vector5} alt="" className="mt-1" />
                </p>
              </div>
            </div>
          </div>
          {/* Second */}
          <div className="w-full max-w-[476px] h-[285px] max-h-[17.8125rem] flex flex-col">
            <div className="flex flex-col w-full h-full justify-start">
              <div className="h-[48px] max-h-[3rem] w-full flex flex-row bg-[#F7F7F7] border border-[#F1F1F1]">
                <p className=" gap-2 w-[152px] max-w-[9.5rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  ₹93,132.12
                </p>
                <p className=" gap-2 w-[126px] max-w-[7.875rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  1.68%
                </p>
                <p className=" gap-2 w-[166px] max-w-[10.375rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  931.9
                </p>
                <p className=" gap-2 w-[74px] max-w-[4.6225rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                1.90%
                </p>
              </div>
              <div className="h-[93px] max-h-[5.8125rem] w-full flex flex-row items-center bg-[#F7F7F7] border border-[#F1F1F1]">
                <div className=" gap-2 w-[152px] max-w-[9.5rem] h-full flex flex-col justify-center items-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  7
                  <p>4</p>
                  <div className="flex flex-row items-center text-[#1D874F]">
                    <Arrow />
                    2.4%
                  </div>
                </div>
                <div className=" gap-2 w-[126px] max-w-[7.875rem] h-full flex flex-col justify-center items-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  ₹93,132.12
                  <p>₹7,012.72</p>
                  <div className="flex flex-row items-center text-[#1D874F]">
                    <Arrow />
                    2.4%
                  </div>
                </div>
                <div className=" gap-2 w-[166px] max-w-[10.375rem] h-full flex flex-col justify-center items-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  ₹93,132.12
                  <p>₹7,012.72</p>
                  <div className="flex flex-row items-center text-[#1D874F]">
                    <Arrow />
                    2.4%
                  </div>
                </div>
                <div className=" gap-2 w-[74px] max-w-[4.6225rem] h-full flex flex-col justify-center items-center text-[#0F5AFF] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  10
                  <p className="text-[#3E7AFD]">45</p>
                  <div className="flex flex-row items-center text-[#F31D1D]">
                    <Arrow color="#F31D1D" rotate="yes"/>
                    4.2%
                  </div>
                </div>
              </div>
              <div className="h-[48px] max-h-[3rem] w-full flex flex-row bg-[#FCFCFC] border border-[#F1F1F1]">
                <p className=" gap-2 w-[152px] max-w-[9.5rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  ₹9313
                </p>
                <p className=" gap-2 w-[126px] max-w-[7.875rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  1.68%
                </p>
                <p className=" gap-2 w-[166px] max-w-[10.375rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  931.9
                </p>
                <p className=" gap-2 w-[74px] max-w-[4.625rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                1.90%
                </p>
              </div>
              <div className="h-[48px] max-h-[3rem] w-full flex flex-row bg-[#FCFCFC] border border-[#F1F1F1]">
                <p className=" gap-2 w-[152px] max-w-[9.5rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  ₹0
                </p>
                <p className=" gap-2 w-[126px] max-w-[7.875rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  0
                </p>
                <p className=" gap-2 w-[166px] max-w-[10.375rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                  0
                </p>
                <p className=" gap-2 w-[74px] max-w-[4.6225rem] h-full flex items-center justify-center text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] text-[14px]">
                0.00%
                </p>
              </div>
              <div className="h-[48px] max-h-[3rem] w-full flex flex-row bg-[#FCFCFC] border border-[#F1F1F1]">
              <p className="gap-2 w-[152px] max-w-[9.5rem] h-full flex items-center justify-center text-[#0A090B] font-bold leading-[16px] tracking-[-0.02px] text-[15px]">
                  ₹2,93,132.12
                </p>
                <p className="gap-2 w-[126px] max-w-[7.875rem] h-full flex items-center justify-center text-[#0A090B] font-bold leading-[16px] tracking-[-0.02px] text-[15px]">
                  16%
                </p>
                <p className="gap-2 w-[166px] max-w-[10.375rem] h-full flex items-center justify-center text-[#0A090B] font-bold leading-[16px] tracking-[-0.02px] text-[15px]">
                  2931
                </p>
                <p className="gap-2 w-[74px] max-w-[4.6225rem] h-full flex items-center justify-center text-[#0A090B] font-bold leading-[16px] tracking-[-0.02px] text-[15px]">
                1.90%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
