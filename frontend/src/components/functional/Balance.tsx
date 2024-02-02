import { useEffect, useState } from 'react';
import { XP_TOKEN_ADDRESS, XP_TOKEN_ABI } from './constants';
import { useAccount, useBalance, useContractRead } from 'wagmi';


const Balance = () => {
  const { address } = useAccount();
  const { data, isLoading } = useBalance({
    address: address,
    token: XP_TOKEN_ADDRESS,
  });
  const {data:value} = useContractRead({
    address: XP_TOKEN_ADDRESS,
    abi: XP_TOKEN_ABI,
    functionName: 'addressToDepositedTokens',
    args: [address],
  });

  console.log(value);

  // Use a state to hold the formatted balance to prevent content mismatch
  const [balanceFormatted, setBalanceFormatted] = useState('Loading...');
  const [valueFormatted, setValueFormatted] = useState('Loading...');



  useEffect(() => {
    // Update the balance when the data is loaded
    if (data && !isLoading) {
      setBalanceFormatted(`${data.formatted} ${data.symbol}`);
    }

    if (value && !isLoading) {
      setValueFormatted(value.toString());
    }
  }, [data, isLoading]);

  return (
    <div className="">
          {balanceFormatted}
    </div>
  );
};

export default Balance;