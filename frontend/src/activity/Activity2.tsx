import lines from '../assets/lines.svg';
import check from '../assets/check.svg';
import uncheck from '../assets/uncheck.svg';

import transactions from '../transactions/Events';


function Activity() {

  return (
<>
    <div className="col-start-2 col-span-3 text-3xl font-extrabold text-black text-left">
        Live Activity
    </div>

   
    <div className="col-start-10 col-span-2 text-xl text-white bg-black hover:bg-slate-500 text-center p-2 rounded-lg">
        All Transactions
    </div>
    


    <div className='col-start-1 col-span-12 rounded-2xl border border-gray-200 bg-white shadow-xl hover:shadow-2xl hover:shadow-red-900 py-5 mb-24'>

    <div className="grid grid-cols-12 py-5 mb-12">

        <div className='col-start-1 col-span-4 rounded-lg border border-gray-200 bg-white shadow-md'>
            <div className="flex flex-row items-center justify-between border-b border-slate-800/40">
                <div className='flex flex-row items-center'>
                <img src={lines} alt="Attacker Icon" />
                <div className="text-slate-500 text-sm font-semibold">Contract 1</div>
                </div>
                <div className="text-slate-500 text-xs pr-2">0xD3DD40...A6176426</div>

            </div>
            <div className="flex flex-col items-start gap-1 p-2 pl-5">
                <div className='flex flex-row gap-3'>    
                    <img src={check} alt="Attacker Icon" />
                    <div className="text-slate-500 text-xs">Took Flashloan from Aave Contract</div>
                </div>
                <div className='flex flex-row gap-3'>    
                    <img src={check} alt="Attacker Icon" />
                    <div className="text-slate-500 text-xs">Took Flashloan from Aave Contract</div>
                </div>
                <div className='flex flex-row gap-3'>    
                    <img src={uncheck} alt="Attacker Icon" />
                    <div className="text-slate-500 text-xs">did xyz</div>
                </div>
            </div>
        </div>

        <div className='col-start-5 col-span-4 rounded-lg border border-gray-200 bg-white shadow-md '>
            <div className="flex flex-row items-center justify-between border-b border-slate-800/40">
                    <div className='flex flex-row items-center'>
                    <img src={lines} alt="Attacker Icon" />
                    <div className="text-slate-500 text-sm font-semibold">Attacker</div>
                    </div>
                    <div className="text-slate-500 text-xs pr-2">0xD3DD40...A6176426</div>

                </div>
                <div className="flex flex-col items-start gap-1 p-2 pl-5">
                    <div className='flex flex-row gap-3'>    
                        <img src={uncheck} alt="Attacker Icon" />
                        <div className="text-slate-500 text-xs">Did xyz</div>
                    </div>
                    <div className='flex flex-row gap-3'>    
                        <img src={uncheck} alt="Attacker Icon" />
                        <div className="text-slate-500 text-xs">Did xyz</div>
                    </div>
                    <div className='flex flex-row gap-3'>    
                        <img src={uncheck} alt="Attacker Icon" />
                        <div className="text-slate-500 text-xs">did xyz</div>
                    </div>
                </div>
        </div>

        <div className='col-start-9 col-span-4 rounded-lg border border-gray-200 bg-white shadow-md '>
            <div className="flex flex-row items-center justify-between border-b border-slate-800/40">
                    <div className='flex flex-row items-center'>
                    <img src={lines} alt="Attacker Icon" />
                    <div className="text-slate-500 text-sm font-semibold">Attacker</div>
                    </div>
                    <div className="text-slate-500 text-xs pr-2">0xD3DD40...A6176426</div>

                </div>
                <div className="flex flex-col items-start gap-1 p-2 pl-5">
                    <div className='flex flex-row gap-3'>    
                        <img src={check} alt="Attacker Icon" />
                        <div className="text-slate-500 text-xs">Did xyz</div>
                    </div>
                    <div className='flex flex-row gap-3'>    
                        <img src={check} alt="Attacker Icon" />
                        <div className="text-slate-500 text-xs">Did xyz</div>
                    </div>
                    <div className='flex flex-row gap-3'>    
                        <img src={uncheck} alt="Attacker Icon" />
                        <div className="text-slate-500 text-xs">did xyz</div>
                    </div>
                </div>
        </div>
    </div>

</div>
</>
  );
}

export default Activity;