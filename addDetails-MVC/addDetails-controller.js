import  {getAdd}  from "./addDetails-model.js"
import  {drawAddDetail}  from "./addDetails-views.js"

export async function detailController(detailContainer, addId) {

    try {
        const add = await getAdd(addId)
        detailContainer.innerHTML = drawAddDetail(add)
    } catch (error) {
        alert(error.message)
        window.location.href = "/"
    }
}