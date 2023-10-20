import React from 'react';
//  <div className="container mt-4">
    //   <div className="row justify-content-center">
    //     <div className="col-md-8">
const Post = ({ content, posts }) => {
  return (
    <div className="container mt-4">
        <div className="row justify-content-center" style={{backgroundColor:"red"}}>
        <div className="col-md-8" style={{backgroundColor:"yellow"}}>
      <h2>Recent Posts</h2>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
      
    
    </div>
    
    </div>
    </div>
  );
};

export default Post;
