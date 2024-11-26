import { buildAuthorizedSession, buildUnauthorizedSession } from "./session-view.js"

export function sessionController(sessionContainer) {
    const checkIfUserIsLogged = () => {
        const token = localStorage.getItem("jwt")
        return !!token // turns into a boolean //if not token returns False
    }
    if (checkIfUserIsLogged()) { //check if checkIfUserIsLogged() === true
        sessionContainer.innerHTML = buildAuthorizedSession();
        const closeSessionButton = sessionContainer.querySelector("#close-session") //selecciono la clase del nodo del view que necesito
        closeSessionButton.addEventListener("click", () => { //este evento click en cerrar session remove el token, y llama a sessionController para checkIfUserIsLogged
          localStorage.removeItem("jwt")
          sessionController(sessionContainer) //Llama nuevamente a sessionController para actualizar la vista y mostrar el estado de "no logueado"
        })
    } else {
        sessionContainer.innerHTML = buildUnauthorizedSession()
    }

}