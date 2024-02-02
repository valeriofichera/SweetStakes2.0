import { LOTTERY_CONTRACT_ADDRESS, LOTTERY_CONTRACT_ABI } from './constants';
import { useSendTransaction } from 'wagmi';
import { parseEther } from 'viem';

const Transfer = () => {

  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
    to: 'vitalik.eth',
    value: parseEther('0.1'),
  })
  return (
    <div>
      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-7"
      onClick={() => sendTransaction()}>Send Transaction</button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
    
  );
};

export default Transfer;
