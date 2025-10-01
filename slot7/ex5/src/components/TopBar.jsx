import React from "react";

function TopBar() {
  return (
    <div className="bg-warning text-white py-1">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <a href="#" className="text-white me-2">FPT UNIVERSITY</a>|
          <a href="#" className="text-white mx-2">Khoa CNTT</a>|
          <a href="#" className="text-white ms-2">Khóa 2021</a>
        </div>
        <div>
          Search <input type="text" className="ms-1" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
