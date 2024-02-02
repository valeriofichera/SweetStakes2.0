import { useContractWrite, usePrepareContractWrite } from "wagmi"
import { contractAddresses, contractAbi } from "../../../constants/index"
import { parseEther } from "viem"

function Supply() {
	const protocolAddress = contractAddresses["31337"]["firewalledProtocol"]
	const amount = parseEther("1000")

	const { config: depositConfig, error: depositError } = usePrepareContractWrite({
		address: protocolAddress as `0x${string}`,
		abi: contractAbi,
		functionName: "deposit",
		args: [amount.toString()],
	})
	const { write: deposit } = useContractWrite(depositConfig)

	depositError && console.log(depositError)

	return (
		<>
			<button disabled={!deposit} onClick={() => deposit?.()}>
				Supply
			</button>
		</>
	)
}

export default Supply
