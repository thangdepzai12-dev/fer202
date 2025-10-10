import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Toast from "react-bootstrap/Toast";
import "./MovieCard.css";

export default function MovieCard({ movie, onAddFavourite }) {
  const [show, setShow] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const handleAddFav = () => {
    setToastVisible(true);
    onAddFavourite && onAddFavourite(movie);
    setTimeout(() => setToastVisible(false), 1400);
  };

  return (
    <>
      <Card className="h-100 movie-card">
        <Card.Img variant="top" src={movie.poster} alt={movie.title} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{movie.title} <small className="text-muted">({movie.year})</small></Card.Title>
          <Card.Text style={{ flex: 1 }}>
            {movie.description.length > 120 ? movie.description.slice(0, 120) + "..." : movie.description}
          </Card.Text>
          <div className="mb-2">
            <strong>Genre:</strong> <span className="badge bg-secondary">{movie.genre}</span>
          </div>
          <div className="d-flex justify-content-between mt-auto">
            <Button variant="primary" size="sm" onClick={() => setShow(true)}>View Details</Button>
            <Button variant="outline-warning" size="sm" onClick={handleAddFav}>Add to Favourites</Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-5">
              <img src={movie.poster} alt={movie.title} className="img-fluid" />
            </div>
            <div className="col-md-7">
              <p><strong>Year:</strong> {movie.year}</p>
              <p><strong>Genre:</strong> {movie.genre}</p>
              <p><strong>Duration:</strong> {movie.duration} minutes</p>
              <p>{movie.description}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div style={{ position: "fixed", top: 16, right: 16, zIndex: 9999 }}>
        <Toast show={toastVisible}>
          <Toast.Header>
            <strong className="me-auto">Favourites</strong>
          </Toast.Header>
          <Toast.Body>Added to favourites!</Toast.Body>
        </Toast>
      </div>
    </>
  );
}
