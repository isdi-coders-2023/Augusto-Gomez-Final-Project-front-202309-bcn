import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  type: "submit" | "button";
  actionOnClick?: () => void;
  modifier?: "button--delete" | "button--details" | "button--form";
  isDisabled?: boolean;
}

const Button = ({
  text,
  type,
  actionOnClick,
  modifier,
  isDisabled,
}: ButtonProps): React.ReactElement => (
  <ButtonStyled
    disabled={isDisabled}
    className={`button ${modifier}`}
    type={type}
    onClick={actionOnClick}
  >
    {text}
  </ButtonStyled>
);

export default Button;
