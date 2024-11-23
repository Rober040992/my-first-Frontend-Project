import { signupController } from "./signup/signup-controller.js"
import { notificationController } from "./Notifications-MVC/notification-controller.js"

document.addEventListener("DOMContentLoaded", () => {

  const signupForm = document.querySelector('form')
  const notificationContainer = document.querySelector(".notifications-container")
  signupController(signupForm)


  const { showNotification } = notificationController(notificationContainer)
  signupForm.addEventListener("🤦error ocurred while creating user, try again later", (event) => {
    showNotification(event.detail)
  })
})