import React from "react";

function StudentCard({ img, name, id, group }) {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body text-center">
          <p className="fw-bold">{name}</p>
          <p>{id}</p>
          <div>
            <label className="me-2"><input type="radio" name={group} /> Absent</label>
            <label><input type="radio" name={group} /> Present</label>
          </div>
          <button className="btn btn-warning btn-sm mt-2">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
