import React from "react";
import Button from "react-bootstrap/Button";
import "./Footer.css";

function MyFooter({ author = "TraLTB", email = "traltb@fe.edu.vn", linkGithub = "Movie Management Project" }) {
  return (
    <footer className="py-3 mt-4">
      <div className="container text-center">
        <p>Author: {author}</p>
        <p>Created by: {email}</p>
        <p>&copy; {new Date().getFullYear()} {author}. All rights reserved</p>
        <Button variant="link" href="#" >My Link Github: {linkGithub}</Button>
      </div>
    </footer>
  );
}

export default MyFooter;
