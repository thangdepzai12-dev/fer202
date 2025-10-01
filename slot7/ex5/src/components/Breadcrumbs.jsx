import React from "react";

function Breadcrumbs() {
  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Students</li>
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumbs;
