import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../../firebase.init';

const Home = () => {
   
    const logout=()=>{
        signOut(auth);
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={logout}>LogOut</button>
        </div>
    );
};

export default Home;