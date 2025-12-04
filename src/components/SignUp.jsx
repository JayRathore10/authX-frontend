import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import "./SignUp.css";

export function SignUp({setUserData}){

  const [name , setName] = useState("");
  const [password , setPassword] = useState("");
  const [email , setEmail] = useState("");
  const [age , setAge] = useState(0); 

  const navigate = useNavigate();

  const submitHandler = async(e)=>{
    try{
      e.preventDefault();
      const response = await axios.post("https://authx-backend-yyep.onrender.com/api/auth/sign-up" , {
        name , 
        password  , 
        email , 
        age 
      } , {withCredentials : true});
      setUserData(response.data.user);
      navigate("/profile")
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
    <div className="signup-container">
      <h2>Create Account</h2>
      <form className="signup-form">
        <input type="text" placeholder="Name" name='name'
          onChange={(e)=>setName(e.target.value)}
        />
        <input type="email" placeholder="Email" name='email'
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input type="number" placeholder="Age" name='age' 
          onChange={(e)=>setAge(Number(e.target.value))}
        />
        <input type="password" placeholder="Password" name='password'
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button type="submit"
          onClick={submitHandler}
        >Sign Up</button>
      </form>
      <p className="signup-link">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
    </>
  );
};

