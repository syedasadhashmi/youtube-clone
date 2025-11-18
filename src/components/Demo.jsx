import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  console.log("rendering...");
  //   const prime = findPrime(text);
  const prime = useMemo(() => findPrime(text), [text]);
  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme ? "bg-gray-800" : "")
      }
    >
      <div className="m-2">
        <button
          className="p-2 bg-blue-400"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <input
        className="border border-black w-72 px-2 py-2"
        type="number"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="font-bold text-xl mt-4">
        Prime of {text} is {prime}
      </div>
    </div>
  );
};

export default Demo;
