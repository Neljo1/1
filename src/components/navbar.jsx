function NavBar()
        

 {
    return (
      <div style={{display: 'flex',
      alignItems: 'center',
       justifyContent:'space-between',
       padding: '1px',border: '3px solid',
       backgroundColor:'rgba(5, 2, 2, 0.482)',
       paddingLeft: 9,}}>
        <h1 style={{
        alignItems: 'center',fontFamily:'monospace',
        alignSelf: 'center',color:'aqua',}}>
          Marshall
        </h1>
        <div style={{backgroundColor:'none'}}>
          <a href="/register">
            <button style={{backgroundColor: 'black', border: 10,color: 'white',}}>
                About us
            </button></a>
           < a href="/register">
            <button  style={{backgroundColor: 'black', border: 10,color: 'white',}}>
                Home
            </button></a>
            < a href="/register">
            <button  style={{backgroundColor:'black', border: 10,color: 'white',}}>
                Services
            </button></a>
            < a href="/register">
            <button  style={{backgroundColor:'black', border: 10,color: 'white',}}>
                Contact Us
            </button></a>
            < a href="/login">
            <button  style={{backgroundColor: 'black', border: 10,color: 'white',}}>
              Login
            </button></a>
        </div>
    </div>
    );
  }


export default NavBar;