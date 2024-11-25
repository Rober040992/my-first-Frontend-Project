import { buildAuthorizedSession, buildUnauthorizedSession } from "./session-view.js"

export function sessionController(sessionContainer) {
    const checkIfUserIsLogged = () => {
        const token = localStorage.getItem("jwt")
        return !!token // turns into a boolean 
    }
    if (checkIfUserIsLogged()) { //check if checkIfUserIsLogged function has been executed ()
        sessionContainer.innerHTML = buildAuthorizedSession();
        const closeSessionButton = sessionContainer.querySelector("#close-session") //selecciono la clase del nodo del view que necesito
        closeSessionButton.addEventListener("click", () => {
          localStorage.removeItem("jwt")
          sessionController(sessionContainer)
        })
    } else {
        sessionContainer.innerHTML = buildUnauthorizedSession()
    }

}