interface ButtonProps {
  text: string;
  type: "submit" | "button";
  actionOnClick: () => void;
}

const Button = ({
  text,
  type,
  actionOnClick,
}: ButtonProps): React.ReactElement => (
  <button className="button" type={type} onClick={actionOnClick}>
    {text}
  </button>
);

export default Button;
