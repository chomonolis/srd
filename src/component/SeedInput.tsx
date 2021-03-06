/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, TextField } from '@mui/material';

import registerMui from '../utils/registerMui';
import XORShift from '../class/XORShift';

type SeedInputType = {
  seed: number;
};

type Props = {
  setXors: React.Dispatch<React.SetStateAction<XORShift>>;
};

const SeedInput = (props: Props) => {
  const { setXors } = props;
  const { register, handleSubmit } = useForm<SeedInputType>();
  const onSubmit: SubmitHandler<SeedInputType> = (data) => {
    setXors(new XORShift(data.seed));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          sx={{ m: 1 }}
          type='number'
          label='シード値'
          InputLabelProps={{
            shrink: true,
          }}
          {...registerMui(register('seed', { required: true }))}
        />
        <Button sx={{ m: 1 }} variant='contained' type='submit' color='primary'>
          シード値変更
        </Button>
      </form>
    </>
  );
};

export default SeedInput;
