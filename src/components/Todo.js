import NewInput from './NewInput';
import List from './List';
import { useTheme } from '../context/ThemeContext';

const Todo = ({ todo, setTodo, updateStatus }) => {
  const [theme] = useTheme();
  console.log(theme);

  return (
    <div className={`content-${theme}`}>
      {/* <div className={styles.todo}> */}
      {/* <h1 className={styles.title}>Todo</h1> */}
      <div className="todo">
        <h1 className="title">Todo</h1>

        <div>
          <NewInput setTodo={setTodo} todo={todo} />
          <List todo={todo} updateStatus={updateStatus} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
