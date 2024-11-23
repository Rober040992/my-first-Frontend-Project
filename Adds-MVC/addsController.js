import { getAdds } from "./model.js";
import { drawAdds } from "./drawAddController.js";
import {dispatchEventMessageType} from "../Notifications-MVC/eventDispatcherType.js"

export async function addsController(addsContainer) {
  const loader = document.querySelector(".loader")
  addsContainer.innerHTML = "";

  loader.classList.toggle("hidden")
  try {
    const adds = await getAdds();
    dispatchEventMessageType("Adds info loaded", "success", addsContainer  )// check this function in ../Notifications-MVC/eventDispatcherType.js"
    drawAdds(adds, addsContainer)

  } catch (error) { //aqui lanzamos un error a modo de evento custom
    dispatchEventMessageType(error.message, "error", addsContainer  )
  } finally {
    loader.classList.toggle("hidden")
  }
}