import React from "react";
import homedata from "../data/HomeObject";
import { Link } from "react-router-dom";

import LottieAnimation from "../animations/LottieAnimation";
import Content from "./Content";
import "./home.css";
function Home() {
  return (
    <div className="container-md">
      <div className="row">
        <div className="col-md-6 z-2">
          {/* Content for the second column (overlapping) */}
          <h1 style={{ marginTop: "81px" }}>Welcome to PassForSure</h1>
          <p style={{ marginTop: "21px" }}>
            Unlock Your Potential, Achieve Success! Are you ready to embark on a
            journey towards academic success? At PassForSure, we are dedicated
            to helping students like you reach their full potential and excel in
            their studies. With a comprehensive range of resources and a vibrant
            online community, we provide you with the tools and support needed
            to ace your exams and pass with flying colors.
          </p>
          <button type="button" className="btn btn-outline-primary">
            Signup
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{ marginLeft: "5px" }}
          >
            Login
          </button>
        </div>
        {/* svg image overlap*/}

        <div className="col-md-6 z-0" style={{ paddingTop: "101px" }} id="ani">
          <LottieAnimation />
        </div>
      </div>
      <div className="col-md-12 z-2">
        <h1>What We Offer:</h1>
        <ul>
          <li>
            Video Lectures: Access a vast library of high-quality video lectures
            led by experienced educators. Learn at your own pace, pause, rewind,
            and revisit complex topics until you master them.
          </li>
          <li>
            Courses: Our carefully curated courses cover a wide range of
            subjects and exam preparation strategies. Whether you're gearing up
            for a standardized test or need help with your coursework, we have
            you covered.
          </li>

          <li>
            Discussion Forum: Join a thriving community of learners and experts
            where you can ask questions, engage in discussions, and share
            knowledge. Collaborate with fellow students to enhance your
            understanding of challenging concepts.
          </li>

          <li>
            Notes: Streamline your studies with our comprehensive notes,
            summaries, and study guides. These resources are designed to help
            you grasp key concepts quickly and effectively.
          </li>
        </ul>
      </div>
      <div className="row">
        {homedata.map((data) => {
          return (
            <div className="col-md-4" style={{ justifyContent: "center" }}>
              <div className="card">
                {data.imageUrl}
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <Link to={data.link} className="btn btn-primary">
                    {data.buttonText}
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

export default Home;
