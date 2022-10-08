import { HStack, IconButton, Text } from '@chakra-ui/react';
import { VscCheck } from 'react-icons/vsc';
import styles from './Keep.module.css';

const Keep = ({ todo, setTodo, updateStatus }) => {
  return (
    <div className={styles.keep}>
      <Text p="1" fontSize={{ base: '25px', md: '30px', lg: '35px' }}>
        Keep in mind
      </Text>
      {todo &&
        todo.map(todo => {
          if (todo && todo.status === 'keep')
            return (
              <HStack justifyContent="center">
                <IconButton
                  // onClick={() => complete(todo.id)}
                  icon={<VscCheck />}
                  isRound
                  size="sm"
                  bg="white"
                  color="gray.900"
                  key={todo.id}
                  onClick={() => updateStatus(todo.id, 'did')}
                />
                <Text
                  key={todo.id}
                  fontSize={{ base: '20px', md: '25px', lg: '30px' }}
                >
                  {todo.content}
                </Text>
              </HStack>
            );
        })}
    </div>
  );
};

export default Keep;