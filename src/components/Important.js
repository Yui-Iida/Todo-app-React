import { HStack, IconButton, Text } from '@chakra-ui/react';
import { VscCheck } from 'react-icons/vsc';
import styles from './Important.module.css';

const Important = ({ todo, setTodo, updateStatus }) => {
  return (
    <div className={styles.important}>
      <h2 className={styles.importantTitle}>Important</h2>
      {todo &&
        todo.map(todo => {
          if (todo && todo.status === 'important')
            return (
              <HStack justifyContent="center">
                <IconButton
                  // onClick={() => complete(todo.id)}
                  icon={<VscCheck />}
                  isRound
                  bg="white"
                  color="gray.900"
                  key={todo.id}
                  onClick={() => updateStatus(todo.id, 'did')}
                />
                <Text key={todo.id} fontSize="30" color="white">
                  {todo.content}
                </Text>
              </HStack>
            );
        })}
    </div>
  );
};

export default Important;
