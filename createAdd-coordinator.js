import { createAddController } from "./createAdd-MVC/createAdd-controller.js";

document.addEventListener("DOMContentLoaded", () => {
    const createAddFormContainer = document.querySelector("#create-add-form");
    createAddController(createAddFormContainer);
});