import './App.css';
import { DarkmodeProvider } from './DarkmodeProvider';
import List from './List';
import SwitchDarkmode from './SwitchDarkmode';

const App: React.FC = () => {
  return (
    <div>
      <DarkmodeProvider>
        <SwitchDarkmode />
        <List />
      </DarkmodeProvider>
    </div>
  );
};

export default App;
