"use client";
import { ReactNode } from "react";
import Container from "@mui/material/Container";

type ILayoutContainerProps = {
  [x: string]: ReactNode;
};

export const LayoutContainer: React.FC<ILayoutContainerProps> = (props) => {
  return <Container>{props.children}</Container>;
};
