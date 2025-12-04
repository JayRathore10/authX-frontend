import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from 'axios';

export function LogIn({setUserData}){
  const navigate = useNavigate();

  const[email , setEmail] = useState("");
  const[password , setPassword] = useState("");

  const submitHandler = async(e)=>{
    try{
      e.preventDefault();
      const response = await axios.post("https://authx-backend-yyep.onrender.com/api/auth/login" ,{
        email , 
        password 
      } , {withCredentials : true })
      setUserData(response.data.user);
      navigate("/profile");
    }catch(err){
      console.log(err);
    } 
  }

  return (
    <>
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <input type="email" placeholder="Email" 
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input type="password" placeholder="Password" 
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button type="submit" 
          onClick={submitHandler}
        >Login</button>
      </form>
      <p className="login-link">
        <a href="/forget-password">Forgot Password?</a>
      </p>
    </div>
    </>
  );
};
