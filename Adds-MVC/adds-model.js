export async function getAdds() {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/adds?_expand=user");
        const addInfo = await response.json()
        console.log(addInfo)
        if (!response.ok) {
            throw new Error("🆘Source not existing🆘");
        }
        return addInfo;
    }
    catch (err) {
        throw new Error(err.message)
    }
}