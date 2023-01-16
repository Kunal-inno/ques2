import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStartstop = () => {
    setIsRunning(!isRunning);
  };
  useEffect(() => {
    let id;
    if (isRunning) {
      id = setInterval(() => setCounter((Counter) => Counter + 1), 1000);
    }
    return () => {
      clearInterval(id);
    };
  }, [isRunning, counter]);
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        CLICK FOR COUNTER
      </button>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                COUNTER
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {counter}
              {/* TIMER AREA */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleStartstop}
                type="button"
                className="btn btn-primary"
              >
                CLICK to Start/Stop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counter;
