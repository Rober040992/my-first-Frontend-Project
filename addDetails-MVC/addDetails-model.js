export async function getAdd(addId) {
    try {
      
      const response = await fetch(`http://127.0.0.1:8000/api/adds/${addId}?_expand=user`);
      const add = await response.json();
      if (!response.ok) {
        throw new Error("Failed resource");
      }
      return add;
    } catch (error) {
      throw new Error(error.message)
    }
  }

  export async function removeAdd(addId) {
    const token = localStorage.getItem('jwt');
    try {
      const response = await fetch(`http://localhost:8000/api/adds/${addId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error("Failed resource");
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }