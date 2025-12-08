import { useEffect, useState } from 'react';
import axios from 'axios';
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn';
import { OtpVer } from './components/OTPVer';
import { ResetPassword } from './components/ResetPassword';
import { ForgetPassword } from './components/ForgetPassword';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import { ProfilePage } from './components/ProfilePage';
import './App.css';
import { ResetOtp } from './components/ResetOtp';

function App() {
  useEffect(()=>{
    const awakeBackend = async()=>{
      try{
        const res =  await axios.get("https://authx-backend-yyep.onrender.com");
        console.log(res.data);
      }catch(err){
        console.log(err);
      }
    }
    awakeBackend();
  } , []);

  const [userData, setUserData] = useState({}); 
  const [name , setName] = useState("");
  const [password , setPassword] = useState("");
  const [email , setEmail] = useState("");
  const [age , setAge] = useState(0); 

  return (
    <>  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp 
            setName={setName} name = {name}
            setPassword={setPassword} password = {password}
            setEmail = {setEmail} 
            setAge = {setAge} age = {age}
            email={email}
          />} 
          />
          <Route path="/login" element={<LogIn setUserData={setUserData}
            setName={setName} 
            setPassword={setPassword}
            setEmail = {setEmail}
            setAge = {setAge}
          />}/>
          <Route path="/otp-verification" element={<OtpVer 
            name = {name}
            age = {age}
            password ={password}
            email = {email}
            setUserData = {setUserData}
          />} />
          <Route path="/forget-password" element={<ForgetPassword 
            email={email}
            setEmail={setEmail}
            />}/>
          <Route path="/reset-password" element={<ResetPassword />}/>
          <Route path="/profile" element={<ProfilePage userData={userData} />}/>
          <Route path="/reset-otp" element={<ResetOtp 
            email={email}
          />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
