import { useDarkModeContext } from './StateProvider';

const Child: React.FC = () => {
  const [darkMode, setDarkMode] = useDarkModeContext();

  return (
    <div>
      Child Context State value im Child:{' '}
      {darkMode ? 'Dark Mode' : 'Light Mode'}
      <button onClick={() => setDarkMode((prev) => !prev)}>change mode</button>
    </div>
  );
};

export default Child;
