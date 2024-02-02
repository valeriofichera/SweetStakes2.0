import { LOTTERY_CONTRACT_ADDRESS, LOTTERY_CONTRACT_ABI } from './constants';
import { useContractRead } from 'wagmi';

const Probability = () => {
  const { data, isLoading, isSuccess } = useContractRead({
    address: LOTTERY_CONTRACT_ADDRESS,
    abi: LOTTERY_CONTRACT_ABI,
    functionName: 'getMyCurrentPropability', // Corrected function name
    account: '0xe2D3C55a61BE30ce58324Be5bd188F1bEAc06f58',
  });

  // Add a console log to print the data
  console.log('Data:', data);


  return (
    <div className=''>
        {isLoading ? 'Checking Probability ...' : isSuccess ? `${data}` : 'Error'}
    </div>
  );
};

export default Probability;
