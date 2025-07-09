import { useDarkmodeContext } from './DarkmodeProvider';

const SwitchDarkmode: React.FC = () => {
  const [, setDarkmode] = useDarkmodeContext();

  return (
    <button onClick={() => setDarkmode((prevMode) => !prevMode)}>switch</button>
  );
};

export default SwitchDarkmode;
