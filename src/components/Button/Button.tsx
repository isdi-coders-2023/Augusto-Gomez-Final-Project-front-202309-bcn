import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  type: "submit" | "button";
  actionOnClick?: () => void;
  modifier?: "button--delete" | "button--details";
}

const Button = ({
  text,
  type,
  actionOnClick,
  modifier,
}: ButtonProps): React.ReactElement => (
  <ButtonStyled
    className={`button ${modifier}`}
    type={type}
    onClick={actionOnClick}
  >
    {text}
  </ButtonStyled>
);

export default Button;
