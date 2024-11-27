
import React from 'react'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import Logout from '../component/Logout'
const Page = async () => {
  const session = await auth()
  if (!session?.user) {
    redirect('/')
  }
  return (<>
    <div>{session?.user?.name}</div>
    <Logout />
    </>
  )
}

export default Page