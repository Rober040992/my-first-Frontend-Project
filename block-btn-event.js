const boton = document.getElementById("block-btn-event");//selection the node
    
boton.addEventListener("click", (event) => { //add listener to catch the even
  if (event.target.tagName === "BUTTON") {//check if event was launch by a <button>
    event.preventDefault(); //if is a button
    window.location.href = "/";// then redirect to index
  }
});