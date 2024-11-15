'use client';
import React from 'react';
import Image from 'next/image';
import styles from './profile.module.css';
import { useRouter } from 'next/navigation';

// Define types for better TypeScript support
type ProfileData = {
  name: string;
  username: string;
  avatar: string;
  backgroundImage: string;
  description: string;
  posts: number;
  followers: number;
  following: number;
};

type ProfilePageProps = {
  profile: ProfileData;
};

const Profile: React.FC<ProfilePageProps> = ({ profile }) => {
  const router = useRouter();

  const editProfile = () => {
    router.push('/editprofile');
  };

  return (
    <div className={styles.contentProfilePage}>
      <div className={styles.profileUserPage}>
        <div className={styles.imgUserProfile}>
          {/* Use Next.js Image component for optimized images */}
          <Image
            className={styles.profileBgHome}
            src={profile.backgroundImage}
            alt="Background"
            width={1920}  // Adjust the width as needed
            height={1080} // Adjust the height as needed
          />
          <Image
            className={styles.avatar}
            src={profile.avatar}
            alt={profile.name}
            width={140}  // Adjust the width as needed
            height={140} // Adjust the height as needed
            style={{ aspectRatio: '1/1', objectFit: 'cover' }}
          />
        </div>
        <button onClick={editProfile} className={styles.followButton}>
          Edit
        </button>
        <div className={styles.userProfileData}>
          <h1>{profile.name}</h1>
          <p>{profile.username}</p>
        </div>
        <div className={styles.descriptionProfile}>{profile.description}</div>
        <ul className={styles.dataUser}>
          <li>
            <a>
              <strong>{profile.posts}</strong>
              <span>Posts</span>
            </a>
          </li>
          <li>
            <a>
              <strong>{profile.followers}</strong>
              <span>Followers</span>
            </a>
          </li>
          <li>
            <a>
              <strong>{profile.following}</strong>
              <span>Following</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
