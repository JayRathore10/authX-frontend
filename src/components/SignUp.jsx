import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./SignUp.css";

export function SignUp({setAge , setEmail , setName  , email , setPassword , name , age , password}){
  const navigate = useNavigate();

  const submitHandler = async(e)=>{
    try{
      e.preventDefault();
      
      const isExist = await axios.post("https://authx-backend-yyep.onrender.com/api/auth/user-exist" , {
        email, 
        age , 
        password , 
        name 
      });
      
      if(isExist.data.exist === false ){
        navigate("/otp-verification");
        const  response  = await axios.post("https://authx-backend-yyep.onrender.com/api/auth/otp-generator" , {
          email 
        })
        
        if(response.status === 200){
          console.log(response.data);
        }else{
          alert("Something Went Wrong");
        }

      }else{
        console.log("User Exist");
      }
      
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

