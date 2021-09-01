import React, {useState, useEffect}from 'react'
import Banner from './Banner'
import Gallery from './Gallery'




const Home = (props) => {
  const [books, setBooks] = useState([])

  const url = "https://backend-capstone-project-js-311.vercel.app/books"

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then(data => setBooks(data))
    }, [])

    return (
        <div className="home">
          <Banner image="https://res.cloudinary.com/dwuibrt2k/image/upload/v1630384436/book-piles_hoswqy.jpg"
                  sub="Let's Read"
                  title="My Book Library"
                  body="Keep track of all the you have read this past year! We can help you!"/>
          {/* <SearchBar placeholder="Find Your Book" Books={Books}/> */}
          <Gallery books={books} userID={props.userID} loggedIn={props.loggedIn} />
        </div>
    )
}

export default Home;