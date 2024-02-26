import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import Home from "../pages/home/Home";
import './App.css';
import { Toaster } from 'react-hot-toast'
import { useChatInfoContext } from "./context/ChatInfoContext";

function App() {

  const { user } = useChatInfoContext();

  return (
    <div style={{display:"flex",alignItems: "center",justifyContent: "center", padding:"10px"}} >

      <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login"/>} />
            <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
            <Route path="/signup" element={user ? <Navigate to="/"/> : <SignUp />} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
