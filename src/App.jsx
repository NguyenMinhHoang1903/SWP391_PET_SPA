import './App.css';
import Login from './components/template/Login';
import Home from "./components/template/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/layouts/Header';
import Booking from './components/template/Booking';
import { useEffect, useState } from "react";
import Footer from './components/layouts/Footer';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <BrowserRouter>
    <div>
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
