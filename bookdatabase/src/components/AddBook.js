import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  paper: {
    margin: "auto",
    padding: 50,
    width: 650,
  },
  title: {
    marginBottom: 8,
  },
  textField: {
    display: "block",
    marginBottom: 20,
  },
  button: {
    marginRight: 20,
  },
});

function AddBookPage(props) {
  const classes = useStyles();
  // componentDidMount(){
  //   //call axios get to recieve books array
  //   axios.post('https://www.googleapis.com/books/v1/volumes?q=funny&key=AIzaSyBEaLMScP9tw-xagW5dHCDOrTXJqli4RHM')
  //   .then (response => response.date)
  //   then(data => this.setState({books: data}));
  // }

  //render - what get display
  //JSX
  //who translate JSX - babel to React elements

  return "Add book";

  // return (
  //   <Paper className={classes.paper} elevation={3}>
  //     <Typography className={classes.title} variant="h5">
  //       Add a new book
  //     </Typography>
  //     <form onSubmit={handleFormSubmit}>
  //       <TextField
  //         required
  //         className={classes.textField}
  //         fullWidth
  //         name="title"
  //         label="Title"
  //         variant="outlined"
  //         value={book.title}
  //         onChange={handleInputChanges}
  //       />
  //       <TextField
  //         className={classes.textField}
  //         fullWidth
  //         name="category"
  //         label="Category"
  //         variant="outlined"
  //         value={book.category}
  //         onChange={handleInputChanges}
  //       />
  //       <div>
  //         <Button
  //           className={classes.button}
  //           variant="outlined"
  //           color="primary"
  //           type="submit"
  //         >
  //           Add
  //         </Button>
  //         <Button variant="outlined" component={Link} to={"/books"}>
  //           Cancel
  //         </Button>
  //       </div>
  //     </form>
  //   </Paper>
  // );
}

export default AddBookPage;
