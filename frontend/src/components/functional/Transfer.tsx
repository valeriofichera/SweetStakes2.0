import { useState } from 'react';
import { LOTTERY_CONTRACT_ADDRESS } from './constants';
import { useSendTransaction } from 'wagmi';
import { parseEther } from 'viem'; // Assuming 'viem' is a typo or a project-specific alias for 'ethers'

const Deposit = () => {
  const [amount, setAmount] = useState('');

  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
    to: LOTTERY_CONTRACT_ADDRESS,
    value: parseEther(amount),
  });

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount in WEI"
        className="mb-4 pr-[-15px] p-2 rounded border"
      />
      <button
        className="bg-[#956bd0] hover:bg-slate-500 text-white font-bold py-2 px-4 rounded ml-5"
        onClick={() => sendTransaction()}
      >
        Send Transaction
      </button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  );
};

export default Deposit;
