import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./OTPVer.css";

export function OtpVer({name , age , email , password ,setUserData}){
  
  const [otp , setOtp] = useState("");

  const navigate = useNavigate();

  const submitHandler = async(e)=>{
    try{
      e.preventDefault();
      const response = await axios.post("https://authx-backend-yyep.onrender.com/api/auth/sign-up" , {
        name , 
        password  , 
        email , 
        age , 
        otp 
      } , {withCredentials : true});
      setUserData(response.data.user);
      navigate("/profile");
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
    <div className="otp-container">
      <h2>Enter OTP</h2>
      <form className="otp-form">
        <input type="text" placeholder="Enter OTP"
          onChange={(e)=>setOtp(e.target.value)}
        />
        <button type="submit"
          onClick={submitHandler}
        >Verify OTP</button>
      </form>
    </div>
    </>
  );
};

