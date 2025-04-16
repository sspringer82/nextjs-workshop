'use client';

import { deleteUser } from '@/app/actions/user';

type Props = {
  id: string;
};

const DeleteButton: React.FC<Props> = ({ id }) => {
  return <button onClick={() => deleteUser(id)}>löschen</button>;
};

export default DeleteButton;
