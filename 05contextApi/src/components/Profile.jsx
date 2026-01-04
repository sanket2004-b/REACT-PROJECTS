import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
function Profile() {
    const {user} = useContext(UserContext);
    if(!user){
        return <h2>Please log in to view your profile.</h2>
    }else{
        return <p>Welcome, {user.username}!</p>
            
        
    }
  
}   

export default Profile;