import { createUser } from "./signup-model.js";
import {dispatchEventMessageType} from "../Notifications-MVC/eventDispatcherType.js"

export function signupController(form) {
  // 1- get user data from the form
  form.addEventListener("submit", (event) => { //get de user data after user click in SUBMIT
    event.preventDefault();//stop propaging the event upwards so we can use it
    const userEmailElement = form.querySelector("#user-mail");
    const passwordElement = form.querySelector("#password");
    const passwordConfirmElement = form.querySelector("#password-confirm");
    //access to the value cuz querySelector give us an HTMLelement (a node) , not the value of the input itself
    const userEmail = userEmailElement.value;
    const password = passwordElement.value;
    const passwordConfirm = passwordConfirmElement.value;

    // 2- validators
    const errors = []; //pushing every error in this array to show after
    
    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (!emailRegExp.test(userEmail)) { // if mail doesnt match the regular expresion
      errors.push('wrong email format ')
    }
    if (password !== passwordConfirm) { //if the password and password confirm is diff
      errors.push('passwords do not match')
    }
    for (const error of errors) {//EDU, se que estos ifs son cutres pero funcionan de cojones, lo siento
      if(error === 'wrong email format '){
        alert('🤦 Incorrect email format ')
      }
      if(error === 'passwords do not match'){
        alert('🤦Passwords do not match')
      }
    }

    if (errors.length === 0) {
      handleCreateUser(userEmail, password, form)
    }
  })
}
async function handleCreateUser(userEmail, password,signupForm) {
  // 3- using api to create the user
  try {
    await createUser(userEmail, password)
    dispatchEventMessageType("User created correclty!", "Type =>👌", signupForm)
    setTimeout(()=>{
      window.location.href = "/"; // this is index by default
    },3000)
  } catch (err) {
    dispatchEventMessageType(err.message, "Type => 404", signupForm)
    
  }
}


