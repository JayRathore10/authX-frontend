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

  return (
    <>  
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path="/login" element={<LogIn setUserData={setUserData} />}/>
          <Route path="/otp-verification" element={<OtpVer />} />
          <Route path="/reset-password" element={<ResetPassword />}/>
          <Route path="/forget-password" element={<ForgetPassword />}/>
          <Route path="/profile" element={<ProfilePage userData={userData} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
