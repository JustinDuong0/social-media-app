import React, { useState } from 'react';
import CreatePostForm from './components/CreatePostForm';
import Feed from './components/Feed';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <div>
      <h1>Fakebook!</h1>
      <CreatePostForm addPost={addPost} />
      <Feed posts={posts} />
    </div>
  );
}

export default App;
