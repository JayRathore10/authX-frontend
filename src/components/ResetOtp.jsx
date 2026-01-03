import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./ResetOtp.css";

export function ResetOtp({ otp, setOtp }) {

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.get(`https://authx-backend-yyep.onrender.com/api/auth/reset-password/${otp}`, { withCredentials: true });
      if (response.status === 200) {
        console.log(response.data);
        navigate("/reset-password");
      } else {
        alert("Somthing Went Wrong");
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
      <div className="otp-container">
        <h2>Enter Reset OTP</h2>
        <form className="otp-form">
          <input type="text" placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
          />
          <button type="submit"
            onClick={submitHandler}
          >Verify OTP</button>
        </form>
      </div>
    </>
  );
};

