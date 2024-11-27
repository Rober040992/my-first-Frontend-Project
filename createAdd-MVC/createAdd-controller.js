import { createAdd } from "./createAdd-model.js";

export function createAddController(createAddFormContainer){
    //recoge los datos del que el usuario introduce, como con login y signup
    createAddFormContainer.addEventListener("submit", (event) => {
        event.preventDefault();
        //seleccion de nodos
        const addName = document.querySelector("#name")
        const addDescription = document.querySelector("#description")
        const addPrice = document.querySelector("#price")
        const addStatus = document.querySelector("#status")
        const addImg = document.querySelector("#img")
        //obtencion de datos de esos nodos
        const name = addName.value;
        const description = addDescription.value;
        const price = addPrice.value;
        const status = addStatus.value;
        const img = addImg.value;
        //todos en una variable
        const newAddData = { name, description, price, status, img };
       try {
            handleAddCreation(newAddData);
            alert("Ad successfully created!");
            setTimeout(()=>{
                window.location.href = "/"; // this is index by default
              },3000)
        } catch (error) {
            alert("Failed to create add. Please try again.");
        }
    });

     // Función para manejar la creación del anuncio
     async function handleAddCreation(newAddData) {
        return await createAdd(newAddData);
        
    }
}