import { printAdds } from "./Adds-MVC/controller.js"

document.addEventListener("DOMContentLoaded", ()=>{ //preparo el DOM

    const addsContainer = document.querySelector(".adds-container") //selecciono container

    printAdds(addsContainer) //le hago printAdd a el container
})