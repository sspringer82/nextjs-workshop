import { NextPage } from 'next';
import './page.css';

const Page: NextPage = () => {
  return (
    <div className="css-page">
      <h1 style={{ color: 'hotpink', fontSize: 'x-large' }}>CSS Styles Page</h1>
      <p>Welcome to the CSS styles page!</p>
    </div>
  );
};

export default Page;
