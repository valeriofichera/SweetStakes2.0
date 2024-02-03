import Button from '../Button';
import Chart from './Chart';
import logo from '../../assets/logo.svg';
import ethlogo from '../../assets/ethlogo.png';
import Probability from '../functional/Probability';
import Balance from '../functional/Balance';
import { Total } from '../functional/Total';
function MainBox() {

  return (

    <div className='grid grid-cols-12  items-center justify-center text-center '>

      <div className='col-start-1 col-span-7 text-left mt-12'>
        <div className="text-black text-xl">
          <div className='font-bold'>Welcome to Sweetstakes, your decentralized gaming experience.</div>
          <div className="font-base text-base">
          You have to enter a pod, your winning chances are determined by the value you put in vs. others.
          </div>
        </div>
      </div>

      <div className="col-start-1 col-span-4 rounded-lg mt-[-120px] ">
          <Chart/>
				</div>


      <div className='col-start-5 col-span-8 mt-36'>
      <div className="flex-1 rounded-lg bg-base-white shadow-[0px_4px_8px_-2px_rgba(16,_24,_40,_0.1),_0px_2px_4px_-2px_rgba(16,_24,_40,_0.06)] overflow-hidden flex flex-col items-start justify-start text-left text-lg text-gray-900 border-[1px] border-solid border-gray-200">
                <div className="self-stretch bg-base-white flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start py-4 px-6">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative leading-[28px] font-medium">
                        Jackpot #1
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start mix-blend-multiply text-center text-xs text-primary-700">
                        <div className="rounded-2xl bg-primary-50 flex flex-row items-center justify-center py-0.5 px-2">
                          <div className="relative leading-[18px] font-medium bg-violet-200 p-1 rounded-lg flex flex-row gap-1">
                            winning propability <Probability/> %
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative bg-gray-200 h-px" />
                </div>
                <div className="self-stretch bg-base-white flex flex-row items-start justify-start text-sm text-gray-500">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start p-8">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <div className='flex flex-row'>
                          <div className="flex flex-col">
                          <img className='h-12' src={ethlogo} alt="" />
                          1ETH
                          </div>
                          <div className="flex flex-col font-bold text-lg ml-24">
                          <img className='h-12' src={logo} alt="" />
                              <Balance/>                         
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="self-stretch w-px relative max-h-full"
                    alt=""
                    src="/divider.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch h-[72px] flex flex-row items-center justify-start py-4 px-6 box-border">
                      <div className="relative leading-[20px]">
                        <b>0xD2...2D3R</b>
                        <span> deposited 0.01 ETH</span>
                      </div>
                    </div>
                    <div className="self-stretch relative bg-gray-200 h-px" />
                    <div className="self-stretch h-[72px] flex flex-row items-center justify-start py-4 px-6 box-border">
                      <div className="relative leading-[20px]">
                        <b>0xFg...1Jf9</b>
                        <span> deposited 0.001 ETH</span>
                      </div>
                    </div>
                    <div className="self-stretch relative bg-gray-200 h-px" />
                    <div className="self-stretch h-[72px] flex flex-row items-center justify-start py-4 px-6 box-border">
                      <div className="relative leading-[20px]">
                        <b>0xTs...oF22</b>
                        <span> deposited 10 XP</span>
                      </div>
                    </div>
                    <div className="self-stretch relative bg-gray-200 h-px" />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="self-stretch h-[72px] flex flex-row items-center justify-start py-4 px-6 box-border">
                      <div className="relative leading-[20px]">+ 0.01 ETH</div>
                    </div>
                    <div className="self-stretch relative bg-gray-200 h-px" />
                    <div className="self-stretch h-[72px] flex flex-row items-center justify-start py-4 px-6 box-border">
                      <div className="relative leading-[20px]">+ 0.001 ETH</div>
                    </div>
                    <div className="self-stretch relative bg-gray-200 h-px" />
                    <div className="self-stretch h-[72px] flex flex-row items-center justify-start py-4 px-6 box-border">
                      <div className="relative leading-[20px]">+ 1 ETH</div>
                    </div>
                    <div className="self-stretch relative bg-gray-200 h-px" />
                  </div>
                </div>
              </div>


      </div>

        <div className="col-start-1 col-span-4 text-center pr-24 mt-[-140px]">

          100% of the pot has been reached

          <div className="text-slate-800 text-xl mb-3 flex flex-row gap-1">
          Total Jackpot: <Total/> ETH
          </div>

          <Button/>
				</div>


    {/* <div className='col-start-3 col-span-8 rounded-lg border border-gray-200 bg-white shadow-md p-5'>

    <div className='grid grid-cols-8'>

      <div className='col-start-1 col-span-8 p-5'>
        <div className="text-3xl font-extrabold text-black">TurtleShell Firewall Demo</div>
        <div className="text-slate-500 font-bold text-lg">Learn how TurtleShell can prevent hacks</div>
      </div>

      <div className='p-5 col-start-3 col-span-4 gap-5 justify-center items-center '>

      <a href="/hack" target="_blank" rel="noopener noreferrer">
        <div className="p-3 m-1 bg-black rounded-xl font-lg text-white hover:bg-slate-500">
          Original Hack
        </div>
      </a>

      <a href="/no-hack">
        <div className="p-3 m-1 bg-black rounded-xl font-lg text-white hover:bg-slate-500">
          Firewall-guarded Hack
        </div>
        </a>

      </div>

      </div>

      </div> */}

     


</div>

  );
}

export default MainBox;