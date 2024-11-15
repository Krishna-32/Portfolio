'use client'

import React, { useState } from 'react'

function EditProfile() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0])
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (selectedFile) {
      // Handle file upload logic here
      console.log('Uploading file:', selectedFile)
    }
  }

  return (
    <div className="w-full min-h-screen translate-y-[-10px] bg-gray-100 flex flex-col items-center pt-20">
      <header className="text-4xl font-light tracking-wider text-gray-700 mb-10">
        UPLOAD PROFILE
      </header>
      <form onSubmit={handleSubmit} action="/profile" method="post" encType="multipart/form-data" className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
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
            accept="image/*"
          />
        </div>
        <button 
          type="submit" 
          disabled={!selectedFile}
          className={`w-full py-3 px-4 rounded-lg text-sm font-semibold transition-colors
            ${selectedFile 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        >
          Upload File
        </button>
      </form>
    </div>
  )
}

export default EditProfile