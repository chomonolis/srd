import { Box } from '@mui/material';

export type Result = {
  seed: number;
  count: number;
  mod: number;
  res: number;
};

type Props = {
  result: Result;
};

const OutputResult = (props: Props) => {
  const { result } = props;
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ m: 1 }}>seed: {result.seed}</Box>
        <Box sx={{ m: 1 }}>count: {result.count}</Box>
        <Box sx={{ m: 1 }}>mod: {result.mod}</Box>
        <Box sx={{ m: 1 }}>res: {result.res}</Box>
      </Box>
    </>
  );
};

export default OutputResult;
