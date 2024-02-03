import { LOTTERY_CONTRACT_ADDRESS, LOTTERY_CONTRACT_ABI } from './constants';
import { useSendTransaction } from 'wagmi';
import { parseEther } from 'viem';

const Deposit = () => {

  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
    to: LOTTERY_CONTRACT_ADDRESS,
    value: parseEther('0.1'),
  })
  return (
    <div>
      <button
      className="text-xl font-bold inline-flex p-[15px] px-[17px] justify-center items-center gap-[10px] rounded-[10px] bg-[#ffffff80] hover:bg-[#3a3f6d80] hover:text-[#8BA2C8] hover:cursor-pointer"
      onClick={() => sendTransaction()}>Send Transaction</button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  );
};

export default Deposit;


