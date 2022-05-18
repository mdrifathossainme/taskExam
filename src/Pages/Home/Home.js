import { signOut } from 'firebase/auth';
import React from 'react';
import AddItem from '../../Components/AddItem/AddItem';
import auth from '../../firebase.init';
import Header from './Header';

const Home = () => {
   
   
    return (
        <div>
          <Header/>

          <AddItem/>
            
        </div>
    );
};

export default Home;