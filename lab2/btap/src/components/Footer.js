import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <div className="container text-center">
        © {new Date().getFullYear()} PizzaLab — Thiết kế bằng Bootstrap
      </div>
    </footer>
  );
}
