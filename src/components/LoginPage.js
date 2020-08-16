import React from 'react';
import './LoginPage.css';
// import bootstrap from '../node_modules/bootsrap/dist/css/boostrap.min.css';

function LoginPage() {
  // const [username, setusername] = useState('');
  // const [password, setpassword] = useState('');
  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-4'>
          <h1>User Authentication</h1>
          <form>
            <input
              type='text'
              placeholder='Username'
              className='form-control'
            />
            <br />
            <input
              type='text'
              placeholder='Password'
              className='form-control'
            />
            <br />
            <button className='btn btn-primary'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
