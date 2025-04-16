'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

type Props = {
  title: string;
  path: string;
};

const LinkButton: React.FC<Props> = ({ title, path }) => {
  const router = useRouter();

  return (
    <Button onClick={() => router.push(path)} variant={'outline'}>
      {title}
    </Button>
  );
};

export default LinkButton;
