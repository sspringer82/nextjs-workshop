import { NextPage } from 'next';
import './page.scss';

const Page: NextPage = () => {
  return (
    <div className="scss-page">
      <h1>CSS Styles Page</h1>
      <p>Welcome to the CSS styles page!</p>
      <div>npm install --save-dev sass</div>
    </div>
  );
};

export default Page;
