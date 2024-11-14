"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

function Page() {
  const router = useRouter()
  
  return (
    <div>
      contact <br />
      <button onClick={() => router.push('/')}>Go to home</button>
    </div>
  )
}

export default Page