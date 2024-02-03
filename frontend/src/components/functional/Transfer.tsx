import React from 'react';
import { LOTTERY_CONTRACT_ADDRESS } from './constants';
import { useSendTransaction } from 'wagmi';
import { ethers } from 'ethers'; // Corrected import for ethers

const Transfer = () => {
  // Corrected use of ethers.parseEther for value conversion
  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
    to: LOTTERY_CONTRACT_ADDRESS,
    value: ethers.utils.parseEther('0.1'),
  });

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-7"
        onClick={() => sendTransaction()}
      >
        Send Transaction
      </button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  );
};

export default Transfer;

