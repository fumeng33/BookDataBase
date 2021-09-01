import React from 'react'
import Thumbnail from './Thumbnail'



const Gallery = ({books, userID, loggedIn}) => {


  return (
    <ul className="gallery">
      {books && books.map((book, idx) => (
        <Thumbnail key={idx} book={book} userID={userID} loggedIn={loggedIn}/>
      ))}
    </ul>
  )
}

export default Gallery;
