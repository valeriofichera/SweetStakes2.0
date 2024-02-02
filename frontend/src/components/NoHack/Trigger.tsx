import { useContractEvent, useContractRead } from "wagmi"
import { useNetwork } from "wagmi"
import { contractAddresses, turtleShellAbi } from "../../../constants/index"
import Popup from "../Popup"
import { useState } from "react"

function Trigger() {
	const [isOpen, setIsOpen] = useState(false)

	const { chain } = useNetwork()
	let contractAddress = ""
	let firewalledProtocol = ""

	if (chain && contractAddresses) {
		const chainId = String(chain.id)
		contractAddress = contractAddresses["31337"]["turtleShellFirewall"]
		firewalledProtocol = contractAddresses["31337"]["firewalledProtocol"]
	}

	useContractEvent({
		address: contractAddress as `0x${string}`,
		abi: turtleShellAbi,
		eventName: "FirewallStatusUpdate",
		listener(log) {
			setIsOpen(true)
			console.log(log)
		},
	})

	return <>{isOpen && <Popup />}</>
}

export default Trigger
