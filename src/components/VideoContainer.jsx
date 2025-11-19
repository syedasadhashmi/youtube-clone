import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard, { AdCard } from "./VideoCard";
import { Link } from "react-router";

const VideoContainer = () => {
  const [videos, setVideos] = useState();

  // const contianerEnd = addEventListener("scrollend", (event) => {
  //   console.log(event);
  //   console.log("End of scroll reached");
  // });
  // console.log(contianerEnd);

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
      <div className="flex flex-wrap m-1">
        {/* Higher Order Component Example */}
        <AdCard info={videos[0]} />
        {videos?.map((video) => (
          <Link key={video?.id} to={`/watch?v=${video?.id}`}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    )
  );
};

export default VideoContainer;
