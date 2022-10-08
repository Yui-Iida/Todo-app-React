import { Text, HStack, IconButton, VStack } from '@chakra-ui/react';
import { VscClose } from 'react-icons/vsc';
import styles from './Did.module.css';

const Did = ({ todo, setTodo }) => {
  const deleteTodo = id => {
    const newTodos = todo.filter(todo => {
      return todo.id !== id;
    });

    setTodo(newTodos);
  };

  return (
    <div className={styles.did}>
      <HStack>
        <h1 className={styles.didTitle}>Did</h1>

        <VStack>
          {todo &&
            todo.map(todo => {
              if (todo && todo.status === 'did')
                return (
                  <HStack justifyContent="center">
                    <Text key={todo.id} fontSize="lg">
                      {todo.content}
                    </Text>
                    {/* <IconButton
                      // onClick={() => complete(todo.id)}
                      icon={<VscClose />}
                      size="20px"
                      isRound
                      bg="#ff413f"
                      // opacity="20"
                      color="gray.900"
                      key={todo.id}
                      onClick={deleteTodo}
                    /> */}
                  </HStack>
                );
            })}
        </VStack>
      </HStack>
    </div>
  );
};

export default Did;
