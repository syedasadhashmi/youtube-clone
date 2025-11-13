import React, { useEffect } from "react";
import { YOUTUBE_API } from "../utils/constants";

const VideoContainer = () => {
  const getVideos = async () => {
    const res = await fetch(YOUTUBE_API, {
      headers: {
        Accept: "application/json",
      },
    });
    const json = await res.json();
    console.log(json);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return <div>VideoContainer</div>;
};

export default VideoContainer;
