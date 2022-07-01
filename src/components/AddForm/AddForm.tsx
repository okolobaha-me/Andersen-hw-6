import { useAddTodoMutation } from '../../redux/apiSlice';

import { Box, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';

export const AddForm = () => {
  const [addTodo, { isLoading }] = useAddTodoMutation();
  const [value, setValue] = useState('');

  const handleAddTodo = () => {
    addTodo(value);
    setValue('');
  };

  const handleChangeValue = (e: any) => {
    setValue(e.currentTarget.value);
  };

  return (
    <Box display={'flex'} gap={'15px'} mb={'20px'}>
      <Input value={value} onChange={handleChangeValue} />{' '}
      <Button
        colorScheme={'green'}
        onClick={handleAddTodo}
        disabled={isLoading}
      >
        {isLoading ? 'Adding...' : 'Add'}
      </Button>
    </Box>
  );
};
