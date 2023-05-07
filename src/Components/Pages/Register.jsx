import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
    // Perform login logic here

    // Store the data in localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  };

  const isLoggedIn = localStorage.getItem('email') && localStorage.getItem('password');

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      {isLoggedIn ? (
        <span>
          Already logged in. Please <a href="/login">login</a>.
        </span>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="col-md-12">
            <label htmlFor="exampleInputEmail1" className="form-label text-align">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="exampleInputEmail1" className="form-label text-align">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>
          <br />
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Register;