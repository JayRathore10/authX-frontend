import { useState } from 'react';
import axios from 'axios';
import "./ResetPassword.css";

export function ResetPassword({email , password, setPassword}){
  const [confirmPass , setConfirmPass] = useState("");

  const submitHandler = async(e)=>{
    try{  
      e.preventDefault();
      const response = await axios.post();
      // have to make a call that reset the old password with newOne
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
