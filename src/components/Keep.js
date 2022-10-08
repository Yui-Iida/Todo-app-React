import { HStack, IconButton, Text } from '@chakra-ui/react';
import { VscCheck } from 'react-icons/vsc';
import styles from './Keep.module.css';

const Keep = ({ todo, setTodo, updateStatus }) => {
  return (
    <div className={styles.keep}>
<<<<<<< HEAD
      <Text p="1" fontSize={{ base: '25px', md: '30px', lg: '35px' }}>
        Keep in mind
      </Text>
=======
      <h1 className={styles.keepTitle}>Keep in mind</h1>
>>>>>>> 9a10ad3c7e76e3d028b8bfa01025755b61e1b99b
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
<<<<<<< HEAD
                <Text
                  key={todo.id}
                  fontSize={{ base: '20px', md: '25px', lg: '30px' }}
                >
=======
                <Text key={todo.id} fontSize="20">
>>>>>>> 9a10ad3c7e76e3d028b8bfa01025755b61e1b99b
                  {todo.content}
                </Text>
              </HStack>
            );
        })}
    </div>
  );
};

export default Keep;
