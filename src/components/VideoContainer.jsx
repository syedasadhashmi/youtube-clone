import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router";

const VideoContainer = () => {
  const [videos, setVideos] = useState();

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await fetch(YOUTUBE_API, {
          headers: {
            Accept: "application/json",
          },
        });
        const json = await res.json();
        setVideos(json?.items);
      } catch (err) {
        console.log(err);
      }
    };
    getVideos();
  }, []);

  return (
    videos && (
      <div className="flex flex-wrap">
        {videos?.map((video) => (
          <Link to={`/watch?v=${video?.id}`}>
            <VideoCard key={video?.id} info={video} />
          </Link>
        ))}
      </div>
    )
  );
};

export default VideoContainer;
