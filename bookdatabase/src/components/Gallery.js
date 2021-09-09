import React from "react";
import Thumbnail from "./Thumbnail";

const Gallery = ({ books }) => {
  return (
    <ul className="gallery">
      {books && books.map((book, idx) => <Thumbnail key={idx} book={book} />)}
    </ul>
  );
};

export default Gallery;
