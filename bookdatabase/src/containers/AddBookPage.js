import { connect } from "react-redux";
import AddBooksPage from "../components/AddBookPage";
import { createBook } from "../redux/actions/bookActions";

const dispatchStateToProps = {
  createBook,
};

export default connect(null, dispatchStateToProps)(AddBookPage);