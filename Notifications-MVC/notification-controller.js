import { buildNotification } from "./notification-views.js";

export function notificationController (notificationContainer){
    const showNotification = (message) => {
        notificationContainer.innerHTML = buildNotification(message);
      }
      return {
        showNotification
      }
}