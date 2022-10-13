import { Text, HStack, VStack } from '@chakra-ui/react';

import MyButton from './MyButton';
import { useTheme } from '../context/ThemeContext';

const List = ({ todo, updateStatus }) => {
  const [theme] = useTheme();

  console.log(typeof theme);

  const getDoneColor = theme => {
    switch (theme) {
      case 'pop':
        return '#ff413f';
      case 'pastel':
        return '#faf4b7';
      case 'retro':
        return '#006e7f;';
    }
  };

  const getImportantColor = theme => {
    switch (theme) {
      case 'pop':
        return '#b182ff';
      case 'pastel':
        return '#ecc5fb';
      case 'retro':
        return '#f8cb2e';
    }
  };

  const getKeepColor = theme => {
    switch (theme) {
      case 'pop':
        return '#ffe459';
      case 'pastel':
        return '#cdf0ea';
      case 'retro':
        return '#ee5007';
    }
  };

  return (
    <VStack m={5}>
      {todo &&
        todo.map(todo => {
          if (todo && todo.status === 'todo')
            return (
              <>
                <HStack justifyContent="flex-start" m={0} key={todo.id}>
                  <Text
                    key={todo.id}
                    fontSize={{ base: '16px', md: '30px', lg: '35px' }}
                  >
                    {todo.content}
                  </Text>

                  <MyButton
                    bg={getDoneColor(theme)}
                    onClick={() => updateStatus(todo.id, 'did')}
                  >
                    Done
                  </MyButton>

                  <MyButton
                    bg={getImportantColor(theme)}
                    onClick={() => updateStatus(todo.id, 'important')}
                  >
                    Important
                  </MyButton>

                  <MyButton
                    bg={getKeepColor(theme)}
                    onClick={() => updateStatus(todo.id, 'keep')}
                  >
                    Keep
                  </MyButton>
                </HStack>
              </>
            );
        })}
    </VStack>
  );
};

export default List;
