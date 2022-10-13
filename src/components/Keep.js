import { HStack, IconButton, Text } from '@chakra-ui/react';
import { VscCheck } from 'react-icons/vsc';
import { useTheme } from '../context/ThemeContext';

const Keep = ({ todo, setTodo, updateStatus }) => {
  const [theme] = useTheme();

  return (
<<<<<<< HEAD
    <div className={`keepcontent-${theme}`}>
      <Text p="1" fontSize={{ base: '20px', md: '30px', lg: '35px' }}>
=======
    <div className={styles.keep}>
<<<<<<< HEAD
      <Text p="1" fontSize={{ base: '25px', md: '30px', lg: '35px' }}>
>>>>>>> ef9e53d302cb42d2dccf68e0c02d8cd0c5733b0a
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
                  fontSize={{ base: '15px', md: '25px', lg: '30px' }}
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
