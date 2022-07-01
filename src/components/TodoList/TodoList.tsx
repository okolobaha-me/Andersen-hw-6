import React from 'react';
import { useGetTodosQuery } from '../../redux/apiSlice';
import { Center, List } from '@chakra-ui/react';
import { TodoItem } from './TodoItem';
import { BeatLoader } from 'react-spinners';

interface ITodo {
  id: string;
  isCompleted: boolean;
  isFavorite: boolean;
  text: string;
}

export const TodoList: React.FC = () => {
  const { data: todos = [], isLoading } = useGetTodosQuery('');

  return (
    <>
      {isLoading && (
        <Center minH={'100vh'}>
          <BeatLoader size={30} color={'white'} />
        </Center>
      )}
      <List spacing={3}>
        {todos.map((todo: ITodo) => (
          <TodoItem
            id={todo.id}
            key={todo.id}
            isCompleted={todo.isCompleted}
            isFavorite={todo.isFavorite}
            text={todo.text}
          />
        ))}
      </List>
    </>
  );
};
