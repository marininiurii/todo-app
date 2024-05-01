import styles from "./App.module.css";
import { FC, useState } from "react";
import { Todo } from "./components/Todo/Todo";
import { TodoForm } from "./components/TodoForm";
import { ITodo } from "./types";

export const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTask = (input: string): void => {
    if (input) {
      const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      const newTodos: ITodo = { id: newId, value: input, completed: false };
      setTodos([...todos, newTodos]);
    }
  };

  const handleRemoveTask = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoCompletion = (id: number): void => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const renderTasks = () => {
    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTask={toggleTodoCompletion}
          removeTask={handleRemoveTask}
        />
      );
    });
  };

  return (
    <div className={styles.app}>
      <header>
        <h1>Список задач: {todos.length}</h1>
      </header>
      <TodoForm addTask={addTask} />
      <div>{renderTasks()}</div>
    </div>
  );
};
