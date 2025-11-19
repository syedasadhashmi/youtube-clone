import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [stateNumber, setStateNumber] = useState(0);
  let x = 0;
  let y = useRef(0);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      //   console.log("I'm gonna kill your browser: ", (y.current = y.current + 1));
    }, 200);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="m-4 p-2 border border-black w-96 h-96">
      <button
        className="p-2 m-2 bg-green-500 border border-black cursor-pointer"
        onClick={() => {
          setStateNumber(stateNumber + 1);
        }}
      >
        Increment State Variable
      </button>
      <h1 className="font-bold text-xl">State Variable: {stateNumber}</h1>
      <button
        className="p-2 m-2 bg-green-500 border border-black cursor-pointer"
        onClick={() => {
          x = x + 1;
          console.log("value of let variable: ", x);
        }}
      >
        Increment Let Variable
      </button>
      <h1 className="font-bold text-xl">Let Variable: {x}</h1>

      <button
        className="p-2 m-2 bg-green-500 border border-black cursor-pointer"
        onClick={() => {
          y.current = y.current + 1;
          console.log("value of ref variable: ", y.current);
        }}
      >
        Increment Ref Variable
      </button>
      <h1 className="font-bold text-xl">Ref Variable: {y.current}</h1>
    </div>
  );
};

export default Demo2;
