import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from 'axios';

const useStyles = makeStyles({
  paper: {
    margin: "auto",
    padding: 50,
    width: 650,
  },
  title: {
    marginBottom: 8,
  },
  textField: {
    display: "block",
    marginBottom: 20,
  },
  button: {
    marginRight: 20,
  },
});

function BookInfo(book) {
<h1>{book.volumnInfo.title}</h1>
}

function AddBookPage(props) {
  const classes = useStyles();
  const [books,setBooks] = useState([]);
  useEffect(() => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=funny&key=AIzaSyBEaLMScP9tw-xagW5dHCDOrTXJqli4RHM')
    .then (response => response.data.items)
    .then(data => setBooks(data));
  }, [setBooks]);
  console.log(books)

  // book - volumnInfo - (imageLinks.thumbnail, title, authors[0], publishedDate)
// card and display 
//map thought state jsx return component 
//this will go under return function
// book.map((book)=> { 
// <BookInfo/>
// })
return (
  <div>
    <h1> My Book libary</h1>
    {books && (
      <div className="book">
        {/*loop over the books*/}
        {books.map((book, index) => ( 
          <div key={index}>
            <img src = {book.volumeInfo.imageLinks.thumbnail} />
            <h2>{book.volumeInfo.title}</h2>
            <h2>{book.volumeInfo.authors}</h2>
          <h2>{book.volumeInfo.publishedDate}</h2>
        </div>
        ))}
        </div>
    )}
  </div>
      // <div className="BookInfo"> 
      // // returning the img element for each url, again with the value 
      //   {book && books.map((books.imageLinks.thumbnail) => <img width{"200px"} height{"200px"} src={books}></img>)} 
      // </div>
)
}

export default AddBookPage;
