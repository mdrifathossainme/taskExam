
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequierAuth from './Components/RequierAuth/RequierAuth';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Myitem from './Pages/MyItem/Myitem';
import SignUp from './Pages/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
     

      <Routes>
     
     
        <Route path='/' element={
        <RequierAuth>
        <Home/>
        </RequierAuth>
        }></Route>  
        <Route path='/myitem' element={
        <RequierAuth>
       <Myitem/>
        </RequierAuth>
        }></Route>  


        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
     
        </Routes>
     
        <ToastContainer />
    </div>
  );
}

export default App;
