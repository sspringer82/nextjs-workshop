import { NextPage } from 'next';
import MovieDetails from './MovieDetails';
import ActorDetails from './ActorDetails';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

type Props = {
  params: Promise<{ id: string }>;
};

function LoadingMovie() {
  return (
    <div className="space-y-4 p-4">
      {/* Header Skeletons */}
      <Skeleton className="h-6 w-60" /> {/* Movie Details Bambi */}
    </div>
  );
}

function LoadingActor() {
  return (
    <>
      <Skeleton className="h-6 w-32" />
      {/* Actor List Skeletons */}
      <div className="space-y-3 pt-4">
        {Array.from({ length: 15 }).map((_, i) => (
          <Skeleton key={i} className="h-5 w-64" />
        ))}
      </div>
    </>
  );
}

const StreamPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <h1>Stream page works</h1>
      <Suspense fallback={<LoadingMovie />}>
        <MovieDetails id={id} />
      </Suspense>
      <Suspense fallback={<LoadingActor />}>
        <ActorDetails />
      </Suspense>
    </>
  );
};
export default StreamPage;

export async function generateStaticParams() {
  return [{ id: 'da85' }];
}
