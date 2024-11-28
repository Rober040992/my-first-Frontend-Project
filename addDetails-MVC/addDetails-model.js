export async function getAdd(addId) {
    try {
      
      const response = await fetch(`http://127.0.0.1:8000/api/adds/${addId}`);
      const add = await response.json();
      if (!response.ok) {
        throw new Error("Failed resource");
      }
      return add;
    } catch (error) {
      throw new Error(error.message)
    }
  }