import styles from "./Todo.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { ITodo } from "../../types";
import { FC } from "react";

type Props = {
  todo: ITodo;
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
};

export const Todo: FC<Props> = ({ todo, toggleTask, removeTask }) => {
  const handleTodoCompletion = () => toggleTask(todo.id);
  const handleRemoveTask = () => removeTask(todo.id);
  if (!todo) {
    return null;
  }
  return (
    <div className={styles.item_todo}>
      <div
        className={`${styles.item_text} ${todo.completed ? styles.item_completion : ""}`}
        onClick={handleTodoCompletion}
      >
        <p>{`${todo.id}. ${todo.value}`}</p>
      </div>
      <div className={styles.close_icon}>
        <CloseIcon onClick={handleRemoveTask} />
      </div>
    </div>
  );
};
