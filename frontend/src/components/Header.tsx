import logo from '../assets/logo.svg';
import { WalletBtn } from './WalletBtn';
import Balance from './functional/Balance';
import UserLevels from './functional/UserLevels';

function Header() {

  return (

    <div className='grid grid-cols-12 gap-4 justify-center items-center pt-5'>

        <div className='col-start-1 col-span-4'>
          <div className="flex flex-row items-center justify-center gap-5 ">
            <img className='h-12' src={logo} alt="" />
            <div className="flex flex-col">
            <div className="font-extrabold text-4xl text-black">SweetStakes 2.0</div>
            <div className="font-base text-sm text-left pl-2 text-slate-800">on-chain gambling powered by LightLink</div>
            </div>
            </div>
        </div>

        
     
        <div className='col-start-7 col-span-1 text-center p-2 font-extrabold text-black rounded-md'>
            <div className="flex flex-row gap-2">Level <UserLevels/></div>
        </div>
        <div className='col-start-8 col-span-1 text-center p-2 font-extrabold text-black rounded-md'>
            <div className="text-slate-400 font-light text-5xl">|</div>
        </div>
        <div className='col-start-9 col-span-1 text-center p-2 font-extrabold text-black rounded-md'>
            <div className="flex flex-row gap-2"><Balance/></div>
        </div>
        <div className='col-start-10 col-span-1 text-center p-2  font-extrabold text-black rounded-md'>
            <div className="text-slate-400 font-light text-5xl">|</div>
        </div>
        <div className="col-start-11 col-span-5 p-2 m-5">
          <WalletBtn />
        </div>
    </div>

  );
}

export default Header;