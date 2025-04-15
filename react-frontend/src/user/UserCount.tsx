import { useUserContext } from './UserProvider';

const UserCount: React.FC = () => {
  const [users] = useUserContext();

  return <div>Du hast: {users.length} User(s)</div>;
};

export default UserCount;
