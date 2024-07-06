import { useState } from "react";

function Register(){
  let [userName,setUserName]=useState('');
  let [email,setEmail]=useState('');
  let [password,setPassword]=useState('');
  let[repassword,setRepassword]=useState('');
  let [result,setResult]=useState('')
  function handleResult(){

  }
   
return(
<div
  style={{ backgroundSize: "100%", backgroundImage: "url(/coll/19333449.jpg)" }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      height: "100%",
      width: "100%",
      alignItems: "center"
    }}
  >
    <div
      style={{
        backgroundColor: "rgba(12, 11, 11, 0.444)",
        height: "35%",
        width: "35%",
        padding: 7,
        justifyContent: "center",
        borderRadius: 15,
        border: "5px solid rgb(54, 227, 210)"
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          color: "aliceblue"
        }}
      >
        <u>Register</u>
      </h1>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <input
          style={{
            borderRadius: 5,
            border: "1px solid rgb(54, 227, 210)",
            backgroundColor: "#00000087",
            color: "white",
          }}
          onChange={(e) =>setUserName(e.target.value)}
          type="text"
          placeholder="Enter your Username"
        />
        <input
          style={{
            borderRadius: 5,
            border: "1px solid rgb(54, 227, 210)",
            backgroundColor: "#00000087",
            color: "white"
          }}
          onChange={(e) =>setEmail(e.target.value)}
          type="email"
          placeholder="Enter your Email"
        />
        <input
          style={{
            borderRadius: 5,
            border: "1px solid rgb(54, 227, 210)",
            backgroundColor: "#00000087",
            color: "white"
          }}
          type="password"
          placeholder="Enter your Password"
          onChange={(e) =>setPassword(e.target.value)}

        />
        <input
          style={{
            borderRadius: 5,
            border: "1px solid rgb(54, 227, 210)",
            backgroundColor: "#00000087",
            color: "white"
          }}
          onChange={(e) =>setRepassword(e.target.value)}

          type="password"
          placeholder="Renter your Password"
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center", paddingTop: 9 }}>
        <button id="bu">Signup</button>
      </div>
      <div style={{ color: "white" }}>
        Already a user?
        <a
          style={{
            backgroundColor: "beige",
            justifyContent: "end",
            alignItems: "end"
          }}
          href="/login"
        >
          <button>Login</button>
        </a>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex"
        }}
      >
        <a href="/index">
          <button>Home</button>
        </a>
       

      </div>
    </div>
  </div>
  <h3>{email}</h3>
</div>
  


    );
}
export default Register;