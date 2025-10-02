import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand fw-bold" href="/">PizzaLab</a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#menu">Menu</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Liên hệ</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
