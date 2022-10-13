import { Text, HStack, VStack } from '@chakra-ui/react';

import { useTheme } from '../context/ThemeContext';

const Did = ({ todo, setTodo }) => {
  const deleteTodo = id => {
    const newTodos = todo.filter(todo => {
      return todo.id !== id;
    });

    setTodo(newTodos);
  };

  const [theme] = useTheme();

  return (
    <div className={`didcontent-${theme}`}>
      <HStack>
        <h1 className="did-title">Did</h1>

        <VStack>
          {todo &&
            todo.map(todo => {
              if (todo && todo.status === 'did')
                return (
                  <HStack justifyContent="start">
                    <Text
                      key={todo.id}
                      fontSize={{ base: '15px', md: '30px', lg: '30px' }}
                    >
                      {todo.content}
                    </Text>
                  </HStack>
                );
            })}
        </VStack>
      </HStack>
    </div>
  );
};

export default Did;
