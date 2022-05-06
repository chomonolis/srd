import { Box } from '@mui/material';

import XORShift from '../class/XORShift';

type Props = {
  xors: XORShift;
};

const XorsInfo = (props: Props) => {
  const { xors } = props;
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ m: 1 }}>Seed: {xors.getSeed()}</Box>
        <Box sx={{ m: 1 }}>Count: {xors.getCount()}</Box>
      </Box>
    </>
  );
};

export default XorsInfo;
