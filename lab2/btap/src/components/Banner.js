import React from 'react';

export default function Banner() {
  return (
    <div className="row align-items-center my-4">
      <div className="col-md-6">
        <h1 className="display-5">Delicious Pizza</h1>
        <p className="lead">Tiệm Pizza</p>
        <a className="btn btn-primary" href="#menu">Xem Menu</a>
      </div>
      <div className="col-md-6 d-none d-md-block">
        <img src="/assets/images/image.jpg"   alt="pizza" className="img-fluid rounded" />
      </div>
    </div>
  );
}
