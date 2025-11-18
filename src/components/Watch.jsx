import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch((store) => store.app.isMenuOpen);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="p-5 flex">
          <div>
            <iframe
              width="900"
              height="450"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              // allowFullscreen
            ></iframe>
          </div>
          <div className="w-full">
            <LiveChat />
          </div>
        </div>
        <CommentsContainer />
      </div>
    </>
  );
};

export default Watch;
