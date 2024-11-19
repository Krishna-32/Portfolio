'use client'

import React, { useEffect, useState } from 'react'
import Profile from '../components/profile/profile'
import axios from 'axios'

interface ProfileData {
  name: string
  username: string
  description: string
  base64: string
}

function ProfilePage() {
  const [profileImage, setProfileImage] = useState<string>('')
  const [profileData, setProfileData] = useState<ProfileData[]>([])

  const getProfile = async () => {
    try {
      const response = await axios.get('/api/profile')
      console.log(response.data)
      if (response.data.length > 0) {
        const latestProfile = response.data[response.data.length - 1]
        setProfileImage(latestProfile.base64)
        setProfileData(response.data)
      }
    } catch (error) {
      console.error('Error fetching profile:', error)
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  if (profileData.length === 0) {
    return <div>Loading...</div>
  }

  const latestProfile = profileData[profileData.length - 1]
  const profile = {
    name: latestProfile.name,
    username: latestProfile.username,
    avatar: profileImage,
    backgroundImage: "https://i.pinimg.com/736x/39/ad/ed/39aded21f22273c2d054fb79c476cbc8.jpg",
    description: latestProfile.description,
    posts: 0,
    followers: 0,
    following: 0
  }

  return (
    <Profile profile={profile} />
  )
}

export default ProfilePage