import { useContractWrite, usePrepareContractWrite,} from 'wagmi'
import { useNetwork } from 'wagmi'
import { contractAddresses, erc20Abi } from "../../../constants/index";
import { parseEther } from 'viem'



function AproSupply() {

    const { chain }  = useNetwork()
    let contractAddress = ""

    if (chain && contractAddresses) {
        const chainId = String(chain.id);
        contractAddress = contractAddresses["31337"]["usdc"]
      }

      const amount = parseEther('100000')
    
      const { config, error } = usePrepareContractWrite({
        address: contractAddress as `0x${string}`,
        abi: erc20Abi,
        functionName: "approve",
      })
      const { write } = useContractWrite(config)


  return (
    <>
      <button disabled={!write} onClick={() => write?.()}>
        Approve Transaction
      </button>
      {error && (
        <div>An error occurred preparing the transaction: {error.message}</div>
      )}
    </>
  )
}

export default AproSupply;