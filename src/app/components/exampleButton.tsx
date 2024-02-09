"use client";
import Button from "@mui/material/Button";

type IExampleButtonProps = {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ExampleButton: React.FC<IExampleButtonProps> = (props) => {
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.onClick(event);
  };

  return (
    <Button variant="contained" color="success" onClick={handleOnClick}>
      {props.label}
    </Button>
  );
};
