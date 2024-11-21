import connectDB from '@/lib/mongoose'
import User from '@/models/user'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    await connectDB()
    const { email } = await req.json()
    const user = await User.findOne({ email }).select('username')
    return NextResponse.json({ user })
  } catch (error) {
    console.error('Error checking user existence:', error)
  }
}