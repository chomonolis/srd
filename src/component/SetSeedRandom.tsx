/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, TextField } from '@mui/material';

import registerMui from '../utils/registerMui';
import XORShift from '../class/XORShift';

type RangeInputType = {
  min: string;
  max: string;
};

type Props = {
  setXors: React.Dispatch<React.SetStateAction<XORShift>>;
};

const SetSeedRandom = (props: Props) => {
  const { setXors } = props;
  const { register, handleSubmit } = useForm<RangeInputType>();

  const onSubmit: SubmitHandler<RangeInputType> = (data) => {
    const p = Number(data.max) - Number(data.min);
    if (p > 0) {
      const q = Math.floor(Math.random() * p);
      setXors(new XORShift(q + Number(data.min)));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          sx={{ m: 1 }}
          type='number'
          label='最小値'
          InputLabelProps={{
            shrink: true,
          }}
          {...registerMui(register('min', { required: true }))}
        />
        <TextField
          sx={{ m: 1 }}
          type='number'
          label='最大値'
          InputLabelProps={{
            shrink: true,
          }}
          {...registerMui(register('max', { required: true }))}
        />
        <Button sx={{ m: 1 }} variant='contained' type='submit' color='primary'>
          ランダムシード値
        </Button>
      </form>
    </>
  );
};

export default SetSeedRandom;
