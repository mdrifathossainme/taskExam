import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const logout=()=>{
        signOut(auth);
    }
    return (
        <div>
            <ul className='d-flex'>
                <li><Link style={{textDecoration:"none"}} to="/">Home</Link></li>
                <li><Link style={{textDecoration:"none"}} to="/myitem">My Item</Link></li>
                <li><button onClick={logout}>LogOut</button></li>
                
              
                
            </ul>
        </div>
    );
};

export default Header;