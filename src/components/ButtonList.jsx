import React from "react";
import Button from "./Button";

const LIST = [
  "All",
  "Live",
  "Gamming",
  "News",
  "Cooking",
  "Cricket",
  "Soccer",
  "Music",
  "Tech",
  "History",
  "Science",
];

const ButtonList = () => {
  return (
    <div className="flex p-4">
      {LIST.map((btn) => (
        <Button key={btn} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
