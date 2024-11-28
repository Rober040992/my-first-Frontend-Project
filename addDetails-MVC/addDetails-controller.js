import  {getAdd, removeAdd}  from "./addDetails-model.js"
import  {drawAddDetail, deleteButton}  from "./addDetails-views.js"
import { getCurrentUserInfo } from "../auth/auth-model.js"

export async function detailController(detailContainer, addId) {

    try {
        const add = await getAdd(addId)
        const user = await getCurrentUserInfo();
        detailContainer.innerHTML = drawAddDetail(add)
        if (user.id === add.user.id) {
            const removeButtonElement = deleteButton();
            detailContainer.appendChild(removeButtonElement);
            removeButtonElement.addEventListener("click", async () => {
              const shouldRemoveAdd = confirm('are you sure?');
              if (shouldRemoveAdd) {
                await removeAdd(add.id);
                window.location.href = "/"
              }
            })
          }
    } catch (error) {
        alert(error.message)
        window.location.href = "/"
    }
}

