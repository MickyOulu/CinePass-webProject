import React, { useEffect, useState } from "react";


function App() {

  const [username,setUsername]= useState("");
  const [password,setPassword]= useState("");
  const [message,setMessage]= useState("");

  const handleLogin= async (e)=>{
    e.preventDefault();

    try{
      const response= await fetch("https://cinepass-h6f0f2b9grf9cwen.swedencentral-01.azurewebsites.net/login", {
        method:"POST",
        headers: {"content-type":"application/json"},
        body:JSON.stringify({username, password}),

});

const data= await response.json();
setMessage(data.message);
  } catch(err){
  
  console.error("Login error:", err);
  setMessage("Server error");
  }
};


return (
  <div style ={{ padding: "20px", fontFamily: "Arial" }}>
    <h1>CinePass Login</h1>


    <form onSubmit={handleLogin}>
      <div style={{marginBottom: "10px"}}>
        <label>Username:</label>

        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} required 
        style ={{width:"100%", padding: "8px", marginTop:"5px"}} />
      </div>

      <div style={{marginBottom: "10px"}}>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required 
        style ={{width:"100%", padding: "8px", marginTop:"5px"}} />
      </div>
      

        <button type="submit" style ={{ marginTop: "10px", padding: "10px 20px" }}>Login</button>

    </form>
    
    {message && <p style ={{ marginTop: "20px" }}>{message}</p>}
    </div>

);}


export default App;
