import Overview from './Overview';
import Assets from './Assets';
import { WalletBtn } from '../WalletBtn';

function MainHack() {

  return (
<>

    <div className='col-start-1 col-span-12 rounded-2xl border border-gray-200 bg-white shadow-xl p-5 mt-12'>
                <Overview />
    </div>

    <div className='col-start-1 col-span-12 rounded-2xl border border-gray-200 bg-white shadow-xl p-5 mt-12'>
                <Assets/>
    </div>
</>
  );
}

export default MainHack;