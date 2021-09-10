import React, { useState } from 'react'
import AddBook from './AddBook'
import { Card } from '@material-ui/core'
import Axios from "axios"

const UserBookList = ({setBooks, books, user_id}) => {
  const [isHidden, setHide] = useState(true)

  const deleteBook = (book_id) => {
    console.log(user_id, book_id)
    Axios.delete('http://localhost:3001/users/delete', {
      data: {user_id: user_id,
      book_id: book_id}
    }).then((res) => {
      console.log(res)
      setBooks(books)
    })
  }


  return (
    <ul className="userBookList">
      {isHidden ? 
        <button onClick={() => {isHidden ? setHide(false) : setHide(true)}}> Add New Book </button> :
        <AddBook setHide={setHide} isHidden={isHidden}/>
      } 
      {/* <AddBook />
    {books && books.map((book, idx) => (
        <Card >
          <li className="userBook">
            <h3 id="title">{book.title}</h3> 
             <div className="image" id="bookImage">
                <img src={book.Image} alt={"Image of " + book.Title}></img>
              </div>
              <section id="author">
                <h4>Author: </h4> 
                <p>{book.Author}</p>
              </section>
              <section id="year">
                <h4>Year: </h4> 
                <p>{book.Year}</p>
              </section>

              <section id="category">
                <h4>Category:</h4> 
                <p>{book.Category}</p>
              </section>
              
              <button id="close" onClick={() => {deleteBook(book.book_id)}}>REMOVE</button>
            {/* </div> */}
          {/* </li>
        </Card>
    ))} */} 
  </ul>
  )
}

export default UserBookList;