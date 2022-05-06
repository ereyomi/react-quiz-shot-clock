import { useEffect, useRef, useState } from "react";

import { UseCounterType } from "./useCounter.type";

function useCounter(): UseCounterType {
  const [counter, setCounter] = useState<number>(24);
  const [pauseState, setPauseState] = useState<boolean>(false);
  let interval = useRef<any>(null);
  useEffect(() => {
    if (pauseState) {
      clearInterval(interval.current);
    } else {
      if (counter === 0) {
        clearInterval(interval.current);
      } else {
        interval.current = setInterval(() => {
          setCounter((c) => {
            if (c === 0) {
              clearInterval(interval.current);
              return 0;
            } else {
              return --c;
            }
          });
        }, 1000);
      }
    }
    return () => clearInterval(interval.current);
  }, [counter, pauseState]);

  const resetTimer = (): void => {
    setCounter(24);
    setPauseState(false);
  };
  const pauseTimer = (): void => {
    setPauseState(!pauseState);
  };
  return {
    counter,
    pauseState,
    resetTimer,
    pauseTimer
  };
}

export default useCounter;
