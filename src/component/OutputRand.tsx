import { useState } from 'react';
import { Box } from '@mui/material';

import XORShift from '../class/XORShift';
import SeedInput from './SeedInput';
import SetMod from './SetMod';
import XorsInfo from './XorsInfo';
import OutputResult, { Result } from './OutputResult';
import SetSeedRandom from './SetSeedRandom';

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
      <Box sx={{ m: 1 }}>
        <XorsInfo xors={xors} />
      </Box>
      <Box sx={{ m: 1 }}>
        <SeedInput setXors={setXors} />
      </Box>
      <Box sx={{ m: 1 }}>
        <SetSeedRandom setXors={setXors} />
      </Box>
      <Box sx={{ m: 1 }}>
        <SetMod callbackFunc={modRandCallback} />
      </Box>

      {results.map((result, idx) => {
        return <OutputResult key={idx} result={result} />;
      })}
    </>
  );
};

export default OutputRand;
