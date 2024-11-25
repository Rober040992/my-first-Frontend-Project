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

    if (response.status === 401){
        throw new Error("USER NOT REGISTERED")
    }
    if (response.status === 404) {
        throw new Error("RESOURCE NOT FOUND");
    }
    if (!response.ok) {
      throw new Error("🆘Error while login user🆘")
    }
    const { accessToken } =  await response.json() //get the string from accesToken object
        return accessToken 
  }