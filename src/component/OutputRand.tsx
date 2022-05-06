import { useState } from 'react';

import XORShift from '../class/XORShift';
import SeedInput from './SeedInput';
import SetMod from './SetMod';
import XorsInfo from './XorsInfo';
import OutputResult, { Result } from './OutputResult';

const OutputRand = () => {
  const [xors, setXors] = useState<XORShift>(new XORShift(10));
  const [results, setResults] = useState<Result[]>([]);

  const modRandCallback = (mod: number) => {
    const res = xors.modNext(mod);
    const r: Result = {
      seed: xors.getSeed(),
      count: xors.getCount(),
      mod: mod,
      res: res,
    };
    setResults([r, ...results]);
  };

  return (
    <>
      <XorsInfo xors={xors} />
      <SeedInput setXors={setXors} />
      <SetMod callbackFunc={modRandCallback} />
      {results.map((result, idx) => {
        return <OutputResult key={idx} result={result} />;
      })}
    </>
  );
};

export default OutputRand;
