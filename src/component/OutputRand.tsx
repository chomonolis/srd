import { useState } from 'react';

import XORShift from '../class/XORShift';
import SeedInput from './SeedInput';
import OutputModRand from './setMod';

const OutputRand = () => {
  const [xors, setXors] = useState<XORShift>(new XORShift(10));
  const [printNumber, setPrintNumber] = useState<number>(-1);
  const onClick = () => {
    setPrintNumber(xors.modNext(100));
  };

  const modRandCallback = (mod: number) => {
    setPrintNumber(xors.modNext(mod));
  };

  return (
    <>
      <button onClick={onClick}>next</button>
      {printNumber}
      <SeedInput setXors={setXors} />
      <OutputModRand callbackFunc={modRandCallback} />
    </>
  );
};

export default OutputRand;