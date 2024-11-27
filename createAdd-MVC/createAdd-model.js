export async function createAdd( newAddData ) {
    const token = localStorage.getItem('jwt');
    const response = await fetch("http://127.0.0.1:8000/api/adds", {
      method: "POST",
      body: JSON.stringify(newAddData),
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    if (!response.ok) {
        throw new Error("Error creating Add")
      }
  }