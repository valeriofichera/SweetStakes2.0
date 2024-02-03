import React from "react"
import logo from '../assets/logo.svg';
import Deposit from "./functional/Deposit";
import Approve from "./functional/Approve_XP";
import { LOTTERY_CONTRACT_ADDRESS } from '../components/functional/constants';
function Popup() {

	return (
		<div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white rounded-2xl p-14">

			<div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch relative leading-[28px] font-medium">
            Deposit into Jackpot #1
          </div>
          <div className="self-stretch relative text-sm leading-[20px] text-gray-500">
            deposit ETH or XP into the Jackpot.
          </div>

		  <div className="self-stretch relative flex flex-col items-center justify-start gap-[16px]">
			  <Approve />
			  {/* <Deposit /> */}
			  Deposit funds to: <br/> <span className="underline mt-[-15px] mb-[-40px]">{LOTTERY_CONTRACT_ADDRESS}</span> <br/> the more you deposit, the higher your chances of winning!
		
		</div>
        </div>
		</div>
		</div>
	)
}

export default Popup
