import values from "../../Data/Values"

import TVL from "./TVL"

function Overview() {
	return (
		<>
			<div className="grid grid-cols-12 gap-5">
				<div className="col-start-1 col-span-3 text-xl font-base text-slate-800 text-left pl-3">
					Stats Overview
				</div>

				<div className="col-start-1 col-span-4 rounded-lg border border-gray-200 bg-white shadow-md ">
					<div className="text-black border-b border-slate-800/40 ">{values.TVL.subtitle}</div>
					<div className="flex flex-row items-center justify-center gap-3 py-2">
						<div className="text-slate-800 font-bold">{values.TVL.currency}</div>
						<div className="text-slate-800 text-lg">
							<TVL />
						</div>
					</div>
				</div>

				<div className="col-start-5 col-span-4  rounded-lg border border-gray-200 bg-white shadow-md ">
					<div className="text-black border-b border-slate-800/40">Borrow</div>
					<div className="flex flex-row items-center justify-center gap-3 py-2">
						<div className="text-slate-800 text-lg">amount xyz</div>
					</div>
				</div>

				<div className="col-start-9 col-span-4 rounded-lg border border-gray-200 bg-white shadow-md ">
					<div className="text-black border-b border-slate-800/40">Supply</div>
					<div className="flex flex-row items-center justify-center gap-3 py-2">
						<div className="text-slate-800 text-lg">amount xyz</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Overview
