import React, { useState } from "react";

export default function SignupForm() {
  const [user, setUser] = useState({ username: "", password: "" });

  function handleChange(event) {
    const updateUser = { ...user, [event.target.name]: event.target.value };
    setUser(updateUser);
  }

  function handleSubmit(event) {
    console.log("event", user);
    event.preventDefault();
  }

  //     const Login = (props) => {
  //     const [credentials, setCredentials] = useState({});

  //   login = e => {
  //     e.preventDefault();
  //     axiosWithAuth().get('login/endpoint', credentials)
  //       .then(res => {
  //         localStorage.setItem('token', res.data.token);
  //         this.props.history.push('/');
  //       })
  //   }

  //   handleChange = e => {
  //       setCredentials: {
  //         ...credentials,
  //         [e.target.name]: e.target.value,
  //       }
  //   }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Sign In</legend>
        <div className="signInForm">
          <label>Username: </label>
          <div>
            <input
              type="text"
              className="formControl"
              name="username"
              placeholder="Enter your username"
              value={user.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              className="formControl"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={user.password}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}
