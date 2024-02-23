import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import Home from "../pages/home/Home";
import './App.css';

function App() {

  return (
    <div style={{display:"flex",alignItems: "center",justifyContent: "center", padding:"10px"}} >
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> */}
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="home" element={<Home />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
