import React, {useState} from 'react'
import { Card } from '@material-ui/core'
import Axios from 'axios';
import Login from './Login'


const Thumbnail = (props) => {
  const { Title, book_id, Image } = props.book
  const [addBook, ConfirmAdd] = useState("+")

  const name = Title.split(',')[0]
  
  const thumbnailStyle = {
    backgroundImage: `url(${Image})`
  }

  const addBookToProfile = (e) => {
    e.preventDefault();
    if (!props.loggedIn){
      ConfirmAdd(<Login />)
    }
    else{
      Axios.post('http://localhost:3001/books/users/add', {
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
            </div>
            <h4>{name.toUpperCase()}</h4>
          </div>
        </div>        
      </li>
    </Card>
  )
}

export default Thumbnail;
