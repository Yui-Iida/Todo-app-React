import { HStack, IconButton, Text } from '@chakra-ui/react';
import { VscCheck } from 'react-icons/vsc';
import styles from './Important.module.css';

const Important = ({ todo, setTodo, updateStatus }) => {
  return (
    <div className={styles.important}>
      <Text p="2" fontSize={{ base: '32px', md: '45px', lg: '60px' }}>
        Important
      </Text>
      {todo &&
        todo.map(todo => {
          if (todo && todo.status === 'important')
            return (
              <HStack justify="center">
                <IconButton
                  // onClick={() => complete(todo.id)}
                  icon={<VscCheck />}
                  isRound
                  bg="white"
                  color="gray.900"
                  key={todo.id}
                  onClick={() => updateStatus(todo.id, 'did')}
                />
                <Text
                  key={todo.id}
                  // fontSize="30"
                  color="white"
                  fontSize={{ base: '30px', md: '40px', lg: '56px' }}
                >
                  {todo.content}
                </Text>
              </HStack>
            );
        })}
    </div>
  );
};

export default Important;