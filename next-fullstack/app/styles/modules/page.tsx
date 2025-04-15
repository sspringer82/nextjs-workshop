import { NextPage } from 'next';
import styles from './page.module.css';

const Page: NextPage = () => {
  return (
    <div>
      <h1 className={styles.headline}>CSS Styles Page</h1>
      <p>Welcome to the CSS styles page!</p>
    </div>
  );
};

export default Page;
