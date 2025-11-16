import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState();

  const getVideos = async () => {
    try {
      const res = await fetch(YOUTUBE_API, {
        headers: {
          Accept: "application/json",
        },
      });
      const json = await res.json();
      console.log(json?.items);
      setVideos(json?.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    videos && (
      <div className="flex flex-wrap">
        {videos?.map((video) => (
          <VideoCard key={video?.id} info={video} />
        ))}
      </div>
    )
  );
};

export default VideoContainer;
