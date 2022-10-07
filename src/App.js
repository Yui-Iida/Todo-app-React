import { ChakraProvider } from '@chakra-ui/react';

import { useState } from 'react';
import './App.css';
import Todo from './components/Todo.js';
import Important from './components/Important.js';
import Keep from './components/Keep.js';
import Did from './components/Did.js';

function App() {
  const todoList = [
    // { id: 1, content: 'Check amazon', status: 'todo' },
    // { id: 2, content: 'Call family', status: 'keep' },
    // { id: 3, content: 'Buy ticket', status: 'did' },
    // { id: 4, content: 'Go to bookstore', status: 'important' },
  ];
  console.log(document);

  const [todo, setTodo] = useState(todoList);

  const updateStatus = (id, newStatus) => {
    let allTodo = todo;
    allTodo = allTodo.map(todo => {
      if (todo.id === id) {
        console.log(id);
        todo.status = newStatus;
      }
      return todo;
    });
    setTodo(allTodo);
  };

  return (
    <div className="App">
      <ChakraProvider>
        <Todo todo={todo} setTodo={setTodo} updateStatus={updateStatus} />
        <div className="flex">
          <Important
            todo={todo}
            setTodo={setTodo}
            updateStatus={updateStatus}
          />
          <Keep todo={todo} setTodo={setTodo} updateStatus={updateStatus} />
        </div>
        <Did todo={todo} setTodo={setTodo} updateStatus={updateStatus} />
      </ChakraProvider>
    </div>
  );
}

export default App;
