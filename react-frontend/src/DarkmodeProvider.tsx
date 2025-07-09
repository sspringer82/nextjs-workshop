import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';

type DarkmodeContextType = [boolean, Dispatch<SetStateAction<boolean>>];

const DarkmodeContext = createContext<DarkmodeContextType | null>(null);

type Props = {
  children: ReactNode;
};

export const DarkmodeProvider: React.FC<Props> = ({ children }) => {
  const [darkMode, setDarkmode] = useState<boolean>(true);

  return (
    <DarkmodeContext value={[darkMode, setDarkmode]}>
      {children}
    </DarkmodeContext>
  );
};

export function useDarkmodeContext(): DarkmodeContextType {
  const context = useContext(DarkmodeContext);
  if (context === null) {
    throw new Error('Provider vergessen?');
  }
  return context;
}
