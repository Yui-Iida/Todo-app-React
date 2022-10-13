import { HStack, IconButton, Text } from '@chakra-ui/react';
import { VscCheck } from 'react-icons/vsc';
import { useTheme } from '../context/ThemeContext';

const Important = ({ todo, updateStatus }) => {
  const [theme] = useTheme();

  return (
    <div className={`importantcontent-${theme}`}>
      <Text p="2" fontSize={{ base: '30px', md: '42px', lg: '55px' }}>
        Important
      </Text>
      {todo &&
        todo.map(todo => {
          if (todo && todo.status === 'important')
            return (
              <HStack justify="center">
                <IconButton
                  icon={<VscCheck />}
                  isRound
                  bg="white"
                  color="gray.900"
                  key={todo.id}
                  onClick={() => updateStatus(todo.id, 'did')}
                />
                <Text
                  key={todo.id}
                  color="white"
                  fontSize={{ base: '20px', md: '40px', lg: '56px' }}
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
