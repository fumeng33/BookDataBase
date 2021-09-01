import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';

const BookDetails = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
    console.log(props)
  };

  const backgroundStyle = {
    backgroundImage: `url(${props.book.Image})`
  }

  return (
    <div>
      <button color="primary" onClick={handleToggle}>
        Details
      </button>
      <Dialog onClose={handleToggle} className="dialog" open={open}>
        <div className="image" style={backgroundStyle}>
          <h3> Book Title:</h3> 
          <h1>{props.book.Title}</h1> 
        </div>
        <DialogContent dividers>
          <Typography gutterBottom>
          <h4>Year: {props.book.Year}</h4> 
          </Typography>
          <Typography gutterBottom>
          <h4>Category: {props.book.Category}</h4> 
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default BookDetails