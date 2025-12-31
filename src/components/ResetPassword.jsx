import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./ResetPassword.css";

export function ResetPassword({password, setPassword , otp , setUserData}){
  const [confirmPass , setConfirmPass] = useState("");

  const navigate = useNavigate();

  const submitHandler = async(e)=>{
    try{  
      e.preventDefault();
      if(password !== confirmPass){
        console.error("Password not match");
        return ;
      }
      const response = await axios.post(`/api/auth/reset-password/${otp}`, {
        password : password
      });
      console.log(response.data.meesage);
      setUserData(response.data.userData);
      navigate("/profile");
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
    <div className="reset-container">
      <h2>Reset Password</h2>
      <form className="reset-form">
        <input type="password" placeholder="New Password" 
          onChange={(e)=>setPassword(e.target.value)}
        />
        <input type="password" placeholder="Confirm Password"
          onChange={(e)=>setConfirmPass(e.target.value)}
        />
        <button type="submit"
          onClick={submitHandler}
        >Reset Password</button>
      </form>
    </div>
    </>
  );
};
