import { getAdds } from "./model.js";
import { drawAdds } from "./drawAddcontroller.js";

export async function printAdds(addsContainer) {
  const loader = document.querySelector(".loader")
  addsContainer.innerHTML = "";

  loader.classList.toggle("hidden")
  try {
    const adds = await getAdds();
    drawAdds(adds, addsContainer)

  } catch (error) {
    alert(error.message)

  } finally {
    loader.classList.toggle("hidden")
  }
}