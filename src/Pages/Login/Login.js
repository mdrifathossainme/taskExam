import React  from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const[users]=useAuthState(auth)
    const navigate=useNavigate()



const handleEmailPasswordLogin=(e)=>{
  e.preventDefault()

    const email=e.target.email.value;
    const password=e.target.password.value;
    signInWithEmailAndPassword(email,password)
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
        <div className="bg-color ">
           <div className="signup-form loginform">
               <div className="sinup-content">
                   <h4>Login Page</h4>
                   <form className='form' onSubmit={handleEmailPasswordLogin}>
                       <label htmlFor="email">Email</label>
                       <input  id='email' type="email" name='email' placeholder='Your Email' required />


                       <span className='login-password'>
                       <label htmlFor="password">Password</label>
                       <input id='password' name='password' placeholder='Password' required />
                       
                       </span>

                     
                      

                       <input className='sinup' type="submit" value="LogIn" />
                       <p className='swap-btn'>New to Aamadat <span ><Link to="/signup"><span className='signup-login-btn'>Create New Account</span></Link></span></p>
                      

                      

                   </form>
                   <button  className='googlebtn' onClick={handleGoogleSignup}><img className='google-img' src={'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'} alt="" />
                           Continue with Google
                    </button>
               </div>
           </div>
       </div>
    );
};

export default Login;