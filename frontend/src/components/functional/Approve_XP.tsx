import { XP_TOKEN_ADDRESS, LOTTERY_CONTRACT_ADDRESS, XP_TOKEN_ABI } from './constants';
import { parseUnits } from 'viem';
import { useContractWrite } from 'wagmi'


const Approve = () => {

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: XP_TOKEN_ADDRESS,
    abi: XP_TOKEN_ABI,
    functionName: 'approve',
    args: [LOTTERY_CONTRACT_ADDRESS, parseUnits('100000000', 18)],
  })

return (

<div className=''>
  <a className="bg-[#956bd0] hover:bg-slate-500 text-white font-bold py-2 px-4 rounded" onClick={() => write()}>Approve</a>
  {isLoading && <div>Check Wallet</div>}
  {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
</div>




);

};

export default Approve;