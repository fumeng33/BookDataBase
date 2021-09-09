import React, {useState} from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import Home from './components/Home'
import BooksPage from './components/BooksPage'
import NavBar from './components/NavBar'
import AddBook from './components/AddBook'
import Profile from './components/Profile'



function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState()
  const [userID, setUserID] = useState()

  console.log("App.js Status: ", loggedIn, "User: ", username, "ID", userID)

  const updateStatus = (x) => {
    setLoggedIn(x)
    setUserID('')
    setUsername('')
  }

  return (
      <BrowserRouter>
        <NavBar setUsername={setUsername} updateStatus={updateStatus} setUserID={setUserID} userID={userID} username={username} loggedIn={loggedIn}/>
          <Switch>
              <Route exact path="/" render={(props) => <Home loggedIn={loggedIn} userID={userID}/>} />
              <Route path='/profile' component={Profile} />
              <Route path='/addbook' component={AddBook} />
              <Route path='/bookspage' component={BooksPage} />



          </Switch>
      </BrowserRouter>
  );
}

export default App;