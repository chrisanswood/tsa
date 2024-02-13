import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function Home() {
  return (
    <>
      <Header />
      <div>
        <Link to="/posts">Ver posts</Link>
      </div>
    </>
  );
}

export default Home;
