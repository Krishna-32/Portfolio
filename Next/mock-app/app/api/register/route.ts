import { NextResponse } from 'next/server'
import User from '@/models/user'
import connectDB from '@/lib/mongoose'

export async function POST(req: Request) {
  try {
    const { name, username, email, password } = await req.json()

    await connectDB()

    const user = await User.create({ name, username, email, password }) 
    
    if (!user) {
      return NextResponse.json({ error: 'Failed to register user' }, { status: 500 })
    }

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 })
  } catch (error) {
    console.error('Error registering user:', error)
    return NextResponse.json({ error: 'Failed to register user' }, { status: 500 })
  }
}
