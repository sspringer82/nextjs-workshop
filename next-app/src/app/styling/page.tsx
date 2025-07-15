import { NextPage } from 'next';
import Link from 'next/link';
import './style.css';

const StylingPage: NextPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/styling/css">Inline CSS & CSS Import</Link>
        </li>
        <li>
          <Link href="/styling/modules">CSS Modules</Link>
        </li>
        <li>
          <Link href="/styling/sass">Sass</Link>
        </li>
        <li>
          <Link href="/styling/css-in-js">CSS-in-JS</Link>
        </li>
        <li>
          <Link href="/styling/tailwind">Tailwind CSS</Link>
        </li>
      </ul>
    </div>
  );
};

export default StylingPage;
