import React, {useState} from 'react'
import { Card } from '@material-ui/core'
import BookDetails from './BookDetails'
import Axios from 'axios';
import Login from './Login'


const Thumbnail = (props) => {
  const { Common, book_id, Image } = props.book
  const [addBook, ConfirmAdd] = useState("+")

  const name = Common.split(',')[0]
  
  const thumbnailStyle = {
    backgroundImage: `url(${Image})`
  }

  const addBookToProfile = (e) => {
    e.preventDefault();
    if (!props.loggedIn){
      ConfirmAdd(<Login />)
    }
    else{
      Axios.post('https://backend-capstone-project-js-311.vercel.app/books/users/add', {
        user_id: props.userID,
        book_id: book_id
      }).then((res) => {
        console.log(res)
        ConfirmAdd("Added")
      })
    }
  }

  return (
    <Card className="thumbnail" style={thumbnailStyle}>
      <li>
        <div className="overlay">
          <div className="details">
            <div className="topBar">
              <button><h2 onClick={addBookToProfile}>{addBook}</h2></button>
              <BookDetails book={props.book}/>
            </div>
            <h4>{name.toUpperCase()}</h4>
          </div>
        </div>        
      </li>
    </Card>
  )
}

export default Thumbnail
