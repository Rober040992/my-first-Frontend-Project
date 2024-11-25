export async function loginUser(email, password){
    
    const response = await fetch("http://localhost:8000/auth/login", { //route to validate an exisiting user and give a token
      method: "POST",
      body: JSON.stringify({
        username: email,
        password
      }),
      headers: { //adding a Request header (client to server)
        "Content-type": "application/json"  
      }
    });
    if (!response.ok) {
      throw new Error("🆘Fatal error ocurred🆘")
    }
  }