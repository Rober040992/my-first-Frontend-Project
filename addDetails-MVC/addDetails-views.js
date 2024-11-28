export function drawAddDetail(add) {
    return `
      <div class = "add-detail-container">
            <h1>hola<h1>
            <p><img src="${add.img}" style="max-width: 100%;"></p>
            <p>Name: ${add.name}</p>
            <p>Description: ${add.description}</p>
            <p>Price: ${add.price}</p>
            <p>Status: ${add.status}</p>
        </div>
    `;
  }