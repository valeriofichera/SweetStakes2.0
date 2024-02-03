import { useContractRead } from 'wagmi';
import { ethers } from 'ethers';
import { LOTTERY_CONTRACT_ADDRESS, LOTTERY_CONTRACT_ABI } from './constants';


export function Total() {
  const { data, isError, isLoading } = useContractRead({
    address: LOTTERY_CONTRACT_ADDRESS,
    abi: LOTTERY_CONTRACT_ABI,
    functionName: 'total',
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading the total</div>;

  return <div>{data ? ethers.utils.formatUnits(data, 'ether') : 'N/A'}</div>;
}