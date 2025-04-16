type Props = {
  onClick: () => void;
};

const Button: React.FC<Props> = ({ onClick }) => {
  return (
    <>
      <button data-testid="button" onClick={onClick}>
        OK
      </button>
    </>
  );
};

export default Button;
