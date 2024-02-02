import React from "react"

function Popup() {
	return (
		<div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white rounded-2xl p-14">
				<h2 className="text-4xl font-bold mb-8">Oh... :(</h2>
				<p className="text-2xl">
					Unfortunately the protocol has been paused due to unusual activity. Depositing & Withdrawals have
					been paused.
				</p>
			</div>
		</div>
	)
}

export default Popup
