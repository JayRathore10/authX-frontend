import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ForgetPassword.css";

export function ForgetPassword({ setEmail, email }) {

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("https://authx-backend-yyep.onrender.com/api/auth/forget-password", {
        email
      });
      if (response.status === 200) {
        console.log(response.data);
        navigate("/reset-otp")
      } else {
        alert("Someting went Wrong Try again");
      }
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message || "Invalid email or passowrd");
      } else {
        alert("Server Went Down");
      }
    }
  }

  return (
    <>
      <div className="forget-container">
        <h2>Enter your email to reset password</h2>
        <form className="forget-form">
          <input type="email" placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit"
            onClick={submitHandler}
          >Send OTP</button>
        </form>
      </div>
    </>
  );
};
