import user from '../assets/user.svg';
import ether from '../assets/ether_icon.svg';

function Victim() {

  return (
<>
    <div className="col-start-2 col-span-3 text-3xl font-extrabold text-black text-left">
        Victim
    </div>

    <div className='col-start-1 col-span-12 rounded-2xl border border-gray-200 bg-white shadow-xl py-5 mb-24'>

    <div className="grid grid-cols-12 py-5 mb-12">

        <div className='col-start-1 col-span-4 rounded-lg border border-gray-200 bg-white shadow-md'>
            <div className="flex flex-row items-center justify-between border-b border-slate-800/40">
                <div className='flex flex-row items-center'>
                <img src={user} alt="Attacker Icon" />
                <div className="text-slate-500 text-sm font-semibold">Attacker</div>
                </div>
                <div className="text-slate-500 text-xs pr-2">0xD3DD40...A6176426</div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3 py-2">
                <img src={ether} alt="Attacker Icon" />
                <div className="text-slate-500 text-sm">100.011</div>
            </div>
        </div>

        <div className='col-start-5 col-span-4 rounded-lg border border-gray-200 bg-white shadow-md '>
            <div className="flex flex-row items-center justify-between border-b border-slate-800/40">
                <div className='flex flex-row items-center'>
                <img src={user} alt="Attacker Icon" />
                <div className="text-slate-500 text-sm font-semibold">ETH Vault</div>
                </div>
                <div className="text-slate-500 text-xs pr-2">0xD3DD40...A6176426</div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3 py-2">
                <img src={ether} alt="Attacker Icon" />
                <div className="text-slate-500 text-sm">50.011</div>
            </div>
        </div>

        <div className='col-start-9 col-span-4 rounded-lg border border-gray-200 bg-white shadow-md '>
            <div className="flex flex-row items-center justify-between border-b border-slate-800/40">
                <div className='flex flex-row items-center'>
                <img src={user} alt="Attacker Icon" />
                <div className="text-slate-500 text-sm font-semibold">hUSDC Vaults</div>
                </div>
                <div className="text-slate-500 text-xs pr-2">0xD3DD40...A6176426</div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3 py-2">
                <img src={ether} alt="Attacker Icon" />
                <div className="text-slate-500 text-sm">50.011</div>
            </div>
        </div>

        <div className='col-start-1 col-span-4 rounded-lg border border-gray-200 bg-white shadow-md mt-6 '>
            <div className="flex flex-row items-center justify-between border-b border-slate-800/40">
                <div className='flex flex-row items-center'>
                <img src={user} alt="Attacker Icon" />
                <div className="text-slate-500 text-sm font-semibold">hUSDC Vaults</div>
                </div>
                <div className="text-slate-500 text-xs pr-2">0xD3DD40...A6176426</div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3 py-2">
                <img src={ether} alt="Attacker Icon" />
                <div className="text-slate-500 text-sm">50.011</div>
            </div>
        </div>
        
    </div>

</div>
</>
  );
}

export default Victim;