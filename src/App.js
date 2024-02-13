import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';
import PostDetails from './components/PostDetails';
import NotFound from './components/NotFound';
import Master from './components/Master';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<Master />}>
            <Route index element={<Home />} />
            <Route path="posts" element={<Post />} />
            <Route path="posts/:id" element={<PostDetails />} />
          </Route>
          {/* 
        <Route path='/' element={ < Home /> } /> 
        <Route path='/posts' element={ < Post /> } />
        <Route path='/posts/:id' element={ < PostDetails /> } />
        */}
          <Route path="*" element={NotFound} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
