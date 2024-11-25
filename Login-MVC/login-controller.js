import { loginUser } from "./login-model.js";

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
            handleLogin(userEmail,userPassword)
        }

    })
}

async function  handleLogin(userEmail,password){ //access to model
    try{
        await loginUser(userEmail,password)
    }
    catch (error){
        alert(error.message)
    }
}