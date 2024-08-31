import React from 'react'
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';

function Session() {

  const [cookies, setCookies] = useCookies(['access_token'])
  const navigate = useNavigate()

  const logout = () => {
    setCookies('access_token', '')
    window.localStorage.removeItem('userID')
    navigate('/auth')
  }

  return (
    <div>
      {!cookies.access_token ? 'Login/Register' : <button onClick={logout}>Logout</button>}
    </div>
  )
}

export default Session