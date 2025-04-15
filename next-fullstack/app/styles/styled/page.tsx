'use client';

import { NextPage } from 'next';
import styled from 'styled-components';

const Headline = styled.h1`
  color: darkgreen;
  background-color: lightred;
  font-size: xx-large;
  text-decoration: underline;
`;

const Page: NextPage = () => {
  return (
    <div>
      <Headline>CSS Styles Page</Headline>
      <p>Welcome to the CSS styles page!</p>
    </div>
  );
};

export default Page;
