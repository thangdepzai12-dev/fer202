import React from "react";

function NavBar() {
  return (
    <ul className="nav justify-content-center bg-warning py-2">
      <li className="nav-item"><a className="nav-link text-dark" href="#">Home</a></li>
      <li className="nav-item"><a className="nav-link text-dark" href="#">About</a></li>
      <li className="nav-item"><a className="nav-link text-dark" href="#">Contact</a></li>
    </ul>
  );
}

export default NavBar;
