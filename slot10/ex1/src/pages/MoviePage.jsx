import React from "react";
import { movies } from "../data/movies";
import MovieCard from "../components/Movie/MovieCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MoviePage() {
  return (
    <div>
      <h2 className='mb-3'>My movies</h2>
      <Row xs={1} md={3} className="g-4">
        {movies.map(movie => (
          <Col key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
