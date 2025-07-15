import { NextPage } from 'next';
import Link from 'next/link';

const StylingPage: NextPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/styling/css">Go to CSS Styling</Link>
        </li>
        <li>
          <Link href="/styling/modules">Go to CSS Modules</Link>
        </li>
      </ul>
    </div>
  );
};

export default StylingPage;
