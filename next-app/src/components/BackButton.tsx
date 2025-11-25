'use client';

import { useRouter } from 'next/navigation';

const BackButton: React.FC = () => {
  const router = useRouter();

  return <button onClick={() => router.push('/movies')}>Back</button>;
};

export default BackButton;
