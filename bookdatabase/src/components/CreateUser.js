import React, { useState } from 'react';
import axios from 'axios';
import { Dialog, DialogContent } from '@material-ui/core';

const CreateUser = () => {
  const [open, setOpen] = useState(false);
  const [nameReg, setNameReg] = useState('')
  const [emailReg, setEmailReg] = useState('')
  const [passReg, setPassReg] = useState('')

  
  const handleToggle = () => {
    setOpen(!open);
  };

  const register = (e) => {
    e.preventDefault();
    console.log(nameReg, emailReg, passReg)
    axios.post('http://localhost:3001/users/register', {
    // axios.post('https://backend-capstone-project-js-311.vercel.app/users/register', {
      name: nameReg,
      email: emailReg,
      password: passReg
    }).then((res) => {
      handleToggle()
      console.log(res.data)
    })
  }


  return (
    <div>
      <button color="primary" onClick={handleToggle}>
        Create Account
      </button>
      <Dialog onClose={handleToggle} className="dialog" open={open}>
          <h1 className='header'>Create Account</h1> 
        <DialogContent dividers>
        <form className='form'
          // onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
          <label>Name</label>
          <input 
              id="name" 
              onChange={(e) => {setNameReg(e.target.value)}} 
              required />
          <label>Email</label>
          <input 
              id="email" 
              onChange={(e) => {setEmailReg(e.target.value)}} 
              required />
          <label>Password</label>
          <input 
              id="passowrd" 
              type="password"
              onChange={(e) => {setPassReg(e.target.value)}} 
              required />
          <br />
          <button type="submit" onClick={register}>Submit</button>
      </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CreateUser
