import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./FilterCard.css";

export default function FilterCard({ onFilter }) {
  const [search, setSearch] = useState("");
  const [yearRange, setYearRange] = useState("all");
  const [sortBy, setSortBy] = useState("");

  const apply = () => {
    onFilter && onFilter({ search, yearRange, sortBy });
  };

  const reset = () => {
    setSearch("");
    setYearRange("all");
    setSortBy("");
    onFilter && onFilter({ search: "", yearRange: "all", sortBy: "" });
  };

  return (
    <Card className="filter-card mb-3">
      <Card.Body>
        <h5>Filter</h5>
        <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control placeholder="Search by title or description" value={search} onChange={e => setSearch(e.target.value)} />
        </Form.Group>

        <Form.Group className="mt-2">
          <Form.Label>Year range</Form.Label>
          <Form.Select value={yearRange} onChange={e => setYearRange(e.target.value)}>
            <option value="all">All years</option>
            <option value="<=2000">2000</option>
            <option value="2001-2015">2001 - 2015</option>
            <option value=">2015">&gt; 2015</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-2">
          <Form.Label>Sort by</Form.Label>
          <Form.Select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="">None</option>
            <option value="year-asc">Year ↑</option>
            <option value="year-desc">Year ↓</option>
            <option value="title-asc">Title A→Z</option>
            <option value="title-desc">Title Z→A</option>
            <option value="duration-asc">Duration ↑</option>
            <option value="duration-desc">Duration ↓</option>
          </Form.Select>
        </Form.Group>

        <div className="mt-3 d-flex justify-content-between">
          <Button variant="secondary" size="sm" onClick={reset}>Reset</Button>
          <Button variant="primary" size="sm" onClick={apply}>Apply</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
