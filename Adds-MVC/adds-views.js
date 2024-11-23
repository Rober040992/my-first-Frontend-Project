//aqui creo las finciones que va a usar el drawAddcontroller
export const buildAdd = (add) => {
    const newAdd = document.createElement('div');
    newAdd.innerHTML = `
        <div> ${add.img} </div>
        <div> ${add.name} </div>
        <div> ${add.description} </div>
        <div> ${add.price} &</div>
        <div> ${add.status} </div> 
    `;
    return newAdd;
}

//to show when no Adds
export function emptyAddsList() {
    return "<b>😢 NO ADDS AT THE MOMENT 😒";
}