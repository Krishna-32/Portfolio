import React from 'react'
import { doLogout } from '@/app/actions'

function Logout() {
  return (
    <form action={doLogout}>
      <button type='submit'>Logout</button>
    </form>
  )
}

export default Logout