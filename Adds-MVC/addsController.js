import { getAdds } from "./model.js";
import { drawAdds } from "./drawAddController.js";

export async function addsController(addsContainer) {
  const loader = document.querySelector(".loader")
  addsContainer.innerHTML = "";

  loader.classList.toggle("hidden")
  try {
    const adds = await getAdds();
    drawAdds(adds, addsContainer)

  } catch (error) { //aqui lanzamos un error a modo de evento custom
    const notificationEvent = new CustomEvent("A problem has ocurred while loading adds🤦", {
      detail: error.message
    })
    addsContainer.dispatchEvent(notificationEvent)
  } finally {
    loader.classList.toggle("hidden")
  }
}