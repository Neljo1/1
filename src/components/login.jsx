
function Login(){
  return(
<div
  style={{
    size: "100px",
    backgroundImage: "url(./19333449.jpg)",
    backgroundSize:'cover',
    height:'650px'
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      height: "100%",
   
      alignItems: "center"
    }}
  >
    <div
      style={{
        backgroundColor: "rgba(29, 25, 25, 0.595)",
        height: "35%",
        width: "40%",
        padding: 8,
        justifyContent: "center",
        borderRadius: 15,
        border: "5px solid rgb(54, 227, 210)"
      }}
    >
      <h1 style={{ display: "flex", justifyContent: "center", color: "white" }}>
        <u>Login</u>
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
            color: "white"
          }}
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
          type="password"
          placeholder="Enter your Password"
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", paddingTop: 15 }}
      >
        <button id="bu">Login</button>
      </div>
      <div style={{ color: "whitesmoke" }}>
        Not registered yet?
        <a href="/register">
          <button>Register</button>
        </a>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex"
        }}
      >
        <a href="/register">
          <button>Home</button>
        </a>
      </div>
    </div>
  </div>
</div>
    );
  }
  export default Login