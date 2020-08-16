import React, { useState } from 'react';
import './LoginPage.css';
// import bootstrap from '../../node_modules/bootstrap/dist/css/min.css';
import swal from 'sweetalert';

function LoginPage() {
  function validateForm(event) {
    event.preventDefault();
    if (username === 'Fatima' && password === 'react') {
      swal(
        'LogIn Successfully!',
        'Congratulations, your login is Successfully',
        'success'
      );
    } else {
      swal('Login Failed!', 'Please check your details again', 'error');
    }
  }

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-4'>
          <h1>User Authentication</h1>
          <form onSubmit={validateForm}>
            <input
              type='text'
              placeholder='Username'
              className='form-control'
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
            <br />
            <input
              type='text'
              placeholder='Password'
              className='form-control'
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <br />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
