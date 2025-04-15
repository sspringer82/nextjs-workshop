import { useState, useEffect } from 'react';

export default function useList<T>(getter: () => Promise<T[]>): T[] {
  const [users, setUsers] = useState<T[]>([]);

  useEffect(() => {
    getter().then((data) => setUsers(data));
  }, []);

  return users;
}
