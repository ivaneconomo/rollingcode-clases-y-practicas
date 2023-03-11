import React from "react";

const Loader = () => {
  return (
    <div className="spinner-border d-flex justify-content-center container" role="status">
      <span className="visually-hidden container">Loading...</span>
    </div>
  );
};

export default Loader;
