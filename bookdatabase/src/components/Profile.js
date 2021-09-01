import React, {useState, useEffect }from 'react'
import Banner from './Banner'
import UserBookList from './UserBookList'

const Profile = (props) => {
  const [books, setBooks] = useState([])
  let user_id = props.location.userID

  const url = `https://backend-capstone-project-js-311.vercel.app/users/${props.location.userID}`

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then(data => setBooks(data))
    // eslint-disable-next-line
    }, [books])


    return (
        <div className="profile">
          <Banner image="https://res.cloudinary.com/dwuibrt2k/image/upload/v1630450882/bk2_tmk0cl.jpg"
                  sub="Read Me"
                  title={props.location.username}
                  body="Welcome to your Library.
                  View and edit your book list here, or add more books to our database"/>
          {/* <SearchBar placeholder={"Search your books"} books={books}/> */}
          <UserBookList setBooks={setBooks} books={books} user_id={user_id}/>
        </div>
    )
}

export default Profile