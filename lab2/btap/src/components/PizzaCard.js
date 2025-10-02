import React from 'react';

export default function PizzaCard({ item }) {
  return (
    <div className="card h-100">
      <img src={item.img} className="card-img-top" alt={item.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text flex-grow-1">{item.desc}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold">{item.price} ₫</span>
          <button className="btn btn-sm btn-outline-primary">Thêm</button>
        </div>
      </div>
    </div>
  );
}
