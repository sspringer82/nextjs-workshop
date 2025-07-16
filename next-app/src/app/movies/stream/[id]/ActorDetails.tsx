import { getActors } from '@/api/actors.api';

const ActorDetails: React.FC = async () => {
  const actors = await getActors(10_000);

  return (
    <div>
      <h1>Actor Details</h1>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>
            {actor.firstname} {actor.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActorDetails;
