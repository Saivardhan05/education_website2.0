import React from 'react';
import { Link } from 'react-router-dom';

const TopicsList = ({ videos, selectedVideo, setSelectedVideo }) => {
  return (
    <div className="list-group">
      {videos.map((video) => (
        <Link
          onClick={
            () => setSelectedVideo(video)
        }
        >
          {video.title}
        </Link>
      ))}
    </div>
  );
};

export default TopicsList;
