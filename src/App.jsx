import './App.css';
import Login from './components/template/Login';
import Home from "./components/template/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/layouts/Header';
import Booking from './components/template/Booking';
import { useEffect, useState } from "react";
import Footer from './components/layouts/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
    <div>
    <ToastContainer/>
      <Header user ={user}/>
      
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login />}/>
        <Route path="/booking" element={user ? <Navigate to ="/booking"/> : <Booking/> } />
        {/* <Route path="/booking" element={user ? <Booking/> : <Navigate to ="/login"/> } /> */}
       </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
  );
};
export default App;
