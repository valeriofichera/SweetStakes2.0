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
  <a className="text-xl font-bold inline-flex p-[15px] px-[17px] justify-center items-center gap-[10px] rounded-[10px] bg-[#ffffff80] hover:bg-[#3a3f6d80] hover:text-[#8BA2C8] hover:cursor-pointer" onClick={() => write()}>Approve</a>
  {isLoading && <div>Check Wallet</div>}
  {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
</div>




);

};

export default Approve;