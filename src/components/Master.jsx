import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Master() {
  return (
    <>
      <div>
        <Link to="/">Home</Link> <br />
        <Link to="/posts">Clique aqui para ver os posts</Link> <br />
        <Link to="/posts/1">Clique aqui para ver um post</Link>
        <Link to="/posts/2">Clique aqui para ver um post</Link>
      </div>
      <Outlet />
    </>
  );
}

export default Master;
