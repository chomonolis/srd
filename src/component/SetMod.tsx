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

const SetMod = (props: Props) => {
  const { callbackFunc } = props;
  const { register, handleSubmit } = useForm<ModInputType>();
  const onSubmit: SubmitHandler<ModInputType> = (data) => {
    callbackFunc(data.mod);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          sx={{ m: 1 }}
          type='number'
          label='Mod'
          InputLabelProps={{
            shrink: true,
          }}
          {...registerMui(register('mod', { required: true }))}
        />
        <Button sx={{ m: 1 }} variant='contained' type='submit' color='primary'>
          mod付き乱数作成
        </Button>
      </form>
    </>
  );
};

export default SetMod;
