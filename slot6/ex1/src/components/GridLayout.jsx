import React from "react";

function GridLayout() {
  return (
    <>
      <div className="row mb-2">
        <div className="col-md-6 border text-center">First col</div>
        <div className="col-md-6 border text-center">Second col</div>
      </div>
      <div className="row mb-2">
        <div className="col border text-center">col</div>
        <div className="col border text-center">col</div>
        <div className="col border text-center">col</div>
      </div>
      <div className="row">
        <div className="col border text-center">col</div>
        <div className="col border text-center">col</div>
        <div className="col border text-center">col</div>
        <div className="col border text-center">col</div>
      </div>
    </>
  );
}

export default GridLayout;
