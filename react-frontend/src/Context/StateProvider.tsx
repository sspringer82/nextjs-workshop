import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';

type DarkModeContextType = [boolean, Dispatch<SetStateAction<boolean>>] | null;

export const DarkModeContext = createContext<DarkModeContextType>(null);

type Props = {
  children: ReactNode;
};

export const DarkModeProvider: React.FC<Props> = ({ children }) => {
  const state = useState(false);

  return (
    <div>
      Statevalue: {state[0] ? 'Dark Mode' : 'Light Mode'}
      <DarkModeContext value={state}>{children}</DarkModeContext>
    </div>
  );
};

export function useDarkModeContext() {
  const darkModeContext = useContext(DarkModeContext);
  if (darkModeContext === null) {
    throw new Error(
      'useDarkModeContext must be used within a DarkModeProvider'
    );
  }
  return darkModeContext;
}
