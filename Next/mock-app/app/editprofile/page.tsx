'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image2base64 from '@/app/components/image2base64'
import { useRouter } from 'next/navigation'

function EditProfile() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    username: '', 
    description: ''
  })
  const router = useRouter()

  const getProfile = async () => {
    try {
      const response = await axios.get('/api/profile')
      if (response.data.length > 0) {
        const latestProfile = response.data[response.data.length - 1]
        setFormData({
          name: latestProfile.name,
          username: latestProfile.username,
          description: latestProfile.description
        })
      }
    } catch (error) {
      console.error('Error fetching profile:', error)
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0])
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
    console.log(selectedFile)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    
    try {
      let imageData = null
      
      if (selectedFile) {
        const base64 = await Image2base64(selectedFile)
        
        imageData = {
          base64,
          name: formData.name,
          username: formData.username,
          description: formData.description
        }
      }  
    

      const response = await axios.post('/api/profile', {
        ...formData,
        image: imageData
      })

      console.log('Profile updated:', response.data)
      router.push('/profile')
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  }

  return (
    <div className="w-full min-h-screen translate-y-[-10px] bg-gray-100 flex flex-col items-center pt-20">
      <header className="text-4xl font-light tracking-wider text-gray-700 mb-10">
        Edit Profile
      </header>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
        <div className="mb-6">
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100
              cursor-pointer"
            accept=".jpg, .jpeg, .png"
          />

          <input
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={formData.name}
            className="block w-full text-sm text-gray-500 mt-4 p-2 rounded-lg border border-gray-300"
            onChange={handleChange}
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            defaultValue={formData.username}
            className="block w-full text-sm text-gray-500 mt-4 p-2 rounded-lg border border-gray-300"
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            defaultValue={formData.description}
            className="block w-full text-sm text-gray-500 mt-4 p-2 rounded-lg border border-gray-300"
            onChange={handleChange}
          />  
        </div>
        <button 
          type="submit"
          className="w-full py-3 px-4 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default EditProfile