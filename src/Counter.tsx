import React from "react";
import useCounter from "./hooks/useCounter";

function Counter(): JSX.Element {
  const { counter, pauseState, resetTimer, pauseTimer } = useCounter();
  return (
    <div className="w-full">
      <p className="text-3xl text-center">{counter}</p>
      <div className="w-full mt-3 flex justify-center">
        <button
          onClick={resetTimer}
          className="py-1 px-2 bg-red-500 rounded text-white mr-2"
        >
          reset
        </button>
        <button
          onClick={pauseTimer}
          className="py-1 px-2 bg-gray-800 rounded text-white mr-2"
        >
          {pauseState ? "play" : "pause"}
        </button>
      </div>
    </div>
  );
}

export default Counter;
