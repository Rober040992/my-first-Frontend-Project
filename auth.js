export  const checkIfUserIsLogged = () => {
    const token = localStorage.getItem("jwt")
    return !!token // turns into a boolean //if not token returns False
}