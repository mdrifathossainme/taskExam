import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const RequierAuth = ({children}) => {
    const [user, loading]=useAuthState(auth);
    const naviage=useNavigate()
   
    const location=useLocation();
    if(loading){
        return <Loading/>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children

};

export default RequierAuth;