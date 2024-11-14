import React from 'react'
import Profile from '../components/profile/profile'
function ProfilePage() {
 const profile = {
  name: "Monkey D. Luffy",
  username: "github.com/jofpin",
  avatar: "https://i.pinimg.com/736x/4a/27/44/4a2744ae2e518385e541a2efba4e2114.jpg",
  backgroundImage: "https://i.pinimg.com/736x/39/ad/ed/39aded21f22273c2d054fb79c476cbc8.jpg",
  description: "Front-end | Security Researcher | CSS Warrior | @bullgit | I love to create small things for the internet!",
  posts: 3390,
  followers: 718,
  following: 239
};

  return (
    <Profile profile={profile} />
  )
}

export default ProfilePage