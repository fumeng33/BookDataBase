import React, {useState, useEffect }from 'react'
import Banner from './Banner'
import BooksPage from './BooksPage'

const Profile = (props) => {
  const [books, setBooks] = useState([])
  let user_id = props.location.userID

  const url = `http://localhost:3001/users/${props.location.userID}`

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then(data => setBooks(data))
    // eslint-disable-next-line
    }, [books])


    return (
        <div className="profile">
          <Banner image="https://res.cloudinary.com/dwuibrt2k/image/upload/v1630450882/bk2_tmk0cl.jpg"
                  sub="Your book Library"
                  title={props.location.username}
                  body="Welcome to your Library.
                  View and edit your book list here, or add more books to our database"/>
          <BooksPage setBooks={setBooks} books={books} user_id={user_id}/>
        </div>
    )
}

export default Profile