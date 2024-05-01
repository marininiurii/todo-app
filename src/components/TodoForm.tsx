import { ChangeEvent, FC, FormEvent, KeyboardEvent, useState } from "react";
import { TextFieldComponent } from "./TextField";
import { SaveButton } from "./SaveButton";

type Event = ChangeEvent<HTMLInputElement>;
type KeyDownEvent = KeyboardEvent<HTMLInputElement>;
type Props = {
  addTask: (input: string) => void;
};

export const TodoForm: FC<Props> = ({ addTask }) => {
  const [input, setInput] = useState<string>("");

  const handleChange = (event: Event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    addTask(input);
    setInput("");
  };
  const handleKeyDown = (event: KeyDownEvent) => {
    if (event.key === "Enter") {
      handleSubmit(event as any);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextFieldComponent
          input={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <SaveButton />
      </form>
    </>
  );
};
