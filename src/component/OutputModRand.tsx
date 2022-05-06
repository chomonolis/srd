/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, TextField } from '@mui/material';

import registerMui from '../utils/registerMui';

type Props = {
  callbackFunc: (mod: number) => void;
};

type ModInputType = {
  mod: number;
};

const OutputModRand = (props: Props) => {
  const { callbackFunc } = props;
  const { register, handleSubmit } = useForm<ModInputType>();
  const onSubmit: SubmitHandler<ModInputType> = (data) => {
    console.log(data.mod);
    callbackFunc(data.mod);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField type='number' {...registerMui(register('mod', { required: true }))} />
        <Button variant='contained' type='submit' color='primary'>
          mod付き乱数作成
        </Button>
      </form>
    </>
  );
};

export default OutputModRand;
