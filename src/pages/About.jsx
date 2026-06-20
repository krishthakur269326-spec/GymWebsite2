import React from "react";
import Title from "../components/Title";
import OurStorySection from "../components/OurStorySection";
import TrainersSection from "../components/TrainersSection";
import JoinSecction from "../components/JoinSection"
import FrontDeskSection from "../components/FrontDeskSection"

const About = () => {
  return (
    <>
      <Title
        para1={"About Us"}
        title={"Your Fitness Journey Starts Here"}
        para2={
          "Platinum Fitness gym is dedicated to help you build strength, improve health, and achieve lasting results in a supportive and motivating environment.."
        }
      />
      <OurStorySection/>
      <TrainersSection/>
      <FrontDeskSection/>
      <JoinSecction/>
    </>
  );
};

export default About;
