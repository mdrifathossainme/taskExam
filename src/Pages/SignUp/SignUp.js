import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import './SignUp.css'
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';

const  SignUp = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const[users]=useAuthState(auth)
      const navigate=useNavigate()

const handleEmailPasswordSingnup=(e)=>{
  e.preventDefault()

    const email=e.target.email.value;
    const password=e.target.password.value;
    createUserWithEmailAndPassword(email,password)
    e.target.reset()
}
const handleGoogleSignup=()=>{
    signInWithGoogle()
}
const from= "/"
if(users){
    navigate(from, {replace:true})
}

    return (
        <> 
        <div className="bg-color">
          <div className="signup-form">
              <div className="sinup-content">
                  <h4>Sign Up</h4>
                  <form className='form' onSubmit={handleEmailPasswordSingnup}>
                      <label htmlFor="name">Name</label>
                      <input id='name' type="text" name='name' placeholder='Your Name' required />

                      <label htmlFor="email">Email</label>
                      <input id='email' type="emai" name='email' placeholder='Your Email' required />
                          
                      <label htmlFor="password">Password</label>
                      <input id='password' type="password" name='password' placeholder='Password' required />

                  
                   
                      <input className='sinup'  type="submit" value="SignUp" />
                  </form>
                  <p className='swap-btn'><span className='alresy-text'>Already have an account?</span> <span ><Link to="/login"><span className='signup-login-btn'>Login</span></Link></span></p>
                  <button  className='googlebtn'  onClick={handleGoogleSignup}><img className='google-img ' src={'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'} alt="" />
                      Continue with Google
                      </button>
              </div>
          </div>
      </div>
        </> 
           
    );
};

export default SignUp;