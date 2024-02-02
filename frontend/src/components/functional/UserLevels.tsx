import { XP_TOKEN_ADDRESS, XP_TOKEN_ABI } from './constants';
import { useContractRead } from 'wagmi';

const UserLevels = () => {
  const { data, isLoading, isSuccess } = useContractRead({
    address: XP_TOKEN_ADDRESS,
    abi: XP_TOKEN_ABI,
    functionName: 'userLevels', // Corrected function name
    args: ['0xe2D3C55a61BE30ce58324Be5bd188F1bEAc06f58'],
  });

  // Add a console log to print the data
  console.log('Data:', data);


  return (
    <div className=''>
        {isLoading ? 'Checking Probability ...' : isSuccess ? `${data}` : 'Error'}
    </div>
  );
};

export default UserLevels;
