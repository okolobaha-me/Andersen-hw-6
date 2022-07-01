import React from 'react';
import { TodoList } from './TodoList/TodoList';
import { Center, Container, Heading } from '@chakra-ui/react';
import { AddForm } from './AddForm/AddForm';

const App: React.FC = () => {
  return (
    <Center bg="blue.800">
      <Container color="white" padding="10px" minH={'100vh'}>
        <Heading as={'h1'} size={'lg'} textAlign={'center'} mb={'20px'}>
          Todo app
        </Heading>
        <AddForm />
        <TodoList />
      </Container>
    </Center>
  );
};

export default App;
