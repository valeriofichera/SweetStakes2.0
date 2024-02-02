
function MainBox() {

  return (

    <div className='grid grid-cols-12  items-center justify-center text-center '>


    <div className='col-start-3 col-span-8 rounded-lg border border-gray-200 bg-white shadow-md p-5'>

    <div className='grid grid-cols-8'>

      <div className='col-start-1 col-span-8 p-5'>
        <div className="text-3xl font-extrabold text-black">TurtleShell Firewall Demo</div>
        <div className="text-slate-500 font-bold text-lg">Learn how TurtleShell can prevent hacks</div>
      </div>

      <div className='p-5 col-start-3 col-span-4 gap-5 justify-center items-center '>

      <a href="/hack" target="_blank" rel="noopener noreferrer">
        <div className="p-3 m-1 bg-black rounded-xl font-lg text-white hover:bg-slate-500">
          Original Hack
        </div>
      </a>

      <a href="/no-hack">
        <div className="p-3 m-1 bg-black rounded-xl font-lg text-white hover:bg-slate-500">
          Firewall-guarded Hack
        </div>
        </a>

      </div>

      </div>

      </div>

      <div className='col-start-4 col-span-6 text-left mt-12'>
        <div className="text-slate-500">
          <div className='font-bold'>About</div>
          <div className="font-base">
              We recreated the Hundred Finance hack of March, to showcase how TurtleShell
              could have been able to prevent $6 million from being stolen.
          </div>
        </div>
      </div>


</div>

  );
}

export default MainBox;