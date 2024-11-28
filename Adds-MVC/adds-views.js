//aqui creo las finciones que va a usar el drawAddcontroller
export const buildAdd = (add) => {
    const newAdd = document.createElement('a');
    newAdd.innerHTML = `
        <div class="each-add">
            <div class="add-grid">
                <img src="${add.img}" class="add-img">
                <div class="add-name">${add.name}</div>
                <div class="add-description"> Description: ${add.description}</div>
                <div class="add-price">${add.price} &dollar;</div>
                <div class="add-status"> To: ${add.status}</div>
                <div>usuario: ${add.user.username}</div>
                <a href="/addDetails.html?id=${add.id}">View Details</a>
            </div>
        </div>   
    `;
    return newAdd;
}
//to show when no Adds
export function emptyAddsList() {
    return "<b>😢 NO ADDS AT THE MOMENT 😒";
}