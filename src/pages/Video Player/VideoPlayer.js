import React, { useState} from "react";
import classes from './VideoPlayer.module.css';
import Menu from "./Menu";
import Video from "./Video";

const videos = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4" ,
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
}

const videoNames = Object.keys(videos);

function App() {

  const [videoSrc, setVideoSrc] = useState(videos.spider);

  const videoSeleHandler = (video) => {
    const videoSource = videos[video];
    setVideoSrc(videoSource)
  }

  return <div className={classes.container}>
    <h1>Project 6: Video Player</h1>
    <Menu onSelectVideo={videoSeleHandler} videoValues={videoNames}/>
    <Video videoSrc={videoSrc}/>
  </div>
 
}

export default App;
