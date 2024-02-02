import React from "react"
import logo from '../assets/logo.svg';
import Transfer from "./functional/Transfer";
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

		  <div className="self-stretch relative flex flex-row items-center justify-start gap-[16px]">
			  
			  <Transfer />
		
		</div>
        </div>
		</div>
		</div>
	)
}

export default Popup
