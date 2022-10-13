import { HStack, IconButton, Text } from '@chakra-ui/react';
import { VscCheck } from 'react-icons/vsc';
import { useTheme } from '../context/ThemeContext';

const Important = ({ todo, setTodo, updateStatus }) => {
  const [theme] = useTheme();

  return (
<<<<<<< HEAD
    <div className={`importantcontent-${theme}`}>
      <Text p="2" fontSize={{ base: '30px', md: '42px', lg: '55px' }}>
=======
    <div className={styles.important}>
<<<<<<< HEAD
      <Text p="2" fontSize={{ base: '32px', md: '45px', lg: '60px' }}>
>>>>>>> ef9e53d302cb42d2dccf68e0c02d8cd0c5733b0a
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
                  fontSize={{ base: '20px', md: '40px', lg: '56px' }}
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
