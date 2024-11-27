'use client'
import React from 'react'
import { doCredentialLogin } from '../actions'
import { useRouter } from 'next/navigation'
function LoginForm() {
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      // Convert FormData to object for logging
      const formDataObj = Object.fromEntries(formData.entries());
      console.log('Form data:', formDataObj);

      const response = await doCredentialLogin(formData);

      if(!!response?.error) {
        console.error(response.error);
      } else {
        router.push("/home");
      }
      
    } catch (error) {
      console.error(error);
    }   
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
         <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' />
         </div>
         <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password' />
         </div>
         <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm