import { connect } from "react-redux";
import AddBookPage from "../components/AddBooks";
import { createBook } from "../redux/action/bookActions";

const dispatchStateToProps = {
  createBook,
};

export default connect(null, dispatchStateToProps)(AddBookPage);