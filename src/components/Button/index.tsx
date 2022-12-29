interface ButtonProps {
  label?: string;
  onClick?: () => {};
  disabled?: boolean;
}

const Button = ({ label = "", onClick, disabled = false }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
