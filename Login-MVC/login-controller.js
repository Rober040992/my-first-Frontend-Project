import { loginUser } from "./login-model.js";
import {dispatchEventMessageType} from "../Notifications-MVC/eventDispatcherType.js"

export function loginController(loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const userEmailElement = loginForm.querySelector("#user-mail");
        const passwordElement = loginForm.querySelector("#password");

        const userEmail = userEmailElement.value;
        const userPassword = passwordElement.value;

        const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if (!emailRegExp.test(userEmail)) { // if mail doesnt match the regular expresion
          alert('wrong email format ')
        }else{
            handleLogin(userEmail,userPassword, loginForm)
        }

    })
}

async function  handleLogin(userEmail,password, loginForm){ //access to model
    try{
        const token = await loginUser(userEmail,password) // validate the user , get user´s token
        localStorage.setItem("jwt", token) // save the user´s token
        dispatchEventMessageType("User loged!", "Type => 201", loginForm)
        setTimeout(()=>{
            window.location.href = "/"; // this is index by default
          },5000)
    }
    catch (error){
        dispatchEventMessageType(error.message, "Type => 401", loginForm)
    }
}
