import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import Home from "./components/Home";
import BooksPage from "./components/BooksPage";
import NavBar from "./components/NavBar";
import AddBook from "./components/AddBook";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/addbook" component={AddBook} />
        <Route path="/bookspage" component={BooksPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
