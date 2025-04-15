import { createContext, ReactNode, useContext, useState } from 'react';
import { User } from './User';

type UserContextType = [User[], React.Dispatch<React.SetStateAction<User[]>>];

const UserContext = createContext<UserContextType | null>(null);

type Props = {
  children: ReactNode;
};

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User[]>([]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext(): UserContextType {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error('DU MUSST DEN PROVIDER EINBINDEN!!!');
  }
  return context;
}
