import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  type: "submit" | "button";
  actionOnClick?: () => void;
  modifier?: string;
}

const Button = ({
  text,
  type,
  actionOnClick,
  modifier: className,
}: ButtonProps): React.ReactElement => (
  <ButtonStyled
    className={"button" + className ? ` button--${className}` : ""}
    type={type}
    onClick={actionOnClick}
  >
    {text}
  </ButtonStyled>
);

export default Button;
