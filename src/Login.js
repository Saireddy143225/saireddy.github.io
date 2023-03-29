import React from 'react'
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate=useNavigate()
  return (
    
      <form>
        <label>
          Email:
          <input type="email"></input>
          
        </label>
        <label>
          Password:
          <input type='password'></input>
        </label>
      
        <button type="submit" onClick={()=>navigate("/welcome")}>submit</button>
        
      </form>
  )
}

export default Login