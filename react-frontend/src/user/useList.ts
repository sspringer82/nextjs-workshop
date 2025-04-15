import { useState, useEffect } from 'react';
import { useUserContext } from './UserProvider';
import { User } from './User';

export default function useList<T>(getter: () => Promise<T[]>): T[] {
  // const [users, setUsers] = useState<T[]>([]);

  const [users, setUsers] = useUserContext();

  useEffect(() => {
    getter().then((data) => setUsers(data as User[]));
  }, []);

  return users as unknown as T[];
}
