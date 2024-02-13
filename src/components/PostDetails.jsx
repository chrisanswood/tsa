import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function PostDetails() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="post-card-content">
        <p>Post 1</p>
        <p>Descrição do Post 1</p>
        <p>Data do Post 1</p>
      </div>
      <button onClick={() => navigate('/posts')}>Ver todos os posts</button>
    </>
  );
}

export default PostDetails;
