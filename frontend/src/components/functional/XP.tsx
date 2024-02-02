import { LOTTERY_CONTRACT_ADDRESS, LOTTERY_CONTRACT_ABI } from './constants';
import { useContractRead } from 'wagmi';

const XP = () => {
  const { data, isLoading, isSuccess } = useContractRead({
    address: LOTTERY_CONTRACT_ADDRESS,
    abi: LOTTERY_CONTRACT_ABI,
    functionName: 'XP_token', // Corrected function name
    args: [],
  });

  // Add a console log to print the data
  console.log('Data:', data);


  return (
    <div className=''>
        {isLoading ? 'Checking Probability ...' : isSuccess ? `${data}` : 'Error'}
    </div>
  );
};

export default XP;
