import React, {useState} from 'react'
import Axios from 'axios'

const AddBook = (props) => {
  const [newBook, setNewBook] = useState({
    Title: "",
    // Image: null,
    Author: "",
    Year: "",
    Category: ""
  })



  const handleChange = (e) => {
    console.log(e.target.type)
    const newState = { ...newBook }
    if(e.target.type === "file") {
      newState[e.target.name] = e.target.files[0]
    } else {
        newState[e.target.name] = e.target.value
    }
    setNewBook(newState)
    console.log(newBook)
  };

  

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newBook)
    Axios.post('https://backend-capstone-project-js-311.vercel.app/books/new', {
      title: newBook.Title,
      // image: newBook.Image,
      author: newBook.Author,
      year: newBook.Year,
      category: newBook.Category,
    }).then((res) => {
      console.log(res)
    })
  }



  return (
    <li >
    <form className="userBook" onSubmit={handleSubmit}>
        <label id="title">Book Title:
          <input
          name="title"
          placeholder="Name of your book"
          type="text"
          value={newBook.Title}
          onChange={handleChange}
          required />
        </label > 
        {/* <label for="image">Image:
          <input 
          type="file" 
          name="Image" 
          // onChange={(e) => setSelectedImage(e.target.files[0])}
          onChange={handleChange}
          required />
        </label> */}
        <label id="author"> Author Name:
          <input
          name="author"
          placeholder="Author Name"
          type="text"
          value={newBook.Author}
          onChange={handleChange}
           />
        </label> 
        <label id="year">Year:
          <input
          name="Year"
          placeholder="Year Published"
          type="text"
          value={newBook.Year}
          onChange={handleChange}
           />
        </label> 
        <label id="category">Category:
          <input
          name="Category"
          placeholder="Book Category"
          type="text"
          value={newBook.Category}
          onChange={handleChange}
          required />
        </label> 
          <button id="save" type="submit">Save</button>
          <button id="close" onClick={() => {props.isHidden ? props.setHide(false) : props.setHide(true)}}>Close</button>  
      </form>
    </li>
  )
}

export default AddBook;
