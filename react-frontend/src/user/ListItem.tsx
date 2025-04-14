import { User } from './User';

type Props = {
  user: User;
};

const ListItem: React.FC<Props> = ({ user }) => {
  return <li>{user.name}</li>;
};

export default ListItem;
