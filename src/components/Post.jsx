import React from 'react';
import PostCard from './PostCard';
import posts from '../data/Posts';
import Header from './Header';

function Post() {
  return (
    <>
      <Header />
      <div className="post-section">
        <h1 className="post-title">Posts Aleatórios</h1>

        <div className="post-container">
          {posts.map(({ id, name, description, date }) => (
            <PostCard
              key={id}
              name={name}
              description={description}
              date={date}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Post;
