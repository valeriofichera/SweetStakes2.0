import { useBalance } from "wagmi"
import { useNetwork } from "wagmi"
import { contractAddresses } from "../../../constants/index"
import { formatEther } from "viem"

function TVL() {
	const { chain } = useNetwork()
	let contractAddress = ""
	let usdc = ""

	if (chain && contractAddresses) {
		const chainId = chain.id
		// eslint-disable-next-line
		contractAddress = contractAddresses["31337"]["firewalledProtocol"]
		// eslint-disable-next-line
		usdc = contractAddresses["31337"]["usdc"]
	}

	const { data, isError, isLoading, error } = useBalance({
		address: contractAddress as `0x${string}`,
		chainId: 31337,
		token: usdc as `0x${string}`,
		watch: true,
	})

	const formattedData =
		data && data.value
			? Number(formatEther(data.value.toBigInt())).toLocaleString("en-US", {
					style: "currency",
					currency: "USD",
			  })
			: "0"

	console.log(error)

	if (isLoading) return <div>Fetching balance…</div>
	if (isError) return <div>Error fetching balance</div>
	return <>{formattedData}</>
}

export default TVL
