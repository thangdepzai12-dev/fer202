import React from "react";

function Banner() {
  return (
    <div className="container-fluid bg-warning text-center py-4">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/20/FPT_Education_logo.png"
        alt="logo"
        style={{ maxHeight: "90px", background: "white", padding: "10px" }}
      />
      <h2 className="fw-bold text-white mt-2">FPT UNIVERSITY</h2>
    </div>
  );
}

export default Banner;
