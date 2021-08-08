import { connect } from "react-redux";
import BooksPage from "../components/BooksPage";
import { loadBooks } from "../redux/action/bookActions";

function mapStateToProps(state) {
  return {
    loading: state.books.loading,
    books: state.books.books,
    error: state.books.error
  };
}

const dispatchStateToProps = {
  loadBooks,
};

export default connect(mapStateToProps, dispatchStateToProps)(BooksPage);