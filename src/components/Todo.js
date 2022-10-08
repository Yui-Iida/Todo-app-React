import styles from './Todo.module.css';

import NewInput from './NewInput';
import List from './List';

const Todo = ({ todo, setTodo, updateStatus }) => {
  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>Todo</h1>

      <div>
        <NewInput setTodo={setTodo} todo={todo} />
        <List todo={todo} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default Todo;
