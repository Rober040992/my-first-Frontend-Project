import { createAddController } from "./createAdd-MVC/createAdd-controller.js";
import { checkIfUserIsLogged } from "../auth.js"

//validar si el user esta logged antes de crear el add, si no pal index
if(!checkIfUserIsLogged()){
    window.location.href = "/"
}

document.addEventListener("DOMContentLoaded", () => {
    const createAddFormContainer = document.querySelector("#create-add-form");
    createAddController(createAddFormContainer);
});