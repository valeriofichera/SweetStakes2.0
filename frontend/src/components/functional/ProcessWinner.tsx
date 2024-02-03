import { LOTTERY_CONTRACT_ADDRESS, XP_TOKEN_ADDRESS, LOTTERY_CONTRACT_ABI } from './constants';
import { useContractWrite } from 'wagmi';

const ProcessWinner = () => {
  const { data, isLoading, isSuccess, isError, write, error } = useContractWrite({
    address: LOTTERY_CONTRACT_ADDRESS,
    abi: LOTTERY_CONTRACT_ABI,
    functionName: 'processWinner',
    args: [],
  });
 
  const handleProcessWinner = async () => {
    try {
      // Call the write function here
      await write();
    } catch (err) {
      console.error("Error while entering token:", err);
    }
  };

  return (
    <div>
      <button
        className="bg-[#956bd0] hover:bg-slate-500 text-white font-bold py-2 px-4 rounded mt-5"
        onClick={handleProcessWinner}
        disabled={isLoading} // Disable the button while loading
      >
       Proccess Winner
      </button>
      {isLoading && <div>Checking Wallet...</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
      {isError && <div>Error: {error.message}</div>}
    </div>
  );
}

export default ProcessWinner;

