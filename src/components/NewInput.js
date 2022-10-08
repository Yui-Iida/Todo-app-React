import { HStack, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';

const NewInput = ({ todo, setTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState('');

  const addTodo = e => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100),
      content: enteredTodo,
      status: 'todo',
    };

    const createTodo = todo => {
      setTodo([...todo, newTodo]);
      console.log(todo);
    };
    createTodo(todo, newTodo);

    setEnteredTodo('');
  };

  return (
    <form onSubmit={addTodo}>
      <HStack spacing={5} justifyContent="center">
        <Input
          size="md"
          width={{ base: 'xs', md: 'sm', lg: 'md' }}
          borderRadius="10px"
          background="white"
          border="none"
          placeholder="What's new task?"
          _placeholder={{ opacity: 1, color: 'gray.200' }}
          key={enteredTodo.id}
          value={enteredTodo}
          onChange={e => setEnteredTodo(e.target.value)}
        />
        <Button size="md" bg="#33e706" borderRadius="12px" type="submit">
          Add
        </Button>
      </HStack>
    </form>
  );
};

export default NewInput;
