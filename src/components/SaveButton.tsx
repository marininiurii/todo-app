import { Button } from "@mui/material";
import { FC } from "react";

export const SaveButton: FC = () => {
  const styles = {
    width: 155,
    height: 54,
    background: "#F2F9FE",
    color: "#2196F3",
  };
  return (
    <Button type="submit" sx={styles} variant="contained">
      Сохранить
    </Button>
  );
};
