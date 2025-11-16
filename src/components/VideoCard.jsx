const VideoCard = ({ info }) => {
  return (
    <div className="p-2 m-2 w-72 shadow-lg rounded-lg">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={info?.snippet?.thumbnails?.medium?.url}
      />
      <ul>
        <li className="font-bold py-2">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdCard = ({ info }) => {
  // higher order component took a component and return the component
  return (
    <div className=" relative">
      <VideoCard info={info} />
      <div className="flex absolute bottom-12 right-5">
        <p className="font-bold">Ad</p>
      </div>
    </div>
  );
};

export default VideoCard;
