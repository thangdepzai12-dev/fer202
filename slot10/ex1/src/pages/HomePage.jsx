import React, { useState, useEffect } from "react";
import HomeCarousel from "../components/Carousel/HomeCarousel";
import FilterCard from "../components/Filter/FilterCard";
import { movies } from "../data/movies";
import MovieCard from "../components/Movie/MovieCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function HomePage() {
  const [list, setList] = useState(movies);
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favourites");
    if (stored) setFavs(JSON.parse(stored));
  }, []);

  const handleFilter = ({ search, yearRange, sortBy }) => {
    let tmp = [...movies];
    if (search) {
      tmp = tmp.filter(m => m.title.toLowerCase().includes(search.toLowerCase()) || m.description.toLowerCase().includes(search.toLowerCase()));
    }
    if (yearRange && yearRange !== "all") {
      if (yearRange === "<=2000") tmp = tmp.filter(m => m.year <= 2000);
      if (yearRange === "2001-2015") tmp = tmp.filter(m => m.year >= 2001 && m.year <= 2015);
      if (yearRange === ">2015") tmp = tmp.filter(m => m.year > 2015);
    }
    if (sortBy) {
      if (sortBy === "year-asc") tmp.sort((a,b)=>a.year-b.year);
      if (sortBy === "year-desc") tmp.sort((a,b)=>b.year-a.year);
      if (sortBy === "title-asc") tmp.sort((a,b)=>a.title.localeCompare(b.title));
      if (sortBy === "title-desc") tmp.sort((a,b)=>b.title.localeCompare(a.title));
      if (sortBy === "duration-asc") tmp.sort((a,b)=>a.duration-b.duration);
      if (sortBy === "duration-desc") tmp.sort((a,b)=>b.duration-a.duration);
    }
    setList(tmp);
  };

  const handleAddFavourite = (movie) => {
    const next = [...new Set([...favs, movie])];
    setFavs(next);
    localStorage.setItem("favourites", JSON.stringify(next));
  };

  return (
    <>
      <HomeCarousel />
      <div className="row">
        <div className="col-md-3">
          <FilterCard onFilter={handleFilter} />
          <div className="card mb-3">
            <div className="card-body">
              <h6>Favourites ({favs.length})</h6>
              <ul>
                {favs.map(f=> <li key={f.id}>{f.title}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <h4>Featured Movies Collections</h4>
          <p className="text-secondary">Danh sách phim nổi bật</p>

          <Row xs={1} md={3} className="g-4">
            {list.map(movie => (
              <Col key={movie.id}>
                <MovieCard movie={movie} onAddFavourite={handleAddFavourite} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}
