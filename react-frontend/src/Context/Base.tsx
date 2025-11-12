import Parent from './Parent';
import { DarkModeProvider } from './StateProvider';

const Base: React.FC = () => {
  return (
    <div>
      Base Context
      <DarkModeProvider>
        <Parent />
      </DarkModeProvider>
    </div>
  );
};

export default Base;
