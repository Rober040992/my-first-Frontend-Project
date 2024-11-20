export async function createUser(email, password){
    
    const response = await fetch("http://localhost:8000/auth/register", {
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
      throw new Error("🤦error ocurred while creating user, try use a different Email 👌")
    }
  }