import { loginController } from "./Login-MVC/login-controller.js"

document.addEventListener("DOMContentLoaded", ()=>{
    const loginForm = document.querySelector("form")
    loginController(loginForm)
})

