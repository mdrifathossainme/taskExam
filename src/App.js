
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequierAuth from './Components/RequierAuth/RequierAuth';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
     

      <Routes>
     
     
        <Route path='/' element={
        <RequierAuth>
          <Home/>
        </RequierAuth>
        }></Route>  
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
     
        </Routes>
     
     
    </div>
  );
}

export default App;
