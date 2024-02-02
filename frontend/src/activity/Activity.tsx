import React, { useEffect, useState } from 'react';
import transactions from '../transactions/Events';

import 'animate.css';

function Activity() {
  const [currentTransactionIndex, setCurrentTransactionIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTransactionIndex((prevIndex) => prevIndex + 1);
    }, 5000); // Delay in milliseconds between each transaction rendering

    return () => clearTimeout(timer);
  }, [currentTransactionIndex]);

  const renderedTransactions = transactions
    .slice(0, currentTransactionIndex + 1)
    .map((transaction) => ( 
               
      <div className=' fadeInLeft col-start-1 col-span-12 rounded-2xl border border-gray-200 bg-white shadow-xl hover:shadow-2xl hover:shadow-red-900 p-5 mb-5'>
          <div> {transaction.id}</div>
          <div className='flex flex-row items-center justify-between border-b border-black mb-3'>
          <div> <span className='font-extrabold'>Tx Hash: </span>{transaction.txHash}</div>
          <div className=''><span className='font-bold'>Event: </span> {transaction.title}</div>
          </div>
    
    
          <div className='flex flex-row items-center justify-start gap-12'>
              <div className='flex flex-col items-start'>
                  <span className='font-bold'>From</span>
                  <div className='text-left'>{transaction.from}</div>
               </div>
               <div className='flex flex-col items-start'>
               <span className='font-bold'>To</span>
                  <div className='text-left'>{transaction.to}</div>
               </div>
               <div className='flex flex-col items-start'>
               <span className='font-bold'>Amount</span>
                  <div className='text-left'>{transaction.amount} {transaction.currency}</div>
               </div>
               <div className='flex flex-col items-start'>
               <span className='font-bold'>Description</span>
                  <div className='text-sm text-left'>{transaction.description}</div>
               </div>
    
          </div>
    
          <div className='text-xs mt-5 text-left'>
             *{transaction.note}
          </div>
      </div>
    
    
    
    ))
  return (
    <div className='col-start-1 col-span-12 '>
    
        <div className="col-start-2 col-span-3 text-3xl font-extrabold text-black text-left">
          Live Activity
        </div>
        <div className="flex flex-col-reverse">
            {renderedTransactions}
            </div>
  
  
    </div>
  );
}

export default Activity;



/*
*


import transactions from '../transactions/Events';



function Activity() {

  return (
<>
    <div className="col-start-2 col-span-3 text-3xl font-extrabold text-black text-left">
        Live Activity
    </div>

   
    {transactions.map((transaction) => ( 
    <div className='col-start-1 col-span-12 rounded-2xl border border-gray-200 bg-white shadow-xl hover:shadow-2xl hover:shadow-red-900 p-5 mb-5'>
        <div> {transaction.id}</div>
        <div className='flex flex-row items-center justify-between border-b border-black mb-3'>
        <div> <span className='font-extrabold'>Tx Hash: </span>{transaction.txHash}</div>
        <div className=''><span className='font-bold'>Event: </span> {transaction.title}</div>
        </div>


        <div className='flex flex-row items-center justify-start gap-12'>
            <div className='flex flex-col items-start'>
                <span className='font-bold'>From</span>
                <div className='text-left'>{transaction.from}</div>
             </div>
             <div className='flex flex-col items-start'>
             <span className='font-bold'>To</span>
                <div className='text-left'>{transaction.to}</div>
             </div>
             <div className='flex flex-col items-start'>
             <span className='font-bold'>Amount</span>
                <div className='text-left'>{transaction.amount} {transaction.currency}</div>
             </div>
             <div className='flex flex-col items-start'>
             <span className='font-bold'>Description</span>
                <div className='text-sm text-left'>{transaction.description}</div>
             </div>

        </div>

        <div className='text-xs mt-5 text-left'>
           *{transaction.note}
        </div>
    </div>



 ))}



</>
  );
}

export default Activity;







_______________


*/
