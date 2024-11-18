import { getAdds } from "./model.js";
import { drawAdds } from "./drawAddcontroller.js";

async function printAdds() {
    const addsContainer = document.querySelector('.adds-container');
    addsContainer.innerHTML = "";
    try {
      const adds = await getAdds();
      drawAdds(adds, addsContainer)
    } catch (error) {
      alert(error.message)
    }
  }
  
  document.addEventListener("DOMContentLoaded", printAdds);