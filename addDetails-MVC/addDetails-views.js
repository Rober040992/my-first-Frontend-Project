export function drawAddDetail(add) {
    return `
      <div>
            <p><img src="${add.img}" style="max-width: 100%;"></p>
            <p>Name: ${add.name}</p>
            <p>Description: ${add.description}</p>
            <p>Price: ${add.price}</p>
            <p>Status: ${add.status}</p>
        </div>
    `;
  }

  export function deleteButton() {
    const removeButton = document.createElement('button');
    removeButton.textContent = "DELETE";
    return removeButton;
  }