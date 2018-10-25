import React from "react";
import loader from "./loading.gif";

const LoadingState = ({ message }) => (
  <div className="loading">
    <img src={loader} alt="loading..." />
    <p className="loading-message">{message}</p>
  </div>
);

export default LoadingState;
