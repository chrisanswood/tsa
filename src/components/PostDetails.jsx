import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';

function PostDetails(e) {
  const navigate = useNavigate();
  const {id} = useParams();

  return (
    <>
      <Header />
      <div className="post-card-content">
        <p>Post {console.log(id)}</p>
        <p>Descrição do Post 1</p>
        <p>Data do Post 1</p>
      </div>
      <button onClick={() => navigate('/posts')}>Ver todos os posts</button>
    </>
  );
}

export default PostDetails;
