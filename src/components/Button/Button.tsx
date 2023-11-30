import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  type: "submit" | "button";
  actionOnClick?: () => void;
  className: string;
}

const Button = ({
  text,
  type,
  actionOnClick,
  className,
}: ButtonProps): React.ReactElement => (
  <ButtonStyled
    className={`button ${className}`}
    type={type}
    onClick={actionOnClick}
  >
    {text}
  </ButtonStyled>
);

export default Button;
