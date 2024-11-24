export function buildNotification(message, type) {
    return `
    <div class="notification fade-in-out">
        <h2 class="notification-type">${type}</h2>
        <h2 class="notification-message">${message}</h2>
    </div>
    `;

}