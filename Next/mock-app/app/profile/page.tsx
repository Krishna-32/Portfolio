'use client'

import React, { useEffect, useState } from 'react'
import Profile from '../components/profile/profile'
import axios from 'axios'

function ProfilePage() {
  const [profileImage, setProfileImage] = useState<string>('')

  const getProfile = async () => {
    const response = await axios.get('/api/images')
    console.log(response.data)
    setProfileImage(response.data[response.data.length - 1].base64)
  }

  useEffect(() => {
    getProfile()
  }, [])

  const profile = {
    name: "Monkey D. Luffy",
    username: "Mugiwara Luffy", 
    avatar: profileImage,
    backgroundImage: "https://i.pinimg.com/736x/39/ad/ed/39aded21f22273c2d054fb79c476cbc8.jpg",
    description: "I am the future Pirate King!",
    posts: 0,
    followers: 0,
    following: 0
  }

  return (
    <Profile profile={profile} />
  )
}

export default ProfilePage