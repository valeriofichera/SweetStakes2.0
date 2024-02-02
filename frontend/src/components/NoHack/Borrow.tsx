import { useContractWrite, usePrepareContractWrite } from "wagmi"
import { contractAddresses, contractAbi } from "../../../constants/index"
import { parseEther } from "viem"

function Borrow() {
	const protocolAddress = contractAddresses["31337"]["firewalledProtocol"]
	const amount = parseEther("1000")

	const { config: withdrawConfig, error: withdrawError } = usePrepareContractWrite({
		address: protocolAddress as `0x${string}`,
		abi: contractAbi,
		functionName: "withdraw",
		args: [amount.toString()],
	})
	const { write: withdraw } = useContractWrite(withdrawConfig)

	return (
		<>
			<button disabled={!withdraw} onClick={() => withdraw?.()}>
				Borrow
			</button>
		</>
	)
}

export default Borrow
