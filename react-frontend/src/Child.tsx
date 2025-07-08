type Props = {
  name: string;
  setName: (name: string) => void;
};

const Child: React.FC<Props> = ({ name, setName }) => {
  function handleChangeName() {
    setName('Roberta');
  }

  return (
    <div>
      <h2>Child works</h2>
      <p>{name}</p>
      <button onClick={handleChangeName}>change name</button>
    </div>
  );
};

export default Child;
