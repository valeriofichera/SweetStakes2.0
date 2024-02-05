import React, { useState } from 'react';
import Popup from './Popup.tsx';
function Button() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button
        className="bg-[#956bd0] hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Enter Jackpot
      </button>
      {isOpen && <Popup />}
    </div>
  );
}

export default Button;