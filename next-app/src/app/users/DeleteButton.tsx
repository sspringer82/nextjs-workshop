'use client';

import { deleteUser } from '@/functions/user.function';

type Props = {
  id: string;
};

const DeleteButton: React.FC<Props> = ({ id }) => {
  function handleDelete() {
    deleteUser(id);
  }

  return (
    <button
      className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
