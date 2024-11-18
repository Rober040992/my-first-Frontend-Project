import { buildAdd, emptyAddsList } from "./views.js";

//handle and draw using 2 functions from views
export function drawAdds(adds, addsContainer) {
    if (!adds.length) {
        addsContainer.innerHTML = emptyAddsList();
    } else {
        adds.forEach(add => {
            const newAdd = buildAdd(add);
            addsContainer.appendChild(newAdd);
        })
    }
}