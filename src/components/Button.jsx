import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="p-2 px-4 mr-6 bg-gray-300 rounded-lg cursor-pointer">
        {name}
      </button>
    </div>
  );
};

export default Button;
