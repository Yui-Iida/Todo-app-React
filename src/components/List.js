import { Text, HStack, VStack } from '@chakra-ui/react';

import MyButton from './MyButton';
import styles from './List.module.css';

const List = ({ todo, updateStatus }) => {
  return (
    <div className={styles.listbox}>
      <VStack>
        {todo &&
          todo.map(todo => {
            if (todo && todo.status === 'todo')
              return (
                <>
                  <HStack justifyContent="flex-start" m={0} key={todo.id}>
                    <Text key={todo.id} fontSize="30">
                      {todo.content}
                    </Text>

                    <MyButton
                      bg="#ff413f"
                      onClick={() => updateStatus(todo.id, 'did')}
                    >
                      Done
                    </MyButton>

                    <MyButton
                      bg="#b182ff"
                      onClick={() => updateStatus(todo.id, 'important')}
                    >
                      Important
                    </MyButton>

                    <MyButton
                      bg="#ffe459"
                      onClick={() => updateStatus(todo.id, 'keep')}
                    >
                      Keep
                    </MyButton>
                  </HStack>
                </>
              );
          })}
      </VStack>
    </div>
  );
};

export default List;
