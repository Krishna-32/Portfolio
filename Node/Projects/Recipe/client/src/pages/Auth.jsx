import React, { useState } from "react";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function Auth() {
  return (
    <div className="auth flex justify-center items-center gap-10 py-40">
      <Card title="Login">
        <Login />
      </Card>
      <Card title="Register">
        <Register />
      </Card>
    </div>
  );
}

export default Auth;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(['access_token']);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/login",{
        username,
        password
      })

      setCookies('access_token', response.data.token);
      window.localStorage.setItem('userID', response.data.userID);
      navigate('/');
    } catch (error) {
      console.error(error)
    }
  
  }

  
  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      buttonText="Login"
      onSubmit={onSubmit}
    />
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/auth/register",{
        username,
        password
      })
      alert("Registration Successfull, Login!")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      buttonText="Register"
      onSubmit={onSubmit}
    />
  );
};

const Form = ({ username, setUsername, password, setPassword, buttonText, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col">
        <label htmlFor="username" className="text-xl pr-2">Username:</label>
        <input
          className="border-black border-2"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="text-xl pr-2">Password:</label>
        <input
          className="border-black border-2"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="border-2 border-black px-5 py-2 rounded-full bg-gray-700 text-white"
      >
        {buttonText}
      </button>
    </form>
  );
};

const Card = ({ title, children }) => {
  return (
    <div className="card border-2 border-gray-300 rounded-lg shadow-lg p-6 w-80 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
};
