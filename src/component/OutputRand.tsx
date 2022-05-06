import { useState } from 'react';
import XORShift from '../class/XORShift';

const OutputRand = () => {
  const [xors] = useState<XORShift>(new XORShift(10));
  const [printNumber, setPrintNumber] = useState<number>(-1);
  const onClick = () => {
    setPrintNumber(xors.modNext(100));
  };
  return (
    <>
      <button onClick={onClick}>next</button>
      {printNumber}
    </>
  );
};

export default OutputRand;
