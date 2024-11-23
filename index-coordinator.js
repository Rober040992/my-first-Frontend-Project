import { addsController } from "./Adds-MVC/adds-controller.js"
import { notificationController } from "./Notifications-MVC/notification-controller.js"

document.addEventListener("DOMContentLoaded", () => { //preparo el DOM

    const addsContainer = document.querySelector(".adds-container") //selecciono container de los adds
    const notificationContainer = document.querySelector(".notifications-container") //selecciono container de notificaciones

    addsController(addsContainer)

    const { showNotification } = notificationController(notificationContainer)
    //funcion para comunicar los notification y adds Controllers a traves del orquestador
    addsContainer.addEventListener("load-info", (event) => {
        showNotification(event.detail.message, event.detail.type);
    })
})