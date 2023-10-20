import React, { useState } from 'react';
import Post from './Post'; // Import the Post component

const Discussionforum = () => {
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]); // Initialize an empty array for posts

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePostSubmit = () => {
    const post = {
      content: postContent,
    };
    setPostContent('');
    setPosts([...posts, post]); // Add the new post to the array of posts
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card" style={{ marginTop: '6vh' }}>
            <div className="card-body">
              <h5 className="card-title">Create a New Post</h5>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Type your post here..."
                  value={postContent}
                  onChange={handlePostChange}
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  onClick={handlePostSubmit}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pass the post content and posts array to the Post component */}
      <Post content={postContent} posts={posts} />
    </div>
  );
};

export default Discussionforum;
