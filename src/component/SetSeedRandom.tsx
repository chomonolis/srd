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
        <TextField type='number' {...registerMui(register('max', { required: true }))} />
        <TextField type='number' {...registerMui(register('min', { required: true }))} />
        <Button variant='contained' type='submit' color='primary'>
          ランダムシード値
        </Button>
      </form>
    </>
  );
};

export default SetSeedRandom;
