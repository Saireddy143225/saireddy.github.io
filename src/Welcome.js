import React from 'react'
import { useNavigate } from "react-router-dom";
function Welcome() {
    const navigate=useNavigate()
  return (
    <div>Welcome
    
    <button type="submit" onClick={()=>navigate("/Login")}>Logout</button>
    </div>
  )
}

export default Welcome