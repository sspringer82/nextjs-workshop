'use client';

import { NextPage } from 'next';
import { Button, H1 } from './page.styles';

const StylingPage: NextPage = () => {
  return (
    <div>
      <H1>Hallo Welt 🎃</H1>
      <Button variant="info">Info Button</Button>
      <Button variant="danger">Danger Button</Button>
    </div>
  );
};

export default StylingPage;
