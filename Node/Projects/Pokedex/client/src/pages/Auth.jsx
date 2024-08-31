import React, { useState } from 'react'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth flex justify-center items-center gap-10 py-40">
      <Card title={isLogin ? "Login" : "Register"}>
        {isLogin ? <Login /> : <Register />}
        <p className='pt-5'>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 cursor-pointer pl-2"
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </Card>
    </div>
  );
}

export default Auth;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [_, setCookies] = useCookies(['access_token']);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password
      });

      if(response.data.token == undefined){
        alert("Invalid username or password");
      }
      else{
        setCookies('access_token', response.data.token);
        window.localStorage.setItem('userID', response.data.userID);
        navigate('/');

      }
  
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      onSubmit={onSubmit}
      buttonText="Login"
    />
  );
};

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
        username,
        password
      });
      console.log(response)
      if(response.status == 200){
        alert('Registration Successful!');
      }
      
    } catch (error) {
      console.log(error);

      if (error.response && error.response.status === 409) {
        alert('User already exists');
      }
    }
  };

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      onSubmit={onSubmit}
      buttonText="Register"
    />
  );
};

const Form = ({ username, setUsername, password, setPassword, buttonText, onSubmit }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Check if the password length is less than the required minimum
    if (value.length < 8) {
      setErrorMessage('Password too short');
    } else {
      setErrorMessage('');
    }
  };

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
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="text-xl pr-2">Password:</label>
        <input
          className="border-black border-2"
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange} // Use the new handler
          minLength={8}
          required
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Display error message */}
      </div>

      <button
        type="submit"
        className="border-2 border-black px-5 py-2 rounded-full bg-gray-700 text-white"
        disabled={password.length < 8} // Disable button if password is too short
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
