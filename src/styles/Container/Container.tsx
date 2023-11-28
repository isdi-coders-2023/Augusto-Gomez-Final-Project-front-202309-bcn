import { PropsWithChildren } from "react";
import ContainerStyled from "./ContainerStyled";

const Container = ({ children }: PropsWithChildren) => (
  <ContainerStyled className="container">{children}</ContainerStyled>
);

export default Container;
