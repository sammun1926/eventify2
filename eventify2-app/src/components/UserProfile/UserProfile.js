import React from 'react';
import './UserProfile.css';

const UserProfile = ({ user }) => {
 
  const { name, email, picture, bio } = user;

  return (
    <div className='profile-container'>
      <img src={picture} alt={`${name}'s profile`} className='profile-picture' />
      <h2>{name}</h2>
      <p>{email}</p>
    
    </div>
  );
};
export default UserProfile;