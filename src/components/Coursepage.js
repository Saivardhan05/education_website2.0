import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'; // Import the React Video Player
import softwareCourses from '../data/Coursesdata';
import TopicsList from './Topiclist';

const CoursePage = () => {
  const { courseId } = useParams();
  const course = softwareCourses.find((c) => c.id === parseInt(courseId, 10));
  const [selectedVideo, setSelectedVideo] = useState(course.videos[0]);

  return (
    <div className="container">
      <div className="row" style={{marginTop:"51px"}}>
        <div className="col-md-8" style={{"height":"500px",backgroundColor:"red"}}>
          <ReactPlayer
            className="img-fluid"
            url={selectedVideo.videoUrl}
            controls={true}
            width="auto"
            height="500px"
          />
        </div>
        <div className="col-md-4">
          <TopicsList
            videos={course.videos}
            selectedVideo={selectedVideo}
            setSelectedVideo={setSelectedVideo}
          />
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
