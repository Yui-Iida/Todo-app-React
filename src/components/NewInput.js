import { HStack, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const NewInput = ({ todo, setTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState('');
  const [theme] = useTheme();

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

  const getButtonColor = theme => {
    switch (theme) {
      case 'pop':
        return '#33e706';
      case 'pastel':
        return '#F675A8';
      case 'retro':
        return '#EEE6CE;';
    }
  };

  return (
    <form onSubmit={addTodo}>
      <HStack spacing={5} justifyContent="center">
        <Input
          size="md"
<<<<<<< HEAD
          width={{ base: '170px', md: '300px', lg: '400px' }}
=======
<<<<<<< HEAD
          width={{ base: 'xs', md: 'sm', lg: 'md' }}
=======
          width="sm"
>>>>>>> 9a10ad3c7e76e3d028b8bfa01025755b61e1b99b
>>>>>>> ef9e53d302cb42d2dccf68e0c02d8cd0c5733b0a
          borderRadius="10px"
          background="white"
          border="none"
          placeholder="What's new task?"
          _placeholder={{ opacity: 1, color: 'gray.200' }}
          key={enteredTodo.id}
          value={enteredTodo}
          onChange={e => setEnteredTodo(e.target.value)}
        />
        <Button
          size="md"
          bg={getButtonColor(theme)}
          borderRadius="12px"
          type="submit"
        >
          Add
        </Button>
      </HStack>
    </form>
  );
};

export default NewInput;
