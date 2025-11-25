'use client';
import { NextPage } from 'next';
import { useState } from 'react';
import './page.css';
import clsx from 'clsx';

const BasicStylePage: NextPage = () => {
  const [likeHotpink, setLikeHotpink] = useState(false);

  return (
    <div className="basic">
      <h1>Basic styling</h1>
      <div
        style={{
          height: '50px',
          width: '50px',
          border: '1px solid black',
          backgroundColor: likeHotpink ? 'hotpink' : 'honeydew',
        }}
      ></div>
      <button onClick={() => setLikeHotpink(!likeHotpink)}>
        setLikeHotpink
      </button>
      <div className="hotpinkBox"></div>
      <div className={clsx({ hotpinkBox: likeHotpink }, 'basicBox')}></div>
    </div>
  );
};

export default BasicStylePage;
