import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import AccountPage from "./pages/AccountPage";
import FooterPage from "./pages/FooterPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./components/Layout/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/footer" element={<FooterPage />} />
        </Routes>
      </div>
      <FooterPage />
    </>
  );
}
