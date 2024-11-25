import { loginController } from "./Login-MVC/login-controller.js"
import { notificationController } from "./Notifications-MVC/notification-controller.js"

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form")
    const notificationContainer = document.querySelector(".notifications-container")
    loginController(loginForm)

    const { showNotification } = notificationController(notificationContainer)
    loginForm.addEventListener("load-info", (event) => {
        showNotification(event.detail.message, event.detail.type)
    })
})

