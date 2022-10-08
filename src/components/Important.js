import { HStack, IconButton, Text } from '@chakra-ui/react';
import { VscCheck } from 'react-icons/vsc';
import styles from './Important.module.css';

const Important = ({ todo, setTodo, updateStatus }) => {
  return (
    <div className={styles.important}>
<<<<<<< HEAD
      <Text p="2" fontSize={{ base: '32px', md: '45px', lg: '60px' }}>
        Important
      </Text>
=======
      <h2 className={styles.importantTitle}>Important</h2>
>>>>>>> 9a10ad3c7e76e3d028b8bfa01025755b61e1b99b
      {todo &&
        todo.map(todo => {
          if (todo && todo.status === 'important')
            return (
<<<<<<< HEAD
              <HStack justify="center">
=======
              <HStack justifyContent="center">
>>>>>>> 9a10ad3c7e76e3d028b8bfa01025755b61e1b99b
                <IconButton
                  // onClick={() => complete(todo.id)}
                  icon={<VscCheck />}
                  isRound
                  bg="white"
                  color="gray.900"
                  key={todo.id}
                  onClick={() => updateStatus(todo.id, 'did')}
                />
<<<<<<< HEAD
                <Text
                  key={todo.id}
                  // fontSize="30"
                  color="white"
                  fontSize={{ base: '30px', md: '40px', lg: '56px' }}
                >
=======
                <Text key={todo.id} fontSize="30" color="white">
>>>>>>> 9a10ad3c7e76e3d028b8bfa01025755b61e1b99b
                  {todo.content}
                </Text>
              </HStack>
            );
        })}
    </div>
  );
};

export default Important;
