import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongoose'
import Image from '@/models/images'

export async function POST(req: Request) {
  try {
    await connectDB()

    const { image } = await req.json()

    if (!image) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      )
    }

    const filename = image.name.split('.')[0]
    const extension = image.name.split('.').pop() || ''
    const base64 = image.base64
    const newImage = await Image.create({
      filename,
      extension,
      base64
    })

    return NextResponse.json(
      { message: 'Image uploaded successfully', newImage },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error uploading image:', error)
    return NextResponse.json(
      { error: 'Error uploading image' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    await connectDB()
    
    const images = await Image.find()
    return NextResponse.json(images, { status: 200 })

  } catch (error) {
    console.error('Error fetching images:', error)
    return NextResponse.json(
      { error: 'Error fetching images' },
      { status: 500 }
    )
  }
}
