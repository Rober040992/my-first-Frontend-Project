export function buildAuthorizedSession() {
    return `
      <button id="create-add"><a href="/create-add.html">Create your Add</a> </button> 
      <button id="close-session">Close session</button>
    `// le meto clases a los buttons estos para separar claramente y que no se mezcle la funcionalidad
  }
  export function buildUnauthorizedSession() {//estos son los botones que se muestran constantemente en index si no estas loggeado

    return `
      <button><a href="/login.html">Login</a></button>
      <button><a href="/signup.html">Signup</a></button>
    `
  }