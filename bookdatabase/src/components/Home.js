import React, {useState, useEffect}from 'react'
import Banner from './Banner'
import Gallery from './Gallery'




const Home = (props) => {
  const [books, setBooks] = useState([])

  // const url = "https://backend-capstone-project-js-311.vercel.app/books"
  const url = "http://localhost:3001/books"

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then(data => setBooks(data))
    }, [])

    return (
        <div className="home">
          <Banner image="https://res.cloudinary.com/dwuibrt2k/image/upload/v1630384436/book-piles_hoswqy.jpg"
                  sub="Let's Create Your Book Library!"
                  // title="My Book Library"
                  body=""/>
          {/* <SearchBar placeholder="Find Your Book" Books={Books}/> */}
          <Gallery books={books} userID={props.userID} loggedIn={props.loggedIn} />
        </div>
    )
}

export default Home;