import './App.css';
import {iconMap} from "./assets";
import React, { useState, useEffect } from 'react';
import TypeWriterText from "./TypeWriterText.js";

function App() {
  const aboutMeText = "A brief overview of myself and my works! Links, interests, accomplishments, and more!";
  const projectsText = "Overview and analysis of each of my projects. Includes diagrams, demos, and repos.";
  const mediaText = "A portfolio of creative works I’ve created. Photos, videos, and more.";
  const resumeText = "Click here to view my resume!";
  const defaultText = "Welcome to my portfolio! Click on an icon to start.";
  const [infoText, setInfoText] = useState(defaultText);
  const [infoTitle, setInfoTitle] = useState("Hello!");
  const [circleStyle, setCircleStyle] = useState({});
  const [animationActive, setAnimationActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageHover = (event) => {
    const name = event.target.getAttribute('data-name');
    if (name === "diary") {
      setInfoTitle("About Me");
      setInfoText(aboutMeText);
    } else if (name === "wrench") {
      setInfoTitle("Projects");
      setInfoText(projectsText);
    } else if (name === "camera") {
      setInfoTitle("Media");
      setInfoText(mediaText);
    } else if (name === "scroll") {
      setInfoTitle("Resume");
      setInfoText(resumeText);
    } else {
      setInfoTitle("Hello!");
      setInfoText(defaultText);
    }
  }

  const handleImageHoverStop = () => {
    setInfoTitle("Hello!");
    setInfoText(defaultText);
  }

  const handleClick = (event) => {
    setSelectedImage(event.target.src);
    console.log("click");
    const imgRect = event.target.getBoundingClientRect();
    setCircleStyle({
      top: imgRect.top,
      left: imgRect.left
    });
    setAnimationActive(true);
  };

  useEffect(() => {
    if (animationActive) {
      const timer = setTimeout(() => {
        setAnimationActive(false);
      }, 2000); // Duration of the animation
      return () => clearTimeout(timer);
    }
  }, [animationActive]);

  return (
    <div>
      <div className="mainPage">
        <div className="homePageRows">
          <div className="homePageRow1">
            <div className="infoBubble">
              <div className="infoTitle">
                {infoTitle}
              </div>
              <div className="infoBody">
                <TypeWriterText text={infoText} speed={1} />
              </div>
            </div>
          </div>
          <div className="homePageRow2">
            <img data-name="diary" src={iconMap.get('diary')} alt="About Me" onMouseEnter={handleImageHover} onMouseLeave={handleImageHoverStop} onClick={handleClick}></img>
            <img data-name="wrench" src={iconMap.get('wrench')} alt="Projects" onMouseEnter={handleImageHover} onMouseLeave={handleImageHoverStop} onClick={handleClick}></img>
            <img data-name="camera" src={iconMap.get('camera')} alt="Media" onMouseEnter={handleImageHover} onMouseLeave={handleImageHoverStop} onClick={handleClick}></img>
          </div>
          <div className="homePageRow3">
            <img data-name="scroll" src={iconMap.get('scroll')} alt="Resume" onMouseEnter={handleImageHover} onMouseLeave={handleImageHoverStop} onClick={handleClick}></img>
          </div>
          <div className="homePageRow4">
            Or view the highlights here!
          </div>
        </div>
      </div>
      {animationActive && (
        <div className="overlay">
          <div className="circle" style={circleStyle}></div>
        </div>
      )}
    </div>
  );
}

export default App;
