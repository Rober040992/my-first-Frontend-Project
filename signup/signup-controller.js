import { createUser } from "./signup-model.js";

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

    const errors = []; //pushing every error in this array to show after
    // 2- validators
    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (!emailRegExp.test(userEmail)) { // if mail doesnt match the regular expresion
      errors.push('bad email format ')
    }
    if (password !== passwordConfirm) { //if the password and password confirm is diff
      errors.push('passwords do not match')
    }
    for (const error of errors) {//EDU, se que estos ifs son cutres pero funcionan de cojones, lo siento
      if(error === 'bad email format '){
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

  async function handleCreateUser(userEmail, password,signupForm) {
    // 3- using api to create the user
    try {
      await createUser(userEmail, password)
      window.location.href = "/"; // this is index by default
    } catch (err) {
      const notificationEvent = new CustomEvent("🤦error ocurred while creating user, try again later", {
        detail: err.message
      })
      signupForm.dispatchEvent(notificationEvent)
    }
  }
}

