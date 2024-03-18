'use client'
import React, { Fragment, useState, useEffect } from "react";

const Stopwatch: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [running, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (running) {
      timer = setTimeout(() => {
        setTime((prev) => prev + 1);
      }, 1000);
     
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [running, time]);

  const start = () => {
    setIsRunning(true);
  };

  const pause = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <Fragment>
      <div className="grid grid-cols-2 gap-2 p-40 pt-10 bg-blue-200">
        <input
          className="col-span-2 bg-gray-100 rounded-3xl  text-center"
          value={time}
        ></input>
        {!running ? (
          <button
            className="col-span-1 bg-green-200 rounded-3xl"
            onClick={start}
          >
            Start
          </button>
        ) : (
          <button
            className="col-span-1 bg-yellow-200 rounded-3xl"
            onClick={pause}
          >
            Pause
          </button>
        )}
        <button
          className="col-span-1 bg-red-200 rounded-3xl"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </Fragment>
  );
};

export default Stopwatch;
