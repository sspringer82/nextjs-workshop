import { NextPage } from 'next';
import style from './page.module.css';

const StylingPage: NextPage = () => {
  return (
    <div>
      <h1 className={style.headline}>Hallo Welt</h1>
    </div>
  );
};

export default StylingPage;
