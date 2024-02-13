import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function Home() {
  return (
    <>
      <Header />
      <div>
        <Link to="/posts">Clique aqui para ver os posts</Link>
      </div>
    </>
  );
}

export default Home;
