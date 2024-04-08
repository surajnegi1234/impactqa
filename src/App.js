// import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home"
import Signup from './Components/Signup';
import Login from"./Components/Login";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
 
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/signin' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
