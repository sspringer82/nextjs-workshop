'use client';

import { NextPage } from 'next';

import styled from '@emotion/styled';

const Hotpinkbox = styled.div`
  height: 100px;
  width: 100px;
  border: 4px dotted red;
  background-color: hotpink;
`;

const Page: NextPage = () => {
  return (
    <>
      <Hotpinkbox />
      <Hotpinkbox />
    </>
  );
};

export default Page;
