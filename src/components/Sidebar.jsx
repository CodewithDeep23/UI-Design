import {
  image_1,
  image_2,
  image_3,
  image_4,
  Vector,
  Vector2,
  user,
  plus,
  Vector3,
  Vector6,
  Vector7,
  Vector8,
  Vector4,
  Vector5
} from "../assets";
import { Dropdown, Button} from './index'

export default function Sidebar() {
  const handleSelect = (value) => {
    console.log("Selected:", value);
  };

  return (
    <div className="w-auto h-auto border-gray-400 flex">
      <div className="flex items-center justify-start w-auto h-[831px]">
        <div className="flex items-center justify-end w-[288px] h-[831px] fill-[#FFFFFF]">
          <div className="flex items-center justify-start w-[288px] h-[831px]">
            <div className="flex items-start flex-col w-auto h-[831px]">
              {/* Top Part */}
              <div className="flex items-center justify-start gap-4 pt-[20px] pb-[20px] pl-[5px] pr-[13.5px] w-[288px] h-auto bg-[#FFFFFF]">
                <Button
                  className=" px-0 py-0 cursor-pointer"  
                >
                  <div className="flex items-center justify-center w-[40px] h-[40px] gap-[10px] rounded-[12px]">
                    <img src={image_1} alt="" />
                  </div>
                </Button>
                <div className="w-full h-auto flex justify-between items-center gap-auto px-1.5 py-1.5 rounded-[12px] fill-[#FDFDFD] border border-black/[0.12]">
                  <div className="flex justify-start items-center gap-[8px] w-auto h-auto">
                    <div class="flex items-center justify-center gap-[10px] p-[5px] rounded-[7px] bg-[#309E96] w-auto h-auto">
                      <p class="font-semibold text-[11px] leading-[normal] text-white w-auto h-auto">
                        SS
                      </p>
                    </div>
                    <p class="font-semibold text-[14px] leading-[normal] text-center text-[#031B15] w-auto h-auto">
                      Test_brand
                    </p>
                  </div>
                  <div class="w-[16px] h-[16px] flex justify-end items-center overflow-hidden">
                    <img src={Vector} alt="" />
                  </div>
                </div>
                <div class="w-[16.3px] h-[16.3px] p-[1px] flex items-center justify-center overflow-hidden">
                  <img src={Vector2} alt="" />
                  <img src={Vector2} alt="" />
                </div>
              </div>
              {/* Bottom Part */}
              <div className="w-[288px] h-[755px] flex flex-row items-start">
                {/* First Container */}
                <div className="w-[51px] h-full flex flex-col items-center pb-2 bg-[#FFFFFF]">
                  {/* Inner container: verticle flow */}
                  <div className="flex flex-col justify-start items-center w-full h-full">
                    {/* Tab 1 */}
                    <Button
                      className="flex-row w-[50px] h-auto flex items-center justify-center px-[2px] py-[6px] cursor-pointer"
                    >
                      <div className="relative w-[40px] h-[40px] rounded-[12px] overflow-hidden ring-[0.5px] ring-inset ring-black/10">
                        <img
                          src={image_2}
                          alt="tab 3"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Button>

                    {/* Tab 2 */}
                    <Button 
                      className="flex-row w-[50px] h-auto flex items-center justify-center px-[2px] py-[6px] cursor-pointer"
                    >
                    <div className="w-[40px] h-[40px] rounded-[12px] overflow-hidden ring-[0.5px] ring-inset ring-black/10">
                        <img
                          src={image_3}
                          alt="tab 2"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Button>

                    {/* Tab 3 */}
                    <Button 
                    className="flex-row w-[50px] h-auto flex items-center justify-center px-[2px] py-[6px] cursor-pointer"
                    >
                    <div className="relative w-[40px] h-[40px] rounded-[12px] overflow-hidden ring-[0.5px] ring-inset ring-black/10">
                        <img
                          src={image_4}
                          alt="tab 3"
                          className="w-full h-full object-cover"
                        />
                        <div className='absolute inset-0 flex items-center justify-center'>
                          <img src={plus} alt=""className='size-5'/>
                        </div>
                      </div>
                    </Button>
                  </div>
                  {/* Section below side tabs */}
                  <div className="flex flex-col items-center gap-[18px] mt-6 w-[28px]">
                      {/* User Layout (freeform image) */}
                      <Button className="cursor-pointer">
                        <div className="w-[20px] h-[20px] overflow-hidden">
                          <img
                            src={user}
                            alt="User Icon"
                            className="w-full h-full object-cover object-right"
                          />
                        </div>
                      </Button>

                      {/* Frame with text inside */}
                      <Button
                        className="cursor-pointer"
                      >
                        <div className="w-[28px] h-[28px] flex flex-col items-center justify-center p-[6px] rounded-[32px] bg-[#9106FF] ring-[1px] ring-inset ring-white/10">
                          <span className="inset-0 flex items-start justify-center text-white text-[12px] font-semibold leading-none">
                            SS
                          </span>
                        </div>
                      </Button>
                    </div>
                </div>

                {/* Second Container */}
                <div className="w-[237px] h-[755px] px-4 py-6 bg-[#F8F8F8] flex flex-col items-start">
                  <div className="w-[205px] h-[703px] flex flex-col items-start justify-between">
                    {/* First part */}
                    <div className="w-full h-[236px] flex flex-col items-start">
                      <div className="flex flex-row items-center w-full max-h-[36px] pl-3 py-2 hover:cursor-pointer">
                        <div className="w-full h-[20px] flex items-center gap-5">
                          <img src={Vector3} alt="" />
                          <p class="font-medium text-[14px] leading-[20px] text-[#031B15] w-auto h-auto"> Overview
                          </p>
                        </div>
                      </div>
                      <div className="w-full flex items-center">
                        <Dropdown
                          label="Channels"
                          iconLeft={Vector4}
                          iconRight={Vector5}
                          options={["Meta Ads", "Google Ads", "Quick Commerce"]}
                          onSelect={handleSelect}
                          push_below="w-full mt-2 bg-white rounded shadow"
                          closeOnMouseLeave="true"
                        />
                      </div>
                      <div className="flex flex-row items-center w-full max-h-[36px] pl-3 py-2 hover:cursor-pointer">
                        <div className="w-full h-[20px] flex items-center gap-5">
                          <img src={Vector6} alt="" />
                          <p class="font-medium text-[14px] leading-[20px] text-[#031B15] w-auto h-auto"> Creatives
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Second part */}
                    <div className="w-full max-h-[82px] flex flex-col items-start">
                      <div className="flex flex-row items-center w-full max-h-[36px] pl-3 py-2 hover:cursor-pointer">
                        <div className="w-full h-[20px] flex items-center gap-5">
                          <img src={Vector7} alt="" />
                          <p class="font-medium text-[14px] leading-[20px] text-[#031B15] w-auto h-auto"> Overview
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center w-full max-h-[36px] pl-3 py-2 hover:cursor-pointer">
                        <div className="w-full h-[20px] flex items-center gap-5">
                          <img src={Vector8} alt="" />
                          <p class="font-medium text-[14px] leading-[20px] text-[#031B15] w-auto h-auto"> Overview
                          </p>
                        </div>
                      </div>
                    </div>
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
