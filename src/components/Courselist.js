import React from 'react';
import softwareCourses from '../data/Coursesdata';
import { Link } from 'react-router-dom';

function Courselist() {
  return (
    <div className='container'>
      <div className='row' style={{ marginTop: '51px' }}>
        {softwareCourses.map((data) => {
          return (
            <div className='col-md-4' key={data.id} style={{ justifyContent: 'center' }}>
              <div className='card h-80'>
                <img src={data.imageUrl} style={{ width: '100%', height: '200px' }} alt={data.title} />
                <div className='card-body'>
                  <h5 className='card-title'>{data.title}</h5>
                  <p className='card-text'>{data.description}</p>
                  <Link to={`/course/${data.id}`} className='btn btn-primary'>
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courselist;
