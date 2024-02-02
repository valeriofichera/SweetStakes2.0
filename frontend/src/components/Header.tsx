import logo from '../assets/logo.svg';
import { WalletBtn } from './WalletBtn';

function Header() {

  return (

    <div className='grid grid-cols-12 gap-4 justify-center items-center pt-5'>

        <div className='col-start-1 col-span-4'>
          <div className="flex flex-row items-center justify-center gap-5 ">
            <img src={logo} alt="" />
            <div className="flex flex-col">
            <div className="font-extrabold text-4xl text-black">Firewall Demo</div>
            <div className="font-base text-sm text-left text-slate-800">for a Lending & Borrowing Market</div>
            </div>
            </div>
        </div>

        <div className='col-start-5 col-span-1 text-center p-2 hover:shadow-xl hover:bg-slate-700 hover:text-slate-500 font-extrabold text-black rounded-md'>
          <a href="https://turtleshell.xyz" target="_blank" rel="noopener noreferrer">
            <div className="">Website</div>
          </a>
        </div>
     
        <div className='col-start-6 col-span-1 text-center p-2 hover:shadow-xl hover:bg-slate-700 hover:text-slate-500 font-extrabold text-black rounded-md'>
        <a href="https://turtleshell.gitbook.io/introduction/" target="_blank" rel="noopener noreferrer">
            <div className="">Docs</div>
            </a>
        </div>
{/* 
        <div className="col-start-7 col-span-3 p-1 m-1 bg-black rounded-xl text-sm font-bold text-white">
          DEMO: Lending & Borrowing Mock App
        </div> */}

        <div className="col-start-8 col-span-5 p-2 m-5">
          <WalletBtn />
        </div>


    </div>

  );
}

export default Header;