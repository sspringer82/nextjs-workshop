type Props = { movie: string };

const Child: React.FC<Props> = ({ movie }) => {
  return <li>{movie}</li>;
};

export default Child;
