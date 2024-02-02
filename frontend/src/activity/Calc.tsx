import React, { useEffect, useState } from 'react';
import transactions from '../transactions/Events';
import tokens from '../transactions/Values';

interface StyleSequence {
  modifierMasterETH: number;
  modifierMasterWBTC: number;
  modifierMasterHWBTC: number;

  modifierDrainerETH: number;
  modifierDrainerWBTC: number;
  modifierDrainerHWBTC: number;

number: number;
  delay: number;
}

function Calc() {
  const [sequenceIndex, setSequenceIndex] = useState<number>(0);
  const [MasterETH, setMasterETH] = useState<number>(tokens.ETH.amountMaster);
  const [MasterWBTC, setMasterWBTC] = useState<number>(tokens.wBTC.amountMaster);
  const [MasterHWBTC, setMasterHWBTC] = useState<number>(tokens.hwBTC.amountMaster);

  const [DrainerETH, setDrainerETH] = useState<number>(tokens.ETH.amountDrainer);
  const [DrainerWBTC, setDrainerWBTC] = useState<number>(tokens.wBTC.amountDrainer);
  const [DrainerHWBTC, setDrainerHWBTC] = useState<number>(tokens.hwBTC.amountDrainer);

  const [HWBTCPoolETH, setHWBTCPoolETH] = useState<number>(tokens.ETH.amountHWBTCPool);
  const [HWBTCPoolWBTC, setHWBTCPoolWBTC] = useState<number>(tokens.wBTC.amountHWBTCPool);
  const [HWBTCPoolHWBTC, setHWBTCPoolHWBTC] = useState<number>(tokens.hwBTC.amountHWBTCPool);

  const [WBTCPoolETH, setWBTCPoolETH] = useState<number>(tokens.ETH.amountWBTCPool);
  const [WBTCPoolWBTC, setWBTCPoolWBTC] = useState<number>(tokens.wBTC.amountWBTCPool);
  const [WBTCPoolHWBTC, setWBTCPoolHWBTC] = useState<number>(tokens.hwBTC.amountWBTCPool);

  const [ETHPoolETH, setETHPoolETH] = useState<number>(tokens.ETH.amountETHPool);
  const [PoolWBTC, setETHPoolWBTC] = useState<number>(tokens.wBTC.amountETHPool);
  const [PoolHWBTC, setETHPoolHWBTC] = useState<number>(tokens.hwBTC.amountETHPool);

  const sequence: StyleSequence[] = [
    { modifierMasterETH: 0,
      modifierMasterWBTC: 500,
      modifierMasterHWBTC: 0,

      modifierDrainerETH: 0,
      modifierDrainerWBTC: 0,
      modifierDrainerHWBTC: 0,


      delay: 5000 },

      { modifierMasterETH: 0,
        modifierMasterWBTC: -500,
        modifierMasterHWBTC: 0,

        modifierDrainerETH: 0,
        modifierDrainerWBTC: 500,
        modifierDrainerHWBTC: 0,
  
        delay: 5000 },
        
        { modifierMasterETH: 0,
            modifierMasterWBTC: 0,
            modifierMasterHWBTC: 0,
    
            modifierDrainerETH: 0,
            modifierDrainerWBTC: -4,
            modifierDrainerHWBTC: 0,

            delay: 5000 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setSequenceIndex((prevIndex) => prevIndex + 1);
    }, sequence[sequenceIndex].delay);

    if (sequenceIndex === sequence.length - 1) {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [sequenceIndex]);

  useEffect(() => {
    if (sequenceIndex >= sequence.length) {
      return; // Stop updating the amount after one full sequence
    }

    setMasterETH((prevAmount) => prevAmount + sequence[sequenceIndex].modifierMasterETH);
    setMasterWBTC((prevAmount) => prevAmount + sequence[sequenceIndex].modifierMasterWBTC);
    setMasterHWBTC((prevAmount) => prevAmount + sequence[sequenceIndex].modifierMasterHWBTC);

    setDrainerETH((prevAmount) => prevAmount + sequence[sequenceIndex].modifierDrainerETH);
    setDrainerWBTC((prevAmount) => prevAmount + sequence[sequenceIndex].modifierDrainerWBTC);
    setDrainerHWBTC((prevAmount) => prevAmount + sequence[sequenceIndex].modifierDrainerHWBTC);
  }, [sequenceIndex]);

  return (
<>
      Master wbtc {MasterWBTC}
      <br />
      Master hwbtc {MasterHWBTC}
        <br />
      Master ETH {MasterETH}
        <br />
        Drainer wbtc {DrainerWBTC}
        <br />
        Drainer hwbtc {DrainerHWBTC}
        <br />
        Drainer ETH {DrainerETH}
        <br />
        HWBTCPool wbtc {HWBTCPoolWBTC}
        <br />
        HWBTCPool hwbtc {HWBTCPoolHWBTC}
        <br />
        HWBTCPool ETH {HWBTCPoolETH}
        <br />
        WBTCPool wbtc {WBTCPoolWBTC}
        <br />
        WBTCPool hwbtc {WBTCPoolHWBTC}


      </>
  );
}

export default Calc;

// import React, { useEffect, useState } from 'react';
// import tokens from '../transactions/Values';

// interface StyleSequence {
//   number: number;
//   delay: number;

// }

// function Calc() {
//   const [sequenceIndex, setSequenceIndex] = useState<number>(0);

//    const [MasterETH, setMasterETH] = useState<number>(tokens.ETH.amount);
// //   const [MasterWBTC, setMasterWBTC] = useState<number>(tokens.wBTC.amount);
// //   const [MasterHWBTC, setMasterHWBTC] = useState<number>(tokens.hwBTC.amount);


//   const delay = 5000;


//   const sequenceMasterETH: StyleSequence[] = [
//     { number: 10, delay},
//     { number: 20, delay},
//     { number: 10, delay},
//   ];

// //   const sequenceMasterWBTC: StyleSequence[] = [
// //     { number: 10, delay},
// //     { number: 20, delay},
// //     { number: 10, delay},
// //   ];

// //   const sequenceMasterHWBTC: StyleSequence[] = [
// //     { number: 10, delay},
// //     { number: 20, delay},
// //     { number: 10, delay},
// //   ];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setSequenceIndex((prevIndex) => prevIndex + 1);
//     }, sequenceMasterETH[sequenceIndex].delay);

//     if (sequenceIndex === e.length - 1) {
//       clearTimeout(timer);
//     }

//     return () => clearTimeout(timer);
//   }, [sequenceIndex]);

//   useEffect(() => {
//     if (sequenceIndex >= sequenceMasterETH.length) {
//       return; // Stop updating the amount after one full sequence
//     }

//     setMasterETH((prevAmount) => prevAmount + sequenceMasterETH[sequenceIndex].number);
//   }, [sequenceIndex]);

//   return (
// <>
//       {MasterETH}
//       </>
//   );
// }

// export default Calc;
