import { TextField } from "@mui/material";
import { FC } from "react";

type Props = {
  input: string;
  onChange: (event: any) => void;
  onKeyDown: (event: any) => void;
};

export const TextFieldComponent: FC<Props> = ({ input, onChange, onKeyDown }) => {
  const styles = {
    width: 300,
    margin: "0 15px 15px 15px",
  };
  return (
    <TextField
      sx={styles}
      id="outlined-basic"
      label="Введите текст..."
      variant="outlined"
      value={input}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
