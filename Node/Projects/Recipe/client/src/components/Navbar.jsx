import React from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const [cookies, setCookies] = useCookies(['access_token']);
  const navigate = useNavigate();

  const logout = () => {
    setCookies('access_token', '');
    window.localStorage.removeItem('userID');
    navigate('/auth');
  }

  return (
    <div className='flex gap-10 justify-center bg-black p-10 text-white text-xl'>

        <Link to='/'>Home</Link>
        {!cookies.access_token ? (<Link to='/auth'>Login/Register</Link>) : <button onClick={logout}>Logout</button>}

    </div>
  )
}

export default Navbar