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
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Open Popup
      </button>
      {isOpen && <Popup />}
    </div>
  );
}

export default Button;
