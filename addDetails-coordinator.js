import { detailController } from "./addDetails-MVC/addDetails-controller.js"

document.addEventListener("DOMContentLoaded", () => {
    // get the add.id from the URL
    const searchParams = new URLSearchParams(window.location.search);
    const addId = searchParams.get("id")
    // get the node
    const addDetailContainer = document.querySelector("#add-detail-container")
    //execute the controller
    detailController(addDetailContainer, addId)
})